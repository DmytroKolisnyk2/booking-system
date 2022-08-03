import styles from "./Form.module.scss";
import InputSubmit from "../InputSubmit/InputSubmit";
import InputDelete from "../InputDelete/InputDelete";

const Form = ({
  type,
  onSubmit,
  title,
  id,
  requests,
  children,
  width,
  text,
  ...formData
}) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    for (const i in formData) {
      data.append(i, formData[i]);
    }
    data.append("description", "test"); //* it needs for some not completed backend
    type.type === "post"
      ? await requests.post(data)
      : await requests[type.type](data, requests.additional);
  };
  const handleDelete = async () => {
    await requests.delete(requests.additional);
  };
  return (
    <div className={styles.modal} style={{ width: width }}>
      <h3 className={styles.title}>{title}</h3>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          {onSubmit && (onSubmit())}
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
