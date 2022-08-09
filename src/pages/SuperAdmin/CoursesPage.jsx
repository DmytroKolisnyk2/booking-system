import React from "react";
import { useState } from "react";
import styles from "../SuperAdmin/SuperAdminPage.module.scss";
import Courses from "../../components/Courses/Courses";
import NewCourses from "../../components/modals/NewCourse/NewCourse";

const CoursesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.main_wrapper}>
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
      </div>
    </div>
  );
};

export default CoursesPage;
