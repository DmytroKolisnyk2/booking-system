import styles from "./Select.module.scss";
import React, { useState } from "react";
import classnames from "classnames";

const Select = ({ getData, defaultValue, handler }) => {
  const [data, setData] = useState([]);


  return (
    <label className={styles.input__label}>
      <p className={styles.input__label}>Role:</p>
      <select
        defaultValue={""}
        className={classnames(styles.input, styles.select)}
        onChange={(e) => handler(e)}
        onClick={getData}
        required
      >
        <option value="" disabled hidden>
          {defaultValue}
        </option>
        {data.map((i) => {
          return (
            <option value={i.id} key={i.id}>
              {i.name}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default Select;
