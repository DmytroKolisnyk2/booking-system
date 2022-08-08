import styles from "./ConfirmatorDatePicker.module.scss";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getDate, getWeekId } from "../../redux/manager/manager-selectors";
import { getManagerWeek } from "../../redux/manager/manager-operations";

export default function ConfirmatorDatePicker() {
  const tableDate = useSelector(getDate);

  const dispatch = useDispatch();
  const currentWeekId = useSelector(getWeekId);
  const [date, setDate] = useState(new Date(tableDate));
  const month = date.getMonth() < 10 ? `0${date.getMonth() }` : date.getMonth() ;
  const dateDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const onClickArrowRight = () => {
    setDate(moment(date).add(1, "days")._d);
    // dispatch(getManagerWeek({ managerId, weekId }));
  };

  const onClickArrowLeft = () => {
    setDate(moment(date).subtract(1, "days")._d);
    // dispatch(getManagerWeek({ managerId, weekId }));
  };
  useEffect(() => {
    setDate(new Date(tableDate));
  }, [tableDate]);
  return (
    <div className={styles.calendar_wrapper}>
      <button className={styles.halfBtn} type="button">
        1-half
      </button>
      <div className={styles.calendarController}>
        <button
          onClick={onClickArrowLeft}
          className={styles.calendarControllerButton}
          type="button"
        >
          {"<"}
        </button>
        <span className={styles.calendarControllerText}>{`${dateDay}.${month}`}</span>
        <button
          onClick={onClickArrowRight}
          className={styles.calendarControllerButton}
          type="button"
        >
          {">"}
        </button>
      </div>
      <button className={styles.halfBtn} type="button">
        2-half
      </button>
    </div>
  );
}
