import styles from "./Login.module.scss";
import Modal from "../../Modal/Modal";
import FormInput from "../../FormInput/FormInput";
import React, { useState } from "react";
import { postManager } from "../../../helpers/manager/manager";
import Form from "../../Form/Form";

const Login = ({ isOpen, handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState("");
  return (
    <>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <Form
            onSubmit={() => {
              handleClose();
              setRemember("");
              setEmail("");
            }}
            type={{ type: "no-request", button: "login" }}
            text={
              <>
                <p className={styles.exit}>
                  Don’t have an account?{" "}
                  <span
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    Sign Up
                  </span>
                </p>
                <p className={styles.exit}>
                  Forgot your password?{" "}
                  <span
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    Click here
                  </span>
                </p>
              </>
            }
            requests={{ post: postManager }}
            remember={remember}
            email={email}
            password={password}
            title="Log In"
          >
            <FormInput
              classname={styles.title}
              title="E-Mail:"
              type="email"
              name="email"
              value={email}
              placeholder="E-Mail"
              isRequired={true}
              setValue={setEmail}
            />

            <FormInput
              title="Password:"
              type="password"
              name="password"
              value={password}
              min={5}
              placeholder="Password"
              isRequired={true}
              setValue={setPassword}
            />
            <label className={styles.input__label}>
              <div className={styles.checkbox__wrapper}>
                <input
                  className={styles.input}
                  type="checkbox"
                  name="remember"
                  required
                  value={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />

                <p className={styles.input__title}>Remember me</p>
              </div>
            </label>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default Login;
