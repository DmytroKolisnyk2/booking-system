import styles from "./InputDelete.module.scss";
import { error } from "@pnotify/core";

const InputDelete = ({ handleDelete }) => {
  return (
    <button
      type="button"
      className={styles.input__delete}
      onClick={() => {
        handleDelete();
        // error("Delete feature coming soon(never)");
      }}
    >
      Delete
    </button>
  );
};

export default InputDelete;
