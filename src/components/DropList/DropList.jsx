import styles from "./DropList.module.scss";
import React from "react";
import { useState, useEffect } from "react";
import classnames from "classnames";

const DropList = ({
  classname,
  title,
  type,
  value,
  setValue,
  width,
  request,
}) => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const getData = async () => {
    const res = await request()
      .then((res) => res.data)
      .catch((error) => console.log(error));

    if (res === undefined) {
      setData([]);
      return;
    }
    setData(res);
    return res;
  };
  useEffect(() => {
    if (type === "no-request") {
      return;
    }
    setValue("Select manager")
    getData();
  }, []);

  return (
    <label className={styles.input__label} style={{ width: width }}>
      <p
        className={classnames(styles.input__title, styles[`${classname}`])}
        onClick={() => {
          setIsOpen(!isOpen);
          isOpen && getData();
        }}
      >
        {title}: <span>{value} </span> 
      </p>
      <ul className={classnames(styles.menu, isOpen && styles['menu-active'])}>
        {data.map((i) => {
          return (
            <li
              className={classnames(
                styles.input__option,
                isOpen && styles.active
              )}
              key={i.id}
              onClick={(e) => {
                setIsOpen(!isOpen);
                setValue(i.name);
              }}
            >
              {i.name}
            </li>
          );
        })}
      </ul>
    </label>
  );
};

export default DropList;