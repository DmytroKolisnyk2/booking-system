import styles from "./NewUser.module.scss";
import Modal from "../../Modal/Modal";
import FormInput from "../../FormInput/FormInput";
import Select from "../../Select/Select";
import React, { useState } from "react";
import { postManager, getRoles } from "../../../helpers/api.js";
import Form from "../../Form/Form";

const NewUser = ({ isOpen, handleClose, administrator }) => {
  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  return (
    <>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <Form
            type={{ type: "post" }}
            requests={{ post: postManager }}
            name={name}
            telegram={telegram}
            login={login}
            password={password}
            role_id={role}
            title="New user"
          >
            <FormInput
              title="Name:"
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              isRequired={true}
              handler={setName}
            />
            <FormInput
              title="Telegram username:"
              type="text"
              name="telegram"
              value={telegram}
              placeholder="Telegram username"
              isRequired={true}
              handler={setTelegram}
            />

            <div className={styles.input__block}>
              <FormInput
                classname="input__bottom"
                title="Login:"
                type="text"
                name="login"
                value={login}
                placeholder="Login"
                isRequired={true}
                handler={setLogin}
              />
              <FormInput
                classname="input__bottom"
                title="Passwotd:"
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                isRequired={true}
                handler={setPassword}
              />
            </div>

            <Select
              title="Role:"
              request={getRoles}
              setValue={setRole}
              value={role}
              isAdministrator={administrator}
              defaultValue="manager/caller/confirmator"
            >
            </Select>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default NewUser;
