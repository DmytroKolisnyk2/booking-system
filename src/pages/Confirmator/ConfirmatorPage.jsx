import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import styles from "./ConfirmatorPage.module.scss";
import BgWrapper from "../../components/BgWrapper/BgWrapper";
import Confirmator from "../../components/Confirmation/Confirmation";
import ConfirmationButton from "../../components/ConfirmationButton/ConfirmationButtons";
import ConfirmationBtn from "../../components/ConfirmationBtn/ConfirmationBtn";
const ConfirmatorPage = () => {
  return (
    
    <section className={styles.tableSection}>
      {/* <BgWrapper title="Confirmator" /> */}
      <h2 className={styles.title}>Confirmation</h2>
      <div className={styles.table__wrapper}>
        <Confirmator />

        <div className={styles.btn_wrapper}>
          <ConfirmationButton />
          <ConfirmationButton />
          <ConfirmationButton />
          <ConfirmationButton />
          <ConfirmationButton />
          <ConfirmationButton />
        </div>
        <div className={styles.btn_input_wrapper}>
          <ConfirmationBtn />
          <input
            type="text"
            className={styles.input}
            id="comment"
            name="comment"
            placeholder="write a comment..."
          />
        </div>
      </div>
    </section>
  );
};

export default ConfirmatorPage;
