import styles from "./ConsultationInfo.module.scss";
import Modal from "../../Modal/Modal";
import React, { useState } from "react";
import {
  putManager,
  getCourses,
  deleteManager,
  getGroups,
  getUsersByRole,
} from "../../../helpers/api.js";
import FormInput from "../../FormInput/FormInput";
import DropList from "../../DropList/DropList";
import Select from "../../Select/Select";
import Form from "../../Form/Form";

const ConsultationInfo = ({ isOpen, handleClose, id }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [course, setCourse] = useState("");
  const [group, setGroup] = useState("");
  const [message, setMessage] = useState("");
  const [manager, setManager] = useState("");
  return (
    <>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <Form
            type={{ type: "no-request" }}
            requests={{
              put: putManager,
              additional: id,
              delete: deleteManager,
            }}
            onSubmit={() => {
              handleClose();
              setDesc("");
              setPassword("");
              setLogin("");
              setName("");
            }}
            name={name}
            description={desc}
            course={course}
            result={result}
            // login={login}
            // password={password}
            // role={role}
            title="Consultation Info"
          >
            <DropList
              title="Manager"
              value={manager}
              setValue={setManager}
              request={() => getUsersByRole("Manager")}
              label="course"
              defaultValue="Select course"
            />
            <Select
              title="Course:"
              value={course}
              request={getCourses}
              setValue={setCourse}
              defaultValue="Select course"
            />

            <Select
              title="Result:"
              handler={setResult}
              type="no-request"
              defaultValue="Result"
            >
              <option value={true}>Successfull</option>
              <option value={false}>Not Successful</option>
            </Select>
            <Select
              title="Group:"
              value={group}
              request={getGroups}
              setValue={setGroup}
              defaultValue="Select course"
            />
            <label className={styles.input__label}>
              <p className={styles.input__label}>Message</p>
              <textarea
                className={styles.textarea}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </label>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default ConsultationInfo;
