import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import styles from "../../pages/Confirmator/ConfirmatorPage.module.scss";
import BgWrapper from "../BgWrapper/BgWrapper";
const ConfirmationBtn = () => {
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
    <div className={styles.btn_wrapper2}>
      {confirmationTable.map((i) => {
        return <button className={styles.btn} >{i.text}</button>;
      })}
    </div>
  );
};

export default ConfirmationBtn;
