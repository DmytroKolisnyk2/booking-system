import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import styles from "./Confirmation.module.scss";
import BgWrapper from "../../components/BgWrapper/BgWrapper";
const Confirmator = () => {
  const confirmationTable = [
    {
      meet: "11:00, Minecraft, Марія +38061234567",
    },
    {
      meet: "11:00, FrontEnd, Артем +38061234567",
    },
    {
      meet: "11:00, GameGev, Олена +38061234567",
    },
    {
      meet: "12:00, Minecraft, Марія +38061234567",
    },
    {
      meet: "12:00, FrontEnd, Артем +38061234567",
    },
    {
      meet: "12:00, GameDev, Олена +38061234567",
    },
    {
      meet: "13:00, Design, Катерина +38057342022",
    },
  ];
  return (
    <ul className={styles.wrapper}>
      {confirmationTable.map((i) => {
        return (
          <li className={styles.ul_items}>
            <p className={styles.ul_items_text}>{i.meet}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Confirmator;
