import styles from "./SignUp.module.scss";
import Modal from "../../Modal/Modal";
import FormInput from "../../FormInput/FormInput";
import React, { useState } from "react";
import { postManager } from "../../../helpers/manager/manager";
import Form from "../../Form/Form";

const SignUp = ({ isOpen, handleClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  return (
    <>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <Form
            type={{ type: "no-request", button: "signup" }}
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
            name={name}
            email={email}
            data={data}
            phone={phone}
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
              title="Name, Surname:"
              type="text"
              name="username"
              value={name}
              placeholder="Name, Surname"
              isRequired={true}
              handler={setName}
            />

            <FormInput
              title="Password:"
              type="password"
              name="password"
              value={password}
              min={5}
              placeholder="Password(minimum 5)"
              isRequired={true}
              handler={setPassword}
            />
            <FormInput
              title="Phone number:"
              type="tel"
              name="phone"
              value={phone}
              pattern="^[0-9]{3}\s[0-9]{2}\s[0-9]{3}\s[0-9]{4}"
              placeholder="380 96 111 444 8888"
              isRequired={true}
              handler={setPhone}
            />
          </Form>
        </Modal>
      )}
    </>
  );
};

export default SignUp;
