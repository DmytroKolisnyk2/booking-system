import styles from "./ConsultationInfo.module.scss";
import Modal from "../../Modal/Modal";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  putManager,
  getCourses,
  deleteManager,
  getGroups,
  getUsersByRole,
  postConsultationResult,
  updateSlot,
} from "../../../helpers/api.js";
import {
  getDate,
  getTable,
  getTypeSelection,
  getWeekId,
} from "../../../redux/manager/manager-selectors";
import FormInput from "../../FormInput/FormInput";
import DropList from "../../DropList/DropList";
import Select from "../../Select/Select";
import Form from "../../Form/Form";

const ConsultationInfo = ({ isOpen, handleClose, id, api_info, slotId }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(8);
  const [course, setCourse] = useState("");
  const [group, setGroup] = useState("");
  const [message, setMessage] = useState("");
  const [manager, setManager] = useState("");
  const table = useSelector(getTable);
  const dispatch = useDispatch();
  console.log(api_info);
  let [consultation_result, setConsultationResult] = useState(false);
  console.log(result);
  const changeTheConsultatiomResult = (e) => {
    setConsultationResult(e.target.value);
    setResult(e.target.value);
    result ? setResult(8) : setResult(7);
    console.log(result);
    console.log(`consultation_result_in_info is ${consultation_result}`);
  };
  return (
    <>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <Form
            type={{ type: "no-request" }}
            isThatConsultResult={true}
            consultResult={consultation_result}
            apiHelperRequest={updateSlot}
            apiHelperInfo={api_info}
            onSubmit={() => {
              handleClose();
              setDesc("");
              setPassword("");
              setLogin("");
              setName("");
              postConsultationResult(424, result, group, message);
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
              setValue={(e) => {
                setResult(e.target.value);
                result === true ? setResult(7) : setResult(8);
              }}
              isThatConsultResult={true}
              changeConsultationResult={changeTheConsultatiomResult}
            >
              <option value={true}>Successfull</option>
              <option value={false}>Not Successful</option>
            </Select>

            <Select
              title="Group:"
              value={group}
              request={getGroups}
              setValue={setGroup}
              defaultValue="Select group"
            />
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

export default ConsultationInfo;
