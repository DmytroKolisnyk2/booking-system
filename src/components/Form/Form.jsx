import styles from "./Form.module.scss";
import InputSubmit from "../InputSubmit/InputSubmit";
import InputDelete from "../InputDelete/InputDelete";
import { useState } from "react";

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
  startName,
  handleClose,
  isDelete,
  isDescription,
  manager,
  ...formData
}) => {
  const [error, setError] = useState(false);
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (type.type === "no-request") {
        if (onSubmit) {
          onSubmit();
        }
        return;
      }
      const data = new FormData();
      for (const i in formData) {
        data.append(i, formData[i]);
      }
      isDescription && data.append("description", "test");
      if (+role === 1 && type.type === "put") {
        const res = await requests.getByName(startName);
        await requests.user(data, res.data.id);
      }
      if (+role === 1 && type.type === "post") await requests.user(data);
      if (manager) {
        const res = await requests.getByName(startName);
        onSubmit();
        return await requests.user(data, res.data.id);
      }
      type.type === "post"
        ? await requests.post(data).catch(() => setError(!error))
        : await requests[type.type](data, requests.additional);
    } catch (e) {
      setError(!error);
      return console.log(e);
    }

    !error && onSubmit && onSubmit();
  };
  const handleDelete = async () => {
    // +role === 1 && (await requests.userDelete(id));
    if (manager === true) {
      const res = await requests.getByName(startName);
      onSubmit();
      return await requests.userDelete(res.data.id);
    }
    await requests.delete(requests.additional);
    if (+role === 1 && type.additionalType === "delete") {
      const res = await requests.getByName(startName);
      await requests.userDelete(res.data.id);
    }

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
