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
}) => {
  return (
    <label className={styles.input__label}>
      <p className={styles.input__label}>{title}</p>
      <input
        className={classnames(styles.input, styles[`${classname}`])}
        type={type}
        name={name}
        required={isRequired}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handler(e.currentTarget.value)}
      />
    </label>
  );
};

export default FormInput;
