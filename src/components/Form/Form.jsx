import styles from "./Form.module.scss";
import InputSubmit from "../InputSubmit/InputSubmit";
import InputDelete from "../InputDelete/InputDelete";

const Form = ({
  type,
  title,
  id,
  requests,
  children,
  text,
  width,
  setValue,
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
  const handleSubmitNoRequest = async (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleDelete = async () => {
    await requests.delete(requests.additional);
  };
  return (
    <div style={{ width: width }}>
      <h3 className={styles.title}>{title}</h3>
      {type.type === "no-request" ? (
        <form
          onSubmit={(e) => handleSubmitNoRequest(e)}
          className={styles.form}
        >
          {children}
          <div className={styles.button__wrapper}>
            {type.additionalType && <InputDelete handleDelete={handleDelete} />}
            {type.button === "signup" ? (
              <button type="button" className={styles.signup}>
                Sign up
              </button>
            ) : type.button === "login" ? (
              <button type="button" className={styles.login}>
                Log in
              </button>
            ) : (
              <InputSubmit />
            )}
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          {children}
          <div className={styles.button__wrapper}>
            {type.additionalType && <InputDelete handleDelete={handleDelete} />}

            <InputSubmit />
          </div>
        </form>
      )}
      {text}
      <p className={styles.exit}>Click outside to exit</p>
    </div>
  );
};

export default Form;
