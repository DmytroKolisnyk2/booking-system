import React from "react";
import { Component, useState, useEffect } from "react";
import { getGroups } from "../../helpers/api";
import styles from "../Managers/Managers.module.scss";
import ChangeGroup from "../modals/ChangeGroup/ChangeGroup";

export default function Groups({ text, isOpenModal, role }) {
  const [courses, setCorses] = useState([]);
  const [id, setId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  const getCoursesData = async () => {
    const res = await getGroups(role)
      .then((res) => (res.data ? res.data : setErrorMessage("Example error message!")))
      .catch((error) => setErrorMessage(error.message));

    setCorses(res);
    return res;
  };
  useEffect(() => {
    getCoursesData();
  }, []);
  useEffect(() => {
    getCoursesData();
  }, [isOpen, isOpenModal]);
  return (
    <>
      <div className={styles.wrapper}>
        <ChangeGroup isOpen={isOpen} handleClose={() => handleClose()} id={id} />
        <p className={styles.mini_title}>{text}</p>
      {errorMessage && <p className="error"> {errorMessage} </p>}
        {courses?.length > 0 && (
          <ul className={styles.main_wrapper}>
            {courses.map((item) => {
              return (
                <li className={styles.ul_items} key={item.name}>
                  <p className={styles.ul_items_text}>{item.name}</p>
                  <button
                    className={styles.ul_items_btn}
                    data-modal="change-user"
                    onClick={() => {
                      setIsOpen(!isOpen);
                      setId(item.id);
                    }}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
