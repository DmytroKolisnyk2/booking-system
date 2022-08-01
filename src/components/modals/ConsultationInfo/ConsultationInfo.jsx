import styles from "./ConsultationInfo.module.scss";
import Modal from "../../Modal/Modal";
import React, { useState } from "react";
import {
  putManager,
  getCourses,
  deleteManager,
  getGroups,
} from "../../../helpers/api.js";
import FormInput from "../../FormInput/FormInput";
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
            onSubmit={handleClose}
            name={name}
            description={desc}
            course={course}
            result={result}
            // login={login}
            // password={password}
            // role={role}
            title="Consultation Info"
          >
            <p className={styles.input__title}>Mon, 11.07, 11:00, Олена</p>
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
