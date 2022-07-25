import styles from "./ChangeCourse.module.scss";
import Modal from "../../Modal/Modal";
import React, { Component, useState, useEffect } from "react";
import { postManager, putCourse, deleteCourse } from "../../../helpers/api.js";
import classnames from "classnames";

const NewManager = ({ isOpen, handleClose, id }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("description", "test");

    await putCourse(data, id);
  };
  const handleDelete = async () => {
    await deleteCourse(id);
  };
  return (
    <div>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <div className={styles.modal}>
            <h3 className={styles.title}>Change course's info</h3>
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
              <div className={styles.button__wrapper}>
                <button
                  type="button"
                  className={styles.input__delete}
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <input
                  className={styles.input__submit}
                  type="submit"
                  value="Save"
                />
              </div>
            </form>
            <p className={styles.exit}>Click outside to exit</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default NewManager;
