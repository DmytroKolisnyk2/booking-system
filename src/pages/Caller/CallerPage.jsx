// import React from "react";
import Header from "../../components/Header/Header";
import styles from "./CallerPage.module.scss";
import BgWrapper from "../../components/BgWrapper/BgWrapper";
import { Outlet, useParams } from "react-router-dom";
import DatePicker from "../../components/DatePicker/DatePicker";
import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-calendar/dist/Calendar.css";
import Table from "../../components/Table/Table";
import Days from "../../components/Days/Days";
import {
  getDate,
  getTable,
  getTypeSelection,
  getWeekId,
} from "../../redux/caller/caller-selectors";
import {
  getCallerCurrentWeek,
} from "../../redux/caller/caller-operations";
export default function CallerPage() {
  const callerTable = new FormData();
  const dispatch = useDispatch();
  // const templateText = useSelector(getSavedTemplateText);
  // const templateDate = useSelector(getSavedTemplateDate);
  const tableDate = useSelector(getDate);
  const table = useSelector(getTable);
  const typeSelection = useSelector(getTypeSelection);
  const weekId = useSelector(getWeekId);
  const { callerId } = useParams();
  const arrayDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  // const tableDate = useSelector(getDate);
  const onClickSlot = (dayIndex, hourIndex) => {
    dispatch(getCallerCurrentWeek(+callerId));
  };
  useEffect(() => {
    dispatch(getCallerCurrentWeek(+callerId));
  }, []);
  return (
    <>
      <Header
        endpoints={
          [
            // { text: "users", path: path.users },
            // { text: "groups", path: path.groups },
            // { text: "courses", path: path.courses },
            // { text: "actions", path: path.actions },
          ]
        }
        user={{ name: callerId, role: "Caller" }}
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
