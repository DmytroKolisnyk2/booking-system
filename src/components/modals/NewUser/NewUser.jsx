import styles from "./NewUser.module.scss";
import Modal from "../../Modal/Modal";
import FormInput from "../../FormInput/FormInput";
import Select from "../../Select/Select";
import React, { useState } from "react";
import { postManager } from "../../../helpers/api.js";
import Form from "../../Form/Form";

const NewUser = ({ isOpen, handleClose }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
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
    <>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <Form
            type={{ type: "post" }}
            requests={{ post: postManager }}
            name={name}
            description={desc}
            login={login}
            password={password}
            role={role}
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
              name="username"
              value={desc}
              placeholder="Telegram username"
              isRequired={true}
              handler={setDesc}
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
              handler={handleSetRole}
              type="no-request"
              defaultValue="manager/caller/confirmator"
            >
              <option value="manager">Manager</option>
              <option value="caller">Caller</option>
              <option value="confirmator">Confirmator</option>
            </Select>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default NewUser;
