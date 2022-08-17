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
  getCallerDate,
  getTable,
  getWeekId,
} from "../../redux/caller/caller-selectors";
import { getCallerCurrentWeek, getCallerWeek } from "../../redux/caller/caller-operations";
export default function CallerPage() {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const tableDate = useSelector(getCallerDate);
  const table = useSelector(getTable);
  const weekId = useSelector(getWeekId);
  const { callerId } = useParams();
  const [callerName, setCallerName] = useState("");
  useEffect(() => {
    dispatch(getCallerCurrentWeek(+callerId));
    getUserById(+callerId)
      .then((data) => {
        setCallerName(data.data.name);
      })
      .catch((err) => {
        setError(err);
      });
  }, [dispatch, callerId]);
  return (
    <>
      <Header user={{ name: callerName, role: "Caller" }} />
      <div className={styles.main__wrapper}>
        <BgWrapper top={-160} title="Caller" />
        <Outlet />
        <p className={styles.free__places}>
          <span className={styles.free__span}>--</span> - number of free places
        </p>
        <section className={styles.tableSection}>
          <DatePicker changeDateFn={getCallerWeek} tableDate={tableDate} caller />
          <Days caller />
          {!error && <Table weekId={weekId} table={table} caller />}
          {error && <p className={styles.free__places}>{error.message}</p>}
        </section>
      </div>
    </>
  );
}
