import React, { useState } from "react";
import styles from "./LoginBox.module.scss";
import SettingsModal from "../modals/SettingsModal/SettingsModal";
import settingsIco from "../../img/icons/settings.png";

export default function LoginBox({ isAuthenticated }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.loginBox}>
      <div className={styles.loginBoxWrapper}>
        {isAuthenticated ? (
          <p className={styles.role}>Logged in as: Марія (manager)</p>
        ) : (
          <div className={styles.btnWrapper}>
            <button type="button" className={styles.login}>
              Log in
            </button>
            <button type="button" className={styles.signup}>
              Sign up
            </button>
          </div>
        )}
        <button
          className={styles.button}
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          <img src={settingsIco} alt="settings" />
        </button>
        <SettingsModal isOpen={isOpen} handleClose={() => setIsOpen(!isOpen)} />
      </div>
      {isAuthenticated && (
        <button type="button" className={styles.logout}>
          Logout
        </button>
      )}
    </div>
  );
}
