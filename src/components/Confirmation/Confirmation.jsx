import React from "react";
import { useSelector } from "react-redux";
import { getConfirmatorAppointments } from "../../redux/confirmator/confirmator-selectors";
import styles from "./Confirmation.module.scss";
const Confirmator = () => {
  const appointments = useSelector(getConfirmatorAppointments);

  const transformAppointmentData = (i) =>
    `${i.hour}:00, ${i.course}, ${i.manager_name}, ${i.phone}, ${i.crm_link}`;

  return (
    <ul className={styles.wrapper}>
      {appointments.map((i) => {
        return (
          <li key={i.appointment_id} className={styles.ul_items}>
            <p className={styles.ul_items_text}>{transformAppointmentData(i)}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Confirmator;
