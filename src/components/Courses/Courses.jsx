import React from "react";
import { Component, useState, useEffect } from "react";
import { getCourses } from "../../helpers/api";
import styles from "../Managers/Managers.module.scss";
import ChangeCourses from "../modals/ChangeCourse/ChangeCourse";

export default function Courses({ text, isOpenModal, role }) {
  const [courses, setCorses] = useState([]);
  const [id, setId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  const getCoursesData = async () => {
    const res = await getCourses(role)
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
      {errorMessage && <p className="error"> {errorMessage} </p>}
      <div className={styles.wrapper}>
        <ChangeCourses isOpen={isOpen} handleClose={() => handleClose()} id={id} />
        <p className={styles.mini_title}>{text}</p>
        {courses?.length > 0 && (
          <ul className={styles.main_wrapper}>
            {courses.map((item) => {
              return (
                <li className={styles.ul_items} key={item.name}>
                  <p className={styles.ul_items_text}>{item.name}</p>
                  {/* <button className={styles.ul_items_btn} onClick={ <ChangeUser
            isOpen={isOpen}
            handleClose={() => handleClose()}
            id={id}
          />}/> */}
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
