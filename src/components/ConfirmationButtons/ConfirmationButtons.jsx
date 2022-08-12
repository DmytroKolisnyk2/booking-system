import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  getConfirmatorAppointments,
  getConfirmatorError,
} from "../../redux/confirmator/confirmator-selectors";
import "./ConfirmationButton.scss";
import PostponeModal from "../../components/modals/PostponeModal/PostponeModal";

const ConfirmatorButtons = ({ value, setValue }) => {
  const [isOpen, setIsOpen] = useState(null);

  const appointments = useSelector(getConfirmatorAppointments);
  const error = useSelector(getConfirmatorError);

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
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <>
      {appointments.length === 0 && <h2>Nothing to confirm yet</h2>}
      {appointments.map((item) => (
        <div key={item.appointment_id} className="btn_wrapper">
          {confirmationTable.map((i) => {
            return (
              <button
                onClick={() => {
                  if (i.btn === "postponed") setIsOpen(item.appointment_id);
                  return setValue({ ...value, [item.appointment_id]: i.btn });
                }}
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
      <PostponeModal appointmentId={isOpen} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default ConfirmatorButtons;
