import styles from "./NewAppointment.module.scss";
import Modal from "../../Modal/Modal";
import React, { useState } from "react";
import {
  getCourses,
  postGroup,
  getManagers,
  getGroups,
} from "../../../helpers/api.js";
import Select from "../../Select/Select";
import Form from "../../Form/Form";
import FormInput from "../../FormInput/FormInput";
import classnames from "classnames";

const NewAppointment = ({ isOpen, handleClose, data }) => {
  const [link, setLink] = useState("");
  const [course, setCourses] = useState("");
  const [manager, setManager] = useState("");
  const [group, setGroups] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [result, setResult] = useState("");
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState("");
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState("");

  return (
    <div>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <Form
            type={{ type: "post" }}
            requests={{ post: postGroup }}
            course={course}
            manager={manager}
            group={group}
            confirmation={confirmation}
            result={result}
            date={date}
            title="Create an appointment"
          >
            <p className={styles.input__title}>Manager: Олена</p>
            <Select
              classname={styles.select__label}
              value={course}
              setValue={setCourses}
              request={getCourses}
              label="course"
              defaultValue="Select course"
              title="Course:"
            />
            <FormInput
              title="CRM link:"
              type="text"
              name="link"
              value={link}
              placeholder=""
              isRequired={true}
              handler={setLink}
            />
            <div className={styles.input__block}>
              <FormInput
                width="20%"
                classname="input__bottom__age"
                title="Age:"
                type="number"
                name="age"
                value={age}
                placeholder="Age"
                isRequired={true}
                handler={setAge}
              />
              <FormInput
                width="70%"
                classname="input__bottom__phone"
                title="Phone Number:"
                type="Phone"
                name="Phone"
                value={phone}
                placeholder="Phone number"
                isRequired={true}
                handler={setPhone}
              />
            </div>
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
    </div>
  );
};

export default NewAppointment;
