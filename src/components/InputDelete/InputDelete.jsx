import styles from "./InputDelete.module.scss";

const InputDelete = ({handleDelete}) => {
  return (
    <button
      type="button"
      className={styles.input__delete}
      onClick={handleDelete}
    >
      Delete
    </button>
  );
};

export default InputDelete;
