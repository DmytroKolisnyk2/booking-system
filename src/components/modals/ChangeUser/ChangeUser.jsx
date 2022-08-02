import styles from "./ChangeUser.module.scss";
import Modal from "../../Modal/Modal";
import React, { useState } from "react";
import {
  putManager,
  deleteManager,
  putUser,
  deleteUser,
  getRoles,
} from "../../../helpers/api.js";
import FormInput from "../../FormInput/FormInput";
import Select from "../../Select/Select";
import Form from "../../Form/Form";
const ChangeUser = ({ isOpen, handleClose, id }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  return (
    <>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <Form
            type={{ type: "put", additionalType: "delete" }}
            requests={{
              put: putUser,
              additional: id,
              delete: deleteUser,
            }}
            name={name}
            description={desc}
            login={login}
            password={password}
            role_id={role}
            title="Change user's info"
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
                title="Password:"
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                isRequired={true}
                handler={setPassword}
              />
            </div>{" "}
            <Select
              title="Role:"
              request={getRoles}
              setValue={setRole}
              value={role}
              // type="no-request"
              defaultValue="manager/caller/confirmator"
            >
              {/* <option value="manager">Manager</option>
              <option value="caller">Caller</option>
              <option value="confirmator">Confirmator</option> */}
            </Select>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default ChangeUser;