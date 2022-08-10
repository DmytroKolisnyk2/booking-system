import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import styles from "./ConfirmationButton.scss";
import BgWrapper from "../../components/BgWrapper/BgWrapper";

const ConfirmatorButtons = () => {
  const confirmationTable = [
    {
      btn: "postponed",
      class: "btn_yelllow",
    },
    {
      btn: "canceled",
      class: "btn_red",
    },
    {
      btn: "confirmed",
      class: "btn_blue",
    },
  ];
  return (
    <div className="btn_wrapper">
      {confirmationTable.map((i) => {
        return <button className={i.class}>{i.btn}</button>;
      })}
    </div>
  );
};

export default ConfirmatorButtons;
