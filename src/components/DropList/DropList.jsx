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
  setValueSecondary,
  width,
  request,
  appointment,
  changeAppointment,
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
    const get = async () => {
      const data = await getData();
      return data;
    };
    get().then((res) => {
      setValue(res[0]?.name);
      if (setValueSecondary) {
        if (changeAppointment) {
          return;
        }
        setValueSecondary(res[0]?.manager_id);
      }
    });
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <ul className={classnames(styles.menu, isOpen && styles["menu-active"])}>
        {data.map((i) => {
          if (i.name === "Не призначено") return;
          if (appointment) {
            return (
              <li
                className={classnames(
                  styles.input__option,
                  isOpen && styles.active
                )}
                key={i.manager_id}
                onClick={() => {
                  setIsOpen(!isOpen);
                  setValue(i.name);
                  if (setValueSecondary) {
                    setValueSecondary(i.manager_id);
                  }
                }}
              >
                {i.name}
              </li>
            );
          } else {
            return (
              <li
                className={classnames(
                  styles.input__option,
                  isOpen && styles.active
                )}
                key={i.id}
                onClick={() => {
                  setIsOpen(!isOpen);
                  setValue(i.name);
                  if (setValueSecondary) {
                    setValueSecondary(i.id);
                  }
                }}
              >
                {i.name}
              </li>
            );
          }
        })}
      </ul>
    </label>
  );
};

export default DropList;
