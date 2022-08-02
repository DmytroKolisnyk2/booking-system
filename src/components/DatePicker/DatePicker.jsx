import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import styles from "./DatePicker.module.scss";

const DatePicker = ({ tableDate, urlEndPoint }) => {
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
  };

  const onClickArrowLeft = () => {
    setDate(moment(date).subtract(7, "days")._d);
  };
  useEffect(() => {
    setDate(new Date(tableDate));
  }, [tableDate]);
  return (
    <div className={styles.calendarController}>
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
    </div>
  );
};

DatePicker.propTypes = {
  onClickArrowLeft: PropTypes.func.isRequired,
  onClickArrowRight: PropTypes.func.isRequired,
  tableDate: PropTypes.string.isRequired,
  urlEndPoint: PropTypes.string,
};

DatePicker.defaultProps = {
  urlEndPoint: '',
};

export default DatePicker;
