import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./CallerPage.module.scss";
import BgWrapper from "../../components/BgWrapper/BgWrapper";
import { Outlet, useParams } from "react-router-dom";
import DatePicker from "../../components/DatePicker/DatePicker";
import { useSelector, useDispatch } from "react-redux";
import "react-calendar/dist/Calendar.css";
import Table from "../../components/Table/Table";
import Days from "../../components/Days/Days";
import { getUserById } from "../../helpers/user/user";
import {
  getDate,
  getTable,
  getTypeSelection,
  getWeekId,
} from "../../redux/caller/caller-selectors";
import { getCallerCurrentWeek } from "../../redux/caller/caller-operations";
export default function CallerPage() {
  const dispatch = useDispatch();
  const tableDate = useSelector(getDate);
  const table = useSelector(getTable);
  const weekId = useSelector(getWeekId);
  const { callerId } = useParams();
  const onClickSlot = (dayIndex, hourIndex) => {
    dispatch(getCallerCurrentWeek(+callerId));
  };
  const [callerName, setCallerName] = useState("");
  useEffect(() => {
    dispatch(getCallerCurrentWeek(+callerId));
    getUserById(+callerId).then((data) => {
      setCallerName(data.data.name);
    });
  }, []);
  return (
    <>
      <Header
        user={{ name: callerName, role: "Caller" }}
      />
      <div className={styles.main__wrapper}>
        <BgWrapper title="Caller" />
        <Outlet />
        <p className={styles.free__places}>
          <span className={styles.free__span}>--</span> - number of free places
        </p>
        <section className={styles.tableSection}>
          <DatePicker tableDate={tableDate} />
          <Days />
          <Table
            weekId={weekId}
            table={table}
            onClickSlotFn={onClickSlot}
            caller={true}
          />
        </section>
      </div>
    </>
  );
}
