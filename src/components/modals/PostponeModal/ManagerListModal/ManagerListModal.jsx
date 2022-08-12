import React from "react";
import Button from "../../../Buttons/Buttons";
import Modal from "../../../Modal/Modal";
import styles from "../../../../pages/Caller/CallerPage.module.scss";
import { setPostponedConfirmation } from "../../../../helpers/confirmation/confirmation";
import { info, error } from "@pnotify/core";

export default function ManagerListModal({closePostponed, isOpenDropdown, setIsOpenDropdown, appointmentId }) {
  return (
    <>
      {isOpenDropdown && (
        <Modal onClose={() => setIsOpenDropdown(false)}>
          <div className={styles.buttonsWrapper}>
            <p className={styles.availableManager}>Select available manager</p>
            {isOpenDropdown.map((item) => (
              <Button
                onclick={() =>
                  setPostponedConfirmation(item.id, appointmentId)
                    .then(({ data }) => {
                      console.log(data);
                      closePostponed();
                      info("Successfully postponed");
                    })
                    .catch(({ message }) => error(message))
                }
                key={item.id}
                paddingRight={31}
                paddingLeft={31}
                width={"100%"}
                bgColor={"black"}
                color={"white"}
              >
                Manager id: {item.manager_id}; Slot id: {item.id}
              </Button>
            ))}
          </div>
        </Modal>
      )}
    </>
  );
}
