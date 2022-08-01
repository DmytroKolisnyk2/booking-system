import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import styles from "./HomePage.module.scss";
import Table from "../../components/Table/Table";
import {
  getDate,
  getTable,
  getTypeSelection,
} from "../../redux/manager/manager-selectors";
import {
  getManagerCurrentWeek,
  changeStatusSlot,
} from "../../redux/manager/manager-operations";
import Button from "../../components/Buttons/Buttons";
import ControlButtons from "../../components/ControlButtons/ControlButtons";

const HomePage = () => {
  const dispatch = useDispatch();
  const tableDate = useSelector(getDate);
  const table = useSelector(getTable);
  const typeSelection = useSelector(getTypeSelection);
  let dayId = 0;
  const [isOpenPicker, setIsOpenPicker] = useState(false);
  const [date, setDate] = useState(new Date(tableDate));
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
  const onClickSlot = (dayIndex, hourIndex) => {
    switch (typeSelection) {
      case "Consultations":
        return dispatch(
          changeStatusSlot({
            dayIndex,
            hourIndex,
            colorId: 1,
          })
        );
      case "Working time":
        return dispatch(
          changeStatusSlot({
            dayIndex,
            hourIndex,
            colorId: 2,
          })
        );
      case "Free":
        return dispatch(
          changeStatusSlot({
            dayIndex,
            hourIndex,
            colorId: 0,
          })
        );
      default:
        break;
    }
  };
  useEffect(() => {
    dispatch(getManagerCurrentWeek(1));
  }, []);
  useEffect(() => {
    setDate(new Date(tableDate));
  }, [tableDate]);
  return (
    <section className={styles.tableSection}>
      <ControlButtons />
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
            <div key={(dayId += 1)} className={styles.day}>
              <h3 className={styles.dayTitle}>{item}</h3>
            </div>
          );
        })}
      </div>
      <Table table={table} onClickSlotFn={onClickSlot} />
      <div className={styles.wrapperTableButtons}>
        <Button
          style={styles.tableButton}
          paddingRight={31}
          paddingLeft={31}
          width={"auto"}
          bgColor={"black"}
          color={"white"}
        >
          save as template
        </Button>
        <Button
          style={styles.tableButton}
          paddingRight={31}
          paddingLeft={31}
          width={"auto"}
          bgColor={"black"}
          color={"white"}
        >
          load a saved template
        </Button>
      </div>
    </section>
  );
};

export default HomePage;
