import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import styles from "./ConfirmatorPage.module.scss";
import BgWrapper from "../../components/BgWrapper/BgWrapper";

const ConfirmatorPage = () => {
  const confirmationTable = [
    {
      cfv: "cfv",
    },
    {
      cfv: "cfv",
    },
  ];
  return (
    <section className={styles.tableSection}>
      <BgWrapper title="Confirmator" />
      <h2 className={styles.title}>Confirmation</h2>
      <div className={styles.table__wrapper}>
        <ul className={styles.table}>
          {confirmationTable.map((i) => {
            return <p>swacx</p>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default ConfirmatorPage;
