import styles from "./ChangeGroup.module.scss";
import Modal from "../../Modal/Modal";
import React, { Component, useState, useEffect } from "react";
import { putGroup, deleteGroup } from "../../../helpers/api.js";

const ChangeGroup = ({ isOpen, handleClose, id }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("id", id);
    data.append("timetable", id);
    putGroup(data, id);
  };
  const handleDelete = () => {
    deleteGroup(id)
  };
  return (
    <div>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <div className={styles.modal}>
            <h3 className={styles.title}>Change group's info</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.input__label}>
                <p className={styles.input__label}>Group name:</p>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  required
                  placeholder="Group name"
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

export default ChangeGroup;
