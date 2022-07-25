import styles from "./NewCourse.module.scss";
import Modal from "../../Modal/Modal";
import React, { Component, useState, useEffect } from "react";
import { postManager, postCourse } from "../../../helpers/api.js";
import classnames from "classnames";

const NewCourse = ({ isOpen, handleClose }) => {
  const [name, setName] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("description", "test");
    postCourse(data);
  };

  return (
    <div>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <div className={styles.modal}>
            <h3 className={styles.title}>New Course</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.input__label}>
                <p className={styles.input__label}>Course name:</p>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  required
                  placeholder="Course name"
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </label>
              <input
                className={styles.input__submit}
                type="submit"
                value="Save"
              />
            </form>
            <p className={styles.exit}>Click outside to exit</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default NewCourse;
