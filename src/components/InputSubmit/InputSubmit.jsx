import styles from "./InputSubmit.module.scss";

const InputSubmit = ({buttonTitle}) => {
  return <input className={styles.input__submit} type="submit" value={buttonTitle} />;
};

export default InputSubmit;
