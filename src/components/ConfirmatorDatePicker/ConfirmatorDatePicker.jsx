import styles from "./ConfirmatorDatePicker.module.scss";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getConfirmatorDate,
  getConfirmatorDay,
  getConfirmatorHalf,
  getConfirmatorWeekId,
} from "../../redux/confirmator/confirmator-selectors";
import {
  decreaseDay,
  firstHalf,
  getConfirmatorWeek,
  increaseDay,
  secondHalf,
} from "../../redux/confirmator/confirmator-operations";

export default function ConfirmatorDatePicker() {
  const dispatch = useDispatch();

  const tableDate = useSelector(getConfirmatorDate);
  const currentWeekId = useSelector(getConfirmatorWeekId);
  const currentDayId = useSelector(getConfirmatorDay);
  const half = useSelector(getConfirmatorHalf);

  const [date, setDate] = useState(new Date(tableDate));

  const month = date.getMonth() < 10 + 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const dateDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  const onClickArrowRight = () => {
    setDate(moment(date).add(1, "days")._d);
    dispatch(increaseDay());
  };

  const onClickArrowLeft = () => {
    setDate(moment(date).subtract(1, "days")._d);
    dispatch(decreaseDay());
  };
  const onFirstHalfHandler = () => {
    dispatch(firstHalf());
  };
  const onSecondHalfHandler = () => {
    dispatch(secondHalf());
  };

  useEffect(() => {
    if (!currentDayId || !currentWeekId || !half || !tableDate || !date) return;
    dispatch(getConfirmatorWeek({ currentWeekId, currentDayId, half }));
  }, [half, date]);

  return (
    <div className={styles.calendar_wrapper}>
      <button
        onClick={onFirstHalfHandler}
        className={styles.halfBtn + (half === 1 ? " " + styles.halfBtnActive : "")}
        type="button"
      >
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
      <button
        onClick={onSecondHalfHandler}
        className={styles.halfBtn + (half === 2 ? " " + styles.halfBtnActive : "")}
        type="button"
      >
        2-half
      </button>
    </div>
  );
}
