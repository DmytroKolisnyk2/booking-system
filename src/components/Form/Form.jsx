import styles from "./Form.module.scss";
import InputSubmit from "../InputSubmit/InputSubmit";
import InputDelete from "../InputDelete/InputDelete";

const Form = ({ type, title, id, requests, children, width, ...formData }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    for (const i in formData) {
      data.append(i, formData[i]);
    }
    // data.append("description", "test"); //* it needs for some not completed backend
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
      <form onSubmit={handleSubmit} className={styles.form}>
        {children}
        <div className={styles.button__wrapper}>
          {type.additionalType && <InputDelete handleDelete={handleDelete} />}

          <InputSubmit />
        </div>
      </form>

      <p className={styles.exit}>Click outside to exit</p>
    </div>
  );
};

export default Form;
