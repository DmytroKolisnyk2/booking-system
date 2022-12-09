import styles from "./ConfirmatorDatePicker.module.scss";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getConfirmatorDate,
  getConfirmatorDay,
  getConfirmatorHalf,
  getConfirmatorWeekId,
} from "../../redux/confirmator/confirmed-selectors";
import {
  decreaseDay,
  firstHalf,
  getConfirmedWeek,
  increaseDay,
  secondHalf,
} from "../../redux/confirmator/confirmed-operations";

import { Fade } from "react-awesome-reveal";


export default function ConfirmedDatePicker() {
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

  useEffect(() => setDate(new Date(tableDate)), [tableDate]);

  useEffect(() => {
    if (!currentWeekId || !half || !tableDate || !date) return;
    dispatch(getConfirmedWeek({ currentWeekId, currentDayId, half }));
  }, [half, date]);

  return (
    <div className={styles.calendar_wrapper}>
      <Fade cascade triggerOnce duration={300} direction={'up'}>
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
      </Fade>
    </div>
  );
}
