import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "react-calendar/dist/Calendar.css";
import styles from "./ManagerPage.module.scss";
import Table from "../../components/Table/Table";
import {
  getDate,
  getTable,
  getTypeSelection,
  getWeekId,
} from "../../redux/manager/manager-selectors";
import {
  getManagerCurrentWeek,
  changeStatusSlot,
  setManagerError,
  setManagerLoading,
} from "../../redux/manager/manager-operations";
import { updateSlot } from "../../helpers/api";
import Button from "../../components/Buttons/Buttons";
import ControlButtons from "../../components/ControlButtons/ControlButtons";
import DatePicker from "../../components/DatePicker/DatePicker";

const ConsultationPage = () => {
  const { managerId } = useParams();
  const dispatch = useDispatch();
  const tableDate = useSelector(getDate);
  const table = useSelector(getTable);
  const typeSelection = useSelector(getTypeSelection);
  const weekId = useSelector(getWeekId);
  const arrayDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const onClickSlot = (dayIndex, hourIndex) => {
    switch (typeSelection) {
      case "Consultations":
        dispatch(setManagerLoading(true));
        return updateSlot(managerId, weekId, dayIndex, table[dayIndex][hourIndex].time, 1)
          .then((data) => {
            dispatch(
              changeStatusSlot({
                dayIndex,
                hourIndex,
                colorId: 1,
              })
            );
          })
          .catch((error) => dispatch(setManagerError(error)))
          .finally(() => dispatch(setManagerLoading(false)));
      case "Working time":
        dispatch(setManagerLoading(true));
        return updateSlot(managerId, weekId, dayIndex, table[dayIndex][hourIndex].time, 2)
          .then((data) => {
            dispatch(
              changeStatusSlot({
                dayIndex,
                hourIndex,
                colorId: 2,
              })
            );
          })
          .catch((error) => dispatch(setManagerError(error)))
          .finally(() => dispatch(setManagerLoading(false)));
      case "Free":
        dispatch(setManagerLoading(true));
        return updateSlot(managerId, weekId, dayIndex, table[dayIndex][hourIndex].time, 0)
          .then((data) => {
            dispatch(
              changeStatusSlot({
                dayIndex,
                hourIndex,
                colorId: 0,
              })
            );
          })
          .catch((error) => dispatch(setManagerError(error)))
          .finally(() => dispatch(setManagerLoading(false)));
      default:
        break;
    }
  };
  useEffect(() => {
    dispatch(getManagerCurrentWeek(20));
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

export default ConsultationPage;
