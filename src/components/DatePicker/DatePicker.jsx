import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";
import styles from "./DatePicker.module.scss";
import { Fade } from "react-awesome-reveal";


import { getWeekId } from "../../redux/manager/manager-selectors";

const DatePicker = ({ tableDate, changeDateFn, caller }) => {
  const { managerId } = useParams();
  const dispatch = useDispatch();
  const currentWeekId = useSelector(getWeekId);
  let weekId = currentWeekId;
  const [date, setDate] = useState(new Date(tableDate));
  const endDate = moment(date).add(6, "days");
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const dateDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const endMonth =
    endDate.month() + 1 < 10 ? `0${endDate.month() + 1}` : endDate.month() + 1;
  const endDateDay =
    endDate.date() < 10 ? `0${endDate.date()}` : endDate.date();
  const onClickArrowRight = () => {
    setDate(moment(date).add(7, "days")._d);
    weekId += 1;
    caller
      ? dispatch(changeDateFn({ weekId }))
      : dispatch(changeDateFn({ managerId, weekId }));
  };

  const onClickArrowLeft = () => {
    setDate(moment(date).subtract(7, "days")._d);
    weekId -= 1;
    caller
      ? dispatch(changeDateFn({ weekId }))
      : dispatch(changeDateFn({ managerId, weekId }));
  };
  useEffect(() => {
    setDate(new Date(tableDate));
  }, [tableDate]);
  return (
    <div className={styles.calendarController}>
    <Fade cascade triggerOnce duration={300} direction='up'>
        <button
          onClick={onClickArrowLeft}
          className={styles.calendarControllerButton}
          type="button"
        >
          {"<"}
        </button>
        <span className={styles.calendarControllerText}>
          {`${dateDay}.${month} - ${endDateDay}.${endMonth}`}
        </span>
        <button
          onClick={onClickArrowRight}
          className={styles.calendarControllerButton}
          type="button"
        >
          {">"}
        </button>
    </Fade>
    </div>
  );
};

DatePicker.propTypes = {
  tableDate: PropTypes.string.isRequired,
  changeDateFn: PropTypes.func.isRequired,
};

export default DatePicker;
