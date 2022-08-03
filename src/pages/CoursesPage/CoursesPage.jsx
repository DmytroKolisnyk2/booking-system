import React from "react";
import { useState, useEffect } from "react";
import styles from "../SuperAdministratorPage/SuperAdminPage.module.scss";
import Button from "../../components/Buttons/Buttons";
import API from "../../helpers/api";
import Courses from "../../components/Courses/Courses";
import NewCourses from "../../components/modals/NewCourse/NewCourse";
import BgWrapper from "../../components/BgWrapper/BgWrapper";

const CoursesPage = () => {
  // const [isManagerModal, setManagerModal] = useState(false);
  // const handleClose = (e) => {
  //   if (e === 0) {
  //     setManagerModal(!isManagerModal);
  //   }
  // };
  const [id, setId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState("");

  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.main_wrapper}>
      <BgWrapper title="Super administrator" />
      <h3 className={styles.main_title}>Manage courses</h3>
      <div className={styles.main_wrapper2}>
        <Courses text={"Courses"} isOpenModal={isOpen} />


      </div>
      <div className={styles.btn_wrapper}>
        <button
          className={styles.add_btn}
          data-modal="new-user"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Add new course +
        </button>
        <NewCourses isOpen={isOpen} handleClose={() => handleClose()} />

        {/* <button
                onClick={() => {
                  setManagerModal(!isManagerModal);
                }}
              >
                Click
              </button>  */}
        {/* <ManagerModal
                isOpen={isManagerModal}
                handleClose={() => handleClose(0)}
              /> */}
        {/* <ModalBtn/> */}
      </div>
    </div>
  );
};

export default CoursesPage;
