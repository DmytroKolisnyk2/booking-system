import styles from "./Form.module.scss";
import InputSubmit from "../InputSubmit/InputSubmit";
import InputDelete from "../InputDelete/InputDelete";
import { useState, useEffect } from "react";

const Form = ({
  type,
  onSubmit,
  title,
  id,
  requests,
  children,
  width,
  text,
  role,
  handleClose,
  isDelete,
  ...formData
}) => {
  const [error, setError] = useState(false);
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData();
      for (const i in formData) {
        data.append(i, formData[i]);
      }
      data.append("description", "test");
      +role === 1 && (await requests.user(data));
      if (+role !== 1 && +role && isDelete) {
        await requests.userDelete(id);
      }
      type.type === "post"
        ? await requests.post(data).catch(() => setError(!error))
        : await requests[type.type](data, requests.additional);
    } catch (e) {
      setError(!error);
      console.log(error);
      return console.log(e);
    }
    !error && onSubmit && onSubmit();
  };
  const handleDelete = async () => {
    +role === 1 && (await requests.userDelete(id));
    await requests.delete(requests.additional);
    !error && onSubmit && onSubmit();
  };
  return (
    <div className={styles.modal} style={{ width: width }}>
      <h3 className={styles.title}>{title}</h3>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className={styles.form}
      >
        {children}
        <div className={styles.button__wrapper}>
          {type.button === "login" && (
            <button
              type="button"
              onClick={(e) => {
                handleSubmit(e);
              }}
              className={styles.login}
            >
              Log in
            </button>
          )}
          {type.button === "signup" && (
            <button
              type="button"
              onClick={(e) => {
                handleSubmit(e);
              }}
              className={styles.signup}
            >
              Sign Up
            </button>
          )}

          {type.additionalType && <InputDelete handleDelete={handleDelete} />}
          {!type.button && <InputSubmit />}
        </div>
      </form>
      {text}
      <p className={styles.exit}>Click outside to exit</p>
    </div>
  );
};

export default Form;
