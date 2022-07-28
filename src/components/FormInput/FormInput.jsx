import styles from "./FormInput.module.scss";
import React from "react";

import classnames from "classnames";

const FormInput = ({
  classname,
  title,
  type,
  name,
  isRequired,
  placeholder,
  value,
  handler,
  pattern,
  min,
}) => {
  return (
    <label className={styles.input__label}>
      <p className={classnames(styles.input__label, classname)}>{title}</p>
      <input
        className={classnames(styles.input, styles[`${classname}`])}
        type={type}
        name={name}
        required={isRequired}
        value={value}
        pattern={pattern}
        minLength={min}
        placeholder={placeholder}
        onChange={(e) => handler(e.currentTarget.value)}
      />
    </label>
  );
};

export default FormInput;
