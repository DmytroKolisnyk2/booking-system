import styles from "./Login.module.scss";
import Modal from "../../Modal/Modal";
import FormInput from "../../FormInput/FormInput";
import React, { useState } from "react";
import { postManager } from "../../../helpers/api.js";
import Form from "../../Form/Form";

const Login = ({ isOpen, handleClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState("");
  const [data, setData] = useState("");
  return (
    <>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <Form
            type={{ type: "no-request", button: "login" }}
            text={
              <p className={styles.exit}>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Log in
                </span>
              </p>
            }
            requests={{ post: postManager }}
            setValue={setData}
            remember={remember}
            email={email}
            password={password}
            title="Sign Up"
          >
            <FormInput
              classname={styles.title}
              title="E-Mail:"
              type="email"
              name="email"
              value={email}
              placeholder="E-Mail"
              isRequired={true}
              handler={setEmail}
            />

            <FormInput
              title="Password:"
              type="password"
              name="password"
              value={password}
              min={5}
              placeholder="Password"
              isRequired={true}
              handler={setPassword}
            />
            <FormInput
              title="Remember me"
              type="checkbox"
              name="password"
              value={remember}
              placeholder="Remember"
              isRequired={true}
              handler={setRemember}
            />
          </Form>
        </Modal>
      )}
    </>
  );
};

export default Login;
