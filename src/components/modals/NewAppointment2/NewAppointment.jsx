import styles from "./NewAppointment.module.scss";
import Modal from "../../Modal/Modal";
import React, { useState } from "react";
import {getGroups} from '../../../helpers/group/group';
import {getUsersByRole} from '../../../helpers/user/user';
import {createAppointment, postAppointment} from '../../../helpers/appointment/appointment';
import {getCourses} from '../../../helpers/course/course';
import Select from "../../Select/Select";
import Form from "../../Form/Form";
import FormInput from "../../FormInput/FormInput";
import classnames from "classnames";
import DropList from "../../DropList/DropList";

const NewAppointment = ({ isOpen, handleClose, time, weekId, dayIndex }) => {
  const [link, setLink] = useState("");
  const [courseId, setCourses] = useState("");
  const [manager, setManager] = useState("");
  const [managerId, setManagerId] = useState("");
  const [group, setGroups] = useState(1);
  const [message, setMessage] = useState("");
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState("");
  return (
    <>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <Form
            onSubmit={() => {
              createAppointment(
                link,
                managerId,
                weekId,
                dayIndex,
                time,
                courseId,
                phone,
                age
              );
              handleClose();
            }}
            type={{ type: "no-request" }}
            requests={{ post: createAppointment }}
            // course_id={course}
            group_id={group}
            age={age}
            slot_id={109}
            zoho_link={link}
            comments={message}
            phone={phone}
            manager={manager}
            title="Create an appointment"
          >
            <DropList
              title="Manager"
              value={manager}
              setValue={setManager}
              setValueSecondary={setManagerId}
              request={() => getUsersByRole("Manager")}
            />
            <Select
              classname={styles.select__label}
              value={courseId}
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

export default NewAppointment;
