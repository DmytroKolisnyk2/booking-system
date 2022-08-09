import styles from "./ConsultationInfo.module.scss";
import Modal from "../../Modal/Modal";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
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
import {
  setManagerError,
  setManagerLoading,
  changeStatusSlot,
} from "../../../redux/manager/manager-operations";
import FormInput from "../../FormInput/FormInput";
import DropList from "../../DropList/DropList";
import Select from "../../Select/Select";
import Form from "../../Form/Form";

const ConsultationInfo = ({ isOpen, handleClose, id, slotId,  dayIndex, hourIndex}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(7);
  const [course, setCourse] = useState("");
  const [group, setGroup] = useState("");
  const [message, setMessage] = useState("");
  const [manager, setManager] = useState("");
  const {managerId} = useParams();
  const weekId = useSelector(getWeekId);
  const managerTable = useSelector(getTable);
  return (
    <>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <Form
            type={{ type: "no-request" }}
            onSubmit={() => {
              handleClose();
              setDesc("");
              setPassword("");
              setLogin("");
              setName("");
              dispatch(setManagerLoading(true));
              postConsultationResult(+slotId, result, group, message)
                .then((data) => {
                  return updateSlot(
                    managerId,
                    weekId,
                    dayIndex,
                    managerTable[dayIndex][hourIndex].time,
                    +result
                  )
                    .then((data) => {
                      dispatch(
                        changeStatusSlot({
                          dayIndex,
                          hourIndex,
                          colorId: +result,
                        })
                      );
                    })
                    .catch((error) => dispatch(setManagerError(error)));
                })
                .catch((error) => dispatch(setManagerError(error)))
                .finally(() => dispatch(setManagerLoading(false)));
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
              setValue={setResult}
            >
              <option value={7}>Successful</option>
              <option value={8}>Unsuccessful</option>
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
