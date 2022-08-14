import React from "react";
import { useSelector } from "react-redux";
import { getConfirmatorAppointments } from "../../redux/confirmator/confirmator-selectors";
import styles from "./Confirmation.module.scss";

import { Fade } from "react-awesome-reveal";

const Confirmator = () => {
  const appointments = useSelector(getConfirmatorAppointments);

  const transformAppointmentData = (i) =>
    `${i.hour}:00, ${i.course}, ${i.manager_name}, ${i.phone}`;

  return (
    <ul className={styles.wrapper}>
    <Fade cascade duration={200}>
        {appointments.map((i) => {
          return (
            <li key={i.appointment_id} className={styles.ul_items}>
              <p className={styles.ul_items_text}>
                {transformAppointmentData(i)}
                <a className={styles.link} target="_blank" href={i.crm_link}>
                  Link
                </a>
              </p>
            </li>
          );
        })}
    </Fade>
    </ul>
  );
};

export default Confirmator;
