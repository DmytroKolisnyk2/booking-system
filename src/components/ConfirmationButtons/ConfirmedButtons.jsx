import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  getConfirmatorAppointments,
  getConfirmatorError,
} from "../../redux/confirmator/confirmator-selectors";
import "./ConfirmationButton.scss";
import PostponeModal from "../../components/modals/PostponeModal/PostponeModal";
import { Fade } from "react-awesome-reveal";

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
   
  ];
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <>
      <Fade cascade duration={200}>
        {appointments.map((item) => (
          <div key={item.appointment_id} className="btn_wrapper">
            {confirmationTable.map((i) => {
              console.log("confirmation map");
              return (
                <button
                  onClick={() => {
                    console.log("postponed");
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
      </Fade>
      <PostponeModal appointmentId={isOpen} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default ConfirmatorButtons;
