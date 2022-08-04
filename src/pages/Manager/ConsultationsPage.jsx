import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "react-calendar/dist/Calendar.css";
import styles from "./ManagerPage.module.scss";
import Table from '../../components/Table/Table';
import {
  getDate,
  getTable,
  getTypeSelection,
  getWeekId,
} from "../../redux/manager/manager-selectors";
import {
  changeStatusSlot,
  setManagerError,
  setManagerLoading,
  getManagerCurrentWorkWeek,
} from "../../redux/manager/manager-operations";
import { updateSlot } from "../../helpers/api";
import Button from "../../components/Buttons/Buttons";
import StatusDefinition from "../../components/StatusDefinition/StatusDefinition";
import DatePicker from "../../components/DatePicker/DatePicker";

const ConsultationPage = () => {
  const { managerId } = useParams();
  const dispatch = useDispatch();
  const tableDate = useSelector(getDate);
  const table = useSelector(getTable);
  const weekId = useSelector(getWeekId);
  const arrayDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  useEffect(() => {
    dispatch(getManagerCurrentWorkWeek(+managerId));
  }, []);
  return (
    <section className={styles.tableSection}>
      <StatusDefinition />
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
      {console.log(table)}
      <Table table={table} consultation/>
    </section>
  );
};

export default ConsultationPage;
