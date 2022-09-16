import styles from "./ChangeAppointment.module.scss";
import Modal from "../../Modal/Modal";
import React, { useState, useEffect } from "react";
import { putAppointment } from "../../../helpers/appointment/appointment";
import { getCourses } from "../../../helpers/course/course";
import Select from "../../Select/Select";
import Form from "../../Form/Form";
import FormInput from "../../FormInput/FormInput";
import PostponeModal from "../PostponeModal/PostponeModal";

const ChangeAppointment = ({
  isOpen,
  setIsOpenModal,
  handleClose,
  manager,
  id,
  course,
  crm,
  day,
  hour,
  managerIdInit,
  number,
  weekId,
  slotId,
  messageInit,
}) => {
  const [isOpenPostpone, setIsOpen] = useState(false);
  const [link, setLink] = useState("");
  const [courseId, setCourses] = useState("");
  const [message, setMessage] = useState("");
  const [managerId, setManagerId] = useState(managerIdInit);
  const [managerName, setManagerName] = useState(manager);
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState("");
  useEffect(() => {
    setCourses(course);
    setPhone(number);
    setMessage(messageInit);
    setLink(crm);
  }, [isOpen]);
  return (
    <>
      <PostponeModal
        isOpen={isOpenPostpone}
        onClose={() => setIsOpen(false)}
        appointmentId={id}
        isAppointment
        link={link}
        courseId={courseId}
        day={day}
        hour={hour}
        phone={phone}
        age={age}
        slotId={slotId}
        weekId={weekId}
        message={message}
      />
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <Form
            onSubmit={() => {
              const data = new FormData();
              data.append("crm_link", link);
              data.append("appointment_id", id);
              data.append("day", day);
              data.append("hour", hour);
              data.append("course_id", courseId);
              data.append("phone", phone);
              data.append("age", age);
              data.append("manager_id", managerIdInit);
              data.append("week_id", weekId);
              data.append("slot_id", slotId);
              data.append("message", message);
              return putAppointment(data).finally(() => {
                setLink("");
                setCourses("");
                setMessage("");
                setAge(0);
                setPhone("");
                handleClose();
              });
            }}
            postpone
            postponeClick={() => setIsOpen(!isOpenPostpone)}
            handleClose={() => setIsOpenModal(!isOpen)}
            status={{
              successMessage: "Successfully created appointment",
              failMessage: "Failed to create appointment",
            }}
            type={{ type: "no-request" }}
            title="Change appointment info"
          >
            {/* <DropList
              title="Manager"
              value={managerName}
              appointment={true}
              changeAppointment={true}
              setValue={setManagerName}
              setValueSecondary={setManagerId}
              request={() => getAvailableManagers(weekId, day, hour)}
            /> */}
            <p className={styles.input__title}>
              Manager: <span>{managerName} </span>
            </p>
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
                max={13}
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

export default ChangeAppointment;
