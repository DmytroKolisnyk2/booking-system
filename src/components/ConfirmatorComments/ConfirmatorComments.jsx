import React, { useState } from "react";
import { Oval, Rings, TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { setCancelConfirmation, setConfirmation } from "../../helpers/api";
import styles from "../../pages/Confirmator/ConfirmatorPage.module.scss";
import {
  getConfirmatorAppointments,
  getConfirmatorLoadings,
} from "../../redux/confirmator/confirmator-selectors";

const ConfirmatorComments = ({ value }) => {
  const appointments = useSelector(getConfirmatorAppointments);
  const loading = useSelector(getConfirmatorLoadings);
  const [reject, setReject] = useState("");
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
                      setReject(i.text);
                      reject && setCancelConfirmation(item.slot_id, 8, reject);
                    }}
                    className={`${styles.btn} ${reject === i.text && styles.btn_active}`}
                  >
                    {i.text}
                  </button>
                );
              })}
              <input
                type="text"
                className={styles.comment__input}
                placeholder="Write a comment here..."
                value={reject}
                onChange={({ target }) => setReject(target.value)}
                onBlur={() => reject && setCancelConfirmation(item.slot_id, 8, reject)}
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ConfirmatorComments;
//  <div className={styles.btn_wrapper2}>
//    {/* {confirmationTable.map((i) => {
//           return (
//             <button key={i.text} className={styles.btn}>
//               {i.text}
//             </button>
//           );
//         })} */}
//  </div>;
