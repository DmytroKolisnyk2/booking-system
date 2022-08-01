import React from "react";
import { Component, useState, useEffect } from "react";
import { getManagers } from "../../helpers/api";
import styles from "./Managers.module.scss";
import ChangeUser from "../modals/ChangeUser/ChangeUser";

const Managers = ({ text, isOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [managers, setManagers] = useState([]);
  const [id, setId] = useState(0);
  const getManagersData = async () => {
    const res = await getManagers()
      .then((res) => res.data)
      .catch((error) => console.log(error));

    setManagers(res);
    console.log(res);
    return res;
  };
  useEffect(() => {
    getManagersData();
  }, []);
  useEffect(() => {
    const get = async () => {
      await getManagersData();
    };
    get();
  }, [isOpen, isOpenModal]);
  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.mini_title}>{text}</p>
        {managers.length > 0 && (
          <ul className={styles.main_wrapper}>
            {managers.map((item) => {
              return (
                <li className={styles.ul_items} key={item.name}>
                  <p
                    className={styles.ul_items_text}
                    onClick={() => {
                      setIsOpen(!isOpen);
                      setId(item.id);
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
        <ChangeUser
          isOpen={isOpen}
          handleClose={() => setIsOpen(!isOpen)}
          id={id}
        />
      </div>
    </>
  );
};
export default Managers;
