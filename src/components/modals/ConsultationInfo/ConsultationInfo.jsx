import styles from "./ConsultationInfo.module.scss";
import Modal from "../../Modal/Modal";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getGroups } from "../../../helpers/group/group";
import { getCourses } from "../../../helpers/course/course";
import { updateSlot } from "../../../helpers/week/week";
import { getAppointment } from "../../../helpers/appointment/appointment";
import { postConsultationResult } from "../../../helpers/consultation/consultation";
import { getTable, getWeekId } from "../../../redux/manager/manager-selectors";
import { Link } from "react-router-dom";
import {
  setManagerError,
  setManagerLoading,
  changeStatusSlot,
} from "../../../redux/manager/manager-operations";
import Select from "../../Select/Select";
import Form from "../../Form/Form";

const ConsultationInfo = ({
  isOpen,
  handleClose,
  slotId,
  dayIndex,
  hourIndex,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [result, setResult] = useState(7);
  const [course, setCourse] = useState("");
  const [group, setGroup] = useState("");
  const [message, setMessage] = useState("");
  const { managerId } = useParams();
  const [appointment, setAppointment] = useState([]);
  const weekId = useSelector(getWeekId);
  const managerTable = useSelector(getTable);
  useEffect(() => {
    const get = async () => await getAppointment({ id: slotId });
    get().then((data) => setAppointment(data.data));
  }, [isOpen]);
  return (
    <>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <Form
            type={{ type: "no-request" }}
            onSubmit={() => {
              handleClose();
              dispatch(setManagerLoading(true));
              return postConsultationResult(+slotId, result, group, message)
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
                    .catch((error) => dispatch(setManagerError(error.message)));
                })
                .catch((error) => dispatch(setManagerError(error.message)))
                .finally(() => {
                  setDesc("");
                  setName("");
                  setResult(7);
                  setCourse("");
                  setMessage("");
                  return dispatch(setManagerLoading(false));
                });
            }}
            name={name}
            description={desc}
            course={course}
            result={result}
            // login={login}
            // password={password}
            // role={role}
            status={{
              successMessage: "Successfully changed consultation info",
              failMessage: "Failed to change consultation info",
            }}
            title="Consultation Info"
          >
            <label className={styles.input__label}>
              {appointment && (
                <a
                  target="_blank"
                  href={appointment.zoho_link}
                  className={styles.input__link}
                >
                  CRM Link
                </a>
              )}
            </label>
            <Select
              title="Course:"
              value={course}
              request={getCourses}
              setValue={setCourse}
              defaultValue="Select course"
            />

            <Select
              title="Result:"
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
              groupId={+course}
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
