import styles from "./NewManager.module.scss";
import Modal from "../../Modal/Modal";
import React, { useState, useEffect } from "react";
import { postManager } from "../../../helpers/api.js";
import classnames from "classnames";

const NewManager = ({ isOpen, handleClose }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("description", desc);
    data.append("login", login);
    data.append("password", password);
    data.append("role", role);
    postManager(data);
  };
  const erenSubmit = async (event) => {
    event.preventDefault();
    const managerData = new FormData();
    managerData.append("name", "Eren Jaeger");
    managerData.append(
      "description",
      "Eren Jaeger from paradise privit privit🥰🥰🥰"
    );
    managerData.append("login", "erenjaeger885");
    managerData.append("password", "8702856EJ");
    postManager(managerData);
  };
  const handleSetRole = (e) => {
    setRole(e.currentTarget.value);
  };

  return (
    <div>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <div className={styles.modal}>
            <h3 className={styles.title}>New Administrator</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.input__label}>
                <p className={styles.input__label}>Name:</p>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  required
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
                  required
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
                    required
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
                    required
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                </label>
              </div>
              <label className={styles.input__label}>
                <p className={styles.input__label}>Role:</p>
                <select
                  defaultValue={""}
                  className={classnames(styles.input, styles.select)}
                  onChange={(e) => handleSetRole(e)}
                  required
                >
                  <option value="" disabled hidden>
                    manager/caller/confirmator
                  </option>
                  <option value="manager">Manager</option>
                  <option value="caller">Caller</option>
                  <option value="confirmator">Confirmator</option>
                </select>
              </label>
              <input
                className={styles.input__submit}
                type="submit"
                value="Save"
              />
            </form>
            <p className={styles.exit}>Click outside to exit</p>
            {/* <button
              className={styles.input__submit}
              onClick={(event) => erenSubmit(event)}
            >
              Eren Jaeger
            </button> */}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default NewManager;
