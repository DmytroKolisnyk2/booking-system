import React from "react";
import { useSelector } from "react-redux";
import { getConfirmatorAppointments } from "../../redux/confirmator/confirmator-selectors";
import styles from "./ConfirmationButton.scss";

const ConfirmatorButtons = ({ value, setValue }) => {
  const appointments = useSelector(getConfirmatorAppointments);

  const confirmationTable = [
    {
      btn: "postponed",
      class: "btn_yelllow",
    },
    {
      btn: "canceled",
      class: "btn_red",
      id: 8,
    },
    {
      btn: "confirmed",
      class: "btn_blue",
      id: 4,
    },
  ];
  return (
    <>
      {appointments.map((item) => (
        <div key={item.appointment_id} className="btn_wrapper">
          {confirmationTable.map((i) => {
            return (
              <button
                onClick={() => setValue({ ...value, [item.appointment_id]: i.btn })}
                key={i.btn}
                className={`${i.class} ${
                  (value[item.appointment_id] === i.btn || i.id === item.status) && i.class
                }--active`}
              >
                {i.btn}
              </button>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default ConfirmatorButtons;
