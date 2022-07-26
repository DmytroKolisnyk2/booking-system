import styles from "./NewAppointment.module.scss";
import Modal from "../../Modal/Modal";
import React, { useState } from "react";
import {
  // getCourses,
  postGroup,
  getManagers,
  getGroups,
} from "../../../helpers/api.js";
import Select from "../../Select/Select";
import Form from "../../Form/Form";

const NewAppointment = ({ isOpen, handleClose, data }) => {
  // const [zohoLink, setZohoLink] = useState("");
  const [course, setCourses] = useState("");
  const [manager, setManager] = useState("");
  const [group, setGroups] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [result, setResult] = useState("");
  const [date, setDate] = useState(new Date());

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
            width="1000px"
            title="Create an appointment"
          >
            <p className={styles.input__title}>Mon, 11.07, 11:00, Олена</p>
            <div className={styles.select__wrapper}>
              <Select
                classname={styles.select__label}
                handler={setManager}
                request={getManagers}
                label="manager"
                value={manager}
                setValue={setManager}
                defaultValue="Select manager"
                title="Manager:"
              />
              <Select
                classname={styles.select__label}
                value={course}
                setValue={setCourses}
                request={getManagers} //! */ getCourses need but backend ZLAMAVSYA and /courses deleted NAFIG
                label="course"
                defaultValue="Select course"
                title="Course:"
              />
              <Select
                classname={styles.select__label}
                setValue={setGroups}
                request={getGroups}
                label="group"
                value={group}
                defaultValue="Select group"
                title="Group:"
              />
              <Select
                classname={styles.select__label}
                setValue={setDate}
                request={getGroups} //! I don`t now what request need there or need`s it at all
                value={date}
                label="date"
                defaultValue="11.07, 11:00"
                title="Date and time:"
              />
              <Select
                classname={styles.select__label}
                setValue={setConfirmation}
                label="confirmation"
                defaultValue="Select confirmation"
                title="Confirmation:"
                type="no-request"
                value={confirmation}
              >
                <option value="confirmed">Confirmed</option>
                <option value="no-confirmed">Not confirmed</option>
              </Select>
              <Select
                classname={styles.select__label}
                setValue={setResult}
                label="result"
                defaultValue="Consultation result"
                title="Consultation result:"
                type="no-request"
                value={result}
              >
                <option value="successfull">Successfull</option>
                <option value="no-successfull">Not Successfull</option>
              </Select>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default NewAppointment;
