import React from "react";
import Button from "../../../Buttons/Buttons";
import Modal from "../../../Modal/Modal";
import styles from "../../../../pages/Caller/CallerPage.module.scss";
import { setPostponedConfirmation } from "../../../../helpers/confirmation/confirmation";
import { putAppointment } from "../../../../helpers/appointment/appointment";
import { info, success, error } from "@pnotify/core";
import { Fade } from "react-awesome-reveal";

export default function ManagerListModal({
  closePostponed,
  isOpenDropdown,
  setIsOpenDropdown,
  appointmentId,
  isAppointment,
  weekId,
  link,
  courseId,
  phone,
  age,
  slotId,
  message,
}) {
  return (
    <>
      {isOpenDropdown && (
        <Modal onClose={() => setIsOpenDropdown(false)} index={10002}>
          <div className={styles.buttonsWrapper}>
            <p className={styles.availableManager}>Select available manager</p>
            <Fade cascade triggerOnce duration={200} direction="up">
              {isOpenDropdown.map((item) => (
                <Button
                  onclick={(e) => {
                    if (isAppointment) {
                      const data = new FormData();
                      data.append("crm_link", link);
                      data.append("appointment_id", appointmentId);
                      data.append("day", item.week_day);
                      data.append("hour", item.time);
                      data.append("course_id", courseId);
                      data.append("phone", phone);
                      data.append("age", age);
                      data.append("manager_id", item.manager_id);
                      data.append("week_id", weekId);
                      data.append("slot_id", slotId);
                      data.append("message", message);
                      return putAppointment(data)                      .then(() => {
                        setIsOpenDropdown("");
                        closePostponed();
                        success("Successfully postponed");
                      });
                    }
                    return setPostponedConfirmation(item.id, appointmentId)
                      .then(() => {
                        setIsOpenDropdown("");
                        closePostponed();
                        info("Successfully postponed");
                      })
                      .catch(({ message }) => error(message));
                  }}
                  key={item.id}
                  paddingRight={31}
                  paddingLeft={31}
                  width={"fit-content"}
                  bgColor={"black"}
                  color={"white"}
                  margin={"0 auto"}
                >
                  Manager: {item.name}
                </Button>
              ))}
            </Fade>
          </div>
        </Modal>
      )}
    </>
  );
}
