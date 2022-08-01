import React, { useState } from "react";
import styles from "./LoginBox.module.scss";
import SettingsModal from "../modals/SettingsModal/SettingsModal";
import Login from "../modals/Login/Login";
import SignUp from "../modals/SignUp/SignUp";
import settingsIco from "../../img/icons/settings.png";

export default function LoginBox({ isAuthenticated }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState("");
  return (
    <div className={styles.loginBox}>
      <div
        className={styles.loginBoxWrapper}
        onClick={(e) => {
          e.target.dataset.modal && setModal(e.target.dataset.modal);
        }}
      >
        {modal === "login" && (
          <Login isOpen={isOpen} handleClose={() => setIsOpen(!isOpen)} />
        )}
        {modal === "signup" && (
          <SignUp isOpen={isOpen} handleClose={() => setIsOpen(!isOpen)} />
        )}
        {isAuthenticated ? (
          <p className={styles.role}>Logged in as: Марія (manager)</p>
        ) : (
          <div className={styles.btnWrapper}>
            <button
              type="button"
              data-modal="login"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className={styles.login}
            >
              Log in
            </button>
            <button
              type="button"
              data-modal="signup"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className={styles.signup}
            >
              Sign up
            </button>
          </div>
        )}
        <button
          className={styles.button}
          data-modal="settings"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          <img
            src={settingsIco}
            alt="settings"
            data-modal="settings"
            onClick={() => setIsOpen(!isOpen)}
          />
        </button>
        {modal === "settings" && (
          <SettingsModal
            isOpen={isOpen}
            handleClose={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
      {isAuthenticated && (
        <button type="button" className={styles.logout}>
          Logout
        </button>
      )}
    </div>
  );
}
