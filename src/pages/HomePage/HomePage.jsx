import React, { useState } from "react";

import TableItem from "../../components/TableItem/TableItem";
import TableButton from "../../components/TableButton/TableButton";
import styles from "./HomePage.module.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const HomePage = () => {
  const [week, setWeek] = useState({
    week_id: 1,
    manager_id: 1,
    slots: [
      [
        { time: 8, color: 0 },
        { time: 9, color: 0 },
        { time: 10, color: 0 },
        { time: 11, color: 1 },
        { time: 12, color: 1 },
        { time: 13, color: 1 },
        { time: 14, color: 1 },
        { time: 15, color: 1 },
        { time: 16, color: 1 },
        { time: 17, color: 1 },
        { time: 18, color: 1 },
        { time: 19, color: 1 },
        { time: 20, color: 1 },
        { time: 21, color: 1 },
        { time: 22, color: 0 },
      ],
      [
        { time: 8, color: 0 },
        { time: 9, color: 0 },
        { time: 10, color: 0 },
        { time: 11, color: 1 },
        { time: 12, color: 1 },
        { time: 13, color: 1 },
        { time: 14, color: 1 },
        { time: 15, color: 2 },
        { time: 16, color: 1 },
        { time: 17, color: 1 },
        { time: 18, color: 1 },
        { time: 19, color: 1 },
        { time: 20, color: 1 },
        { time: 21, color: 1 },
        { time: 22, color: 0 },
      ],
      [
        { time: 8, color: 0 },
        { time: 9, color: 0 },
        { time: 10, color: 0 },
        { time: 11, color: 1 },
        { time: 12, color: 1 },
        { time: 13, color: 1 },
        { time: 14, color: 1 },
        { time: 15, color: 1 },
        { time: 16, color: 1 },
        { time: 17, color: 1 },
        { time: 18, color: 1 },
        { time: 19, color: 1 },
        { time: 20, color: 1 },
        { time: 21, color: 1 },
        { time: 22, color: 0 },
      ],
      [
        { time: 8, color: 0 },
        { time: 9, color: 0 },
        { time: 10, color: 0 },
        { time: 11, color: 1 },
        { time: 12, color: 1 },
        { time: 13, color: 1 },
        { time: 14, color: 1 },
        { time: 15, color: 1 },
        { time: 16, color: 1 },
        { time: 17, color: 1 },
        { time: 18, color: 1 },
        { time: 19, color: 1 },
        { time: 20, color: 1 },
        { time: 21, color: 1 },
        { time: 22, color: 0 },
      ],
      [
        { time: 8, color: 0 },
        { time: 9, color: 0 },
        { time: 10, color: 0 },
        { time: 11, color: 1 },
        { time: 12, color: 1 },
        { time: 13, color: 1 },
        { time: 14, color: 1 },
        { time: 15, color: 1 },
        { time: 16, color: 1 },
        { time: 17, color: 1 },
        { time: 18, color: 1 },
        { time: 19, color: 1 },
        { time: 20, color: 1 },
        { time: 21, color: 1 },
        { time: 22, color: 0 },
      ],
      [
        { time: 8, color: 0 },
        { time: 9, color: 0 },
        { time: 10, color: 1 },
        { time: 11, color: 1 },
        { time: 12, color: 1 },
        { time: 13, color: 1 },
        { time: 14, color: 1 },
        { time: 15, color: 1 },
        { time: 16, color: 1 },
        { time: 17, color: 1 },
        { time: 18, color: 1 },
        { time: 19, color: 1 },
        { time: 20, color: 1 },
        { time: 21, color: 0 },
        { time: 22, color: 0 },
      ],
      [
        { time: 8, color: 0 },
        { time: 9, color: 0 },
        { time: 10, color: 1 },
        { time: 11, color: 1 },
        { time: 12, color: 1 },
        { time: 13, color: 1 },
        { time: 14, color: 1 },
        { time: 15, color: 1 },
        { time: 16, color: 1 },
        { time: 17, color: 1 },
        { time: 18, color: 1 },
        { time: 19, color: 1 },
        { time: 20, color: 1 },
        { time: 21, color: 0 },
        { time: 22, color: 0 },
      ],
    ],
  });
  let id = 0;
  const [isOpenPicker, setIsOpenPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const endDate = moment(date).add(6, "days");
  const arrayDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
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

  return (
    <section className={styles.tableSection}>
      <div className={styles.calendarController}>
        <button
          onClick={onClickArrowLeft}
          className={styles.calendarControllerButton}
          type="button"
        >
          {"<"}
        </button>
        <span
          onClick={() => setIsOpenPicker(!isOpenPicker)}
          className={styles.calendarControllerText}
        >
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
      {isOpenPicker && (
        <Calendar
          className={styles.dataPicker}
          onChange={setDate}
          value={date}
        />
      )}
      <div className={styles.wrapperDays}>
        {arrayDays.map((item) => {
          return (
            <div className={styles.day}>
              <h3 className={styles.dayTitle}>{item}</h3>
            </div>
          );
        })}
      </div>
      <ul className={styles.table}>
        {week.slots.map((day) => {
          return day.map((item) => {
            return (
              <TableItem
                key={(id += 1)}
                data={item.time}
                colorId={item.color}
              />
            );
          });
        })}
      </ul>
      <div className={styles.wrapperTableButtons}>
        <TableButton title="save as template" />
        <TableButton title="load a saved template" />
      </div>
    </section>
  );
};

export default HomePage;
