import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-calendar/dist/Calendar.css";
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
import DatePicker from "../../components/DatePicker/DatePicker";

const HomePage = () => {
  const dispatch = useDispatch();
  const tableDate = useSelector(getDate);
  const table = useSelector(getTable);
  const typeSelection = useSelector(getTypeSelection);
  const arrayDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
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
  return (
    <section className={styles.tableSection}>
      <ControlButtons />
      <DatePicker tableDate={tableDate} />
      <div className={styles.wrapperDays}>
        {arrayDays.map((item, index) => {
          return (
            <div key={index} className={styles.day}>
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
