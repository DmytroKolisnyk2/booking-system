import styles from "./ChangeUser.module.scss";
import Modal from "../../Modal/Modal";
import React, { useState, useEffect } from "react";

import { putUser, deleteUser, getRoles } from "../../../helpers/user/user";
import {
  putManager,
  postManager,
  deleteManager,
  getManagerByName,
} from "../../../helpers/manager/manager";
import FormInput from "../../FormInput/FormInput";
import Select from "../../Select/Select";
import Form from "../../Form/Form";
const ChangeUser = ({
  isOpen,
  handleClose,
  id,
  dataName,
  dataDesc,
  dataRole,
  // manager,
  dataLogin,
  // dataPassword,
  administrator,
}) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(2);
  useEffect(() => {
    setName(dataName);
    setDesc(dataDesc);
    setRole(dataRole);
    setLogin(dataLogin);
    // setPassword(dataPassword);
  }, [isOpen, dataDesc, dataLogin, dataRole, dataName]);

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
              user: putManager,
              post: postManager,
              getByName: getManagerByName,
              userDelete: deleteManager,
            }}
            startRole={dataRole}
            role={role}
            startName={dataName}
            name={name}
            onSubmit={() => {
              handleClose();
              setRole("");
              setDesc("");
              setPassword("");
              setLogin("");
              setName("");
            }}
            telegram={desc}
            login={login}
            status={{
              successMessage: "Successfully changed user",
              failMessage: "Failed to change user",
              successMessageDelete: "Successfully deleted user",
              failMessageDelete: "Failed to delete user",
            }}
            password={password}
            role_id={role}
            title="Change user's info"
          >
            <FormInput
              title="Name:"
              type="text"
              name="name"
              max={50}
              value={name}
              placeholder="Name"
              isRequired={true}
              handler={setName}
            />
            <FormInput
              title="Telegram username:"
              type="text"
              max={50}
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
                max={50}
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
                max={50}
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
              administrator={administrator}
              manager={true}
              defaultValue="manager/caller/confirmator"
            ></Select>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default ChangeUser;
