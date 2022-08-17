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
  width,
  max,
}) => {
  return (
    <label className={styles.input__label} style={{ width: width }}>
      <p className={classnames(styles.input__title, styles[`${classname}`])}>
        {title}
      </p>
      <input
        className={classnames(styles.input, styles[`${classname}`])}
        type={type}
        name={name}
        required={isRequired}
        value={value}
        pattern={pattern}
        minLength={min}
        maxLength={max}
        placeholder={placeholder}
        onChange={(e) => handler(e.currentTarget.value)}
      />
    </label>
  );
};

export default FormInput;
