import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { setCancelConfirmation, setConfirmation } from "../../helpers/confirmation/confirmation";
import styles from "../../pages/Confirmator/ConfirmatorPage.module.scss";
import {
  getConfirmatorAppointments,
  getConfirmatorLoadings,
} from "../../redux/confirmator/confirmator-selectors";

const ConfirmatorComments = ({ value }) => {
  const appointments = useSelector(getConfirmatorAppointments);
  const loading = useSelector(getConfirmatorLoadings);
  const [reject, setReject] = useState({});
  const [confirm, setConfirm] = useState("");

  const confirmationTable = [
    {
      text: "time",
    },
    {
      text: "money",
    },
    {
      text: "other",
    },
  ];

  useEffect(() => {
    Object.keys(reject).forEach((item) =>
      setCancelConfirmation(reject[item].slot_id, 1, reject[item].text)
    );
  }, [reject]);
  return (
    <>
      {loading && <TailSpin height="57" width="57" color="#999DFF" />}
      {appointments.map((item) => (
        <div key={item.appointment_id} className={styles.comment__wrapper}>
          {value[item.appointment_id] === "confirmed" && (
            <input
              type="text"
              className={styles.comment__input}
              placeholder="Write a comment here..."
              onChange={({ target }) => setConfirm(target.value)}
              onBlur={() => confirm && setConfirmation(item.slot_id, 4, confirm)}
            />
          )}
          {value[item.appointment_id] === "canceled" && (
            <div className={styles.comment__reject_btn}>
              {confirmationTable.map((i) => {
                return (
                  <button
                    key={i.text}
                    onClick={() => {
                      setReject({
                        ...reject,
                        [item.appointment_id]: { slot_id: item.slot_id, text: i.text },
                      });
                    }}
                    className={`${styles.btn} ${
                      reject[item.appointment_id]?.text === i.text && styles.btn_active
                    }`}
                  >
                    {i.text}
                  </button>
                );
              })}
              <input
                type="text"
                className={styles.comment__input}
                placeholder="Write a comment here..."
                value={reject[item.appointment_id]?.text}
                onChange={({ target }) =>
                  setReject({
                    ...reject,
                    [item.appointment_id]: { slot_id: item.slot_id, text: target.value },
                  })
                }
                onBlur={() =>
                  reject[item.appointment_id] &&
                  setCancelConfirmation(item.slot_id, 1, reject[item.appointment_id])
                }
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ConfirmatorComments;
