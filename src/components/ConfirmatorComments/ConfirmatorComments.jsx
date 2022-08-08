import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../pages/Confirmator/ConfirmatorPage.module.scss";
import { getConfirmatorAppointments } from "../../redux/confirmator/confirmator-selectors";

const ConfirmatorComments = ({ value }) => {
  const appointments = useSelector(getConfirmatorAppointments);
  const [reject, setReject] = useState("");

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
      {appointments.map((item) => (
        <div key={item.appointment_id} className={styles.comment__wrapper}>
          {value[item.appointment_id] === "confirmed" && (
            <input
              type="text"
              className={styles.comment__input}
              placeholder="Write a comment here..."
            />
          )}
          {value[item.appointment_id] === "canceled" && (
            <div className={styles.comment__reject_btn}>
              {confirmationTable.map((i) => {
                return (
                  <button
                    key={i.text}
                    onClick={() => setReject(i.text)}
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
