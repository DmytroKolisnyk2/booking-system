import styles from "./ChangeAdmin.module.scss";
import Modal from "../../Modal/Modal";
import React, { Component, useState, useEffect } from "react";
import {
  postManager,
  putManager,
  deleteManager,
} from "../../../helpers/api.js";
import classnames from "classnames";

const ChangeAdmin = ({ isOpen, handleClose, id }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const userId = id;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("description", desc);
    data.append("login", login);
    data.append("password", password);
    data.append("role", role);
    await putManager(data, userId);
  };
  const handleDelete = async () => {
    await deleteManager(id);
  };

  return (
    <div>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <div className={styles.modal}>
            <h3 className={styles.title}>Change admin's info</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.input__label}>
                <p className={styles.input__label}>Name:</p>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </label>
              <label className={styles.input__label}>
                <p className={styles.input__label}>Telegram username:</p>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Telegram username"
                  name="description"
                  onChange={(e) => setDesc(e.currentTarget.value)}
                />
              </label>
              <div className={styles.input__block}>
                <label className={styles.input__label}>
                  <p className={styles.input__label}>Login:</p>
                  <input
                    className={classnames(styles.input, styles.input__bottom)}
                    type="text"
                    name="login"
                    placeholder="Login"
                    onChange={(e) => setLogin(e.currentTarget.value)}
                  />
                </label>
                <label className={styles.input__label}>
                  <p className={styles.input__label}>Password:</p>
                  <input
                    className={classnames(styles.input, styles.input__bottom)}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                </label>
              </div>
              <label className={styles.input__label}>
                <p className={styles.input__label}>Role:</p>
                <select
                  defaultValue={""}
                  className={classnames(styles.input, styles.select)}
                  required
                >
                  <option value="" disabled>
                    manager/caller/confirmator
                  </option>
                  <option value="manager">Manager</option>
                  <option value="caller">Caller</option>
                  <option value="confirmator">Confirmator</option>
                </select>
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

export default ChangeAdmin;
