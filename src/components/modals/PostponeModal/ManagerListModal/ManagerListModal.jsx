import React from "react";
import Button from "../../../Buttons/Buttons";
import Modal from "../../../Modal/Modal";
import styles from "../../../../pages/Caller/CallerPage.module.scss";
import { setPostponedConfirmation } from "../../../../helpers/confirmation/confirmation";
import { info, error } from "@pnotify/core";
import { Fade } from "react-awesome-reveal";

export default function ManagerListModal({
  closePostponed,
  isOpenDropdown,
  setIsOpenDropdown,
  appointmentId,
}) {
  return (
    <>
      {isOpenDropdown && (
        <Modal onClose={() => setIsOpenDropdown(false)}>
          <div className={styles.buttonsWrapper}>
            <p className={styles.availableManager}>Select available manager</p>
            <Fade cascade triggerOnce duration={200} direction="up">
              {isOpenDropdown.map((item) => (
                <Button
                  onclick={() =>
                    setPostponedConfirmation(item.id, appointmentId)
                      .then(() => {
                        setIsOpenDropdown("");
                        closePostponed();
                        info("Successfully postponed");
                      })
                      .catch(({ message }) => error(message))
                  }
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
