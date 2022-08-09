import styles from "./SettingsModal.module.scss";
import Modal from "../../Modal/Modal";
import Select from "../../Select/Select";
import React, { useState } from "react";
import Form from "../../Form/Form";
import classnames from "classnames";

const SettingsModal = ({ isOpen, handleClose }) => {
  const [language, setLanguage] = useState("english");
  return (
    <>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <Form
            type={{ type: "no-request" }}
            language={language}
            setValue={setLanguage}
            title="Settings"
          >
            <Select
              title="Language"
              setValue={setLanguage}
              type="no-request"
              value={language}
              defaultValue="english"
              classname={styles.title}
            >
              <option value="english">English</option>
              <option value="ukrainian">Ukrainian</option>
            </Select>
            <div
              className={classnames(styles.btnWrapper, styles.loginBoxWrapper)}
            >
              <button type="button" className={styles.login}>
                Log in
              </button>
              <button type="button" className={styles.signup}>
                Sign up
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default SettingsModal;
