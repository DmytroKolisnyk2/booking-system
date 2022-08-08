// import React from "react";
import Header from "../../components/Header/Header";
import styles from "./CallerPage.module.scss";
import BgWrapper from "../../components/BgWrapper/BgWrapper";
import { Outlet, useParams } from "react-router-dom";
import DatePicker from "../../components/DatePicker/DatePicker";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import "react-calendar/dist/Calendar.css";
import Table from "../../components/Table/Table";
import Days from "../../components/Days/Days";
import {
  getDate,
  getTable,
  getTypeSelection,
  getWeekId,
  getSavedTemplateDate,
  getSavedTemplateText,
} from "../../redux/caller/caller-selectors";
import {
  getCallerCurrentWeek,
  changeStatusSlot,
  setCallerError,
  setCallerLoading,
  getCallerTable,
  setSavedTemplate,
} from "../../redux/caller/caller-operations";
import { saveTable } from "../../helpers/api";
import { updateSlot } from "../../helpers/api";

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
    return "1";
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
          {/* <div className={styles.wrapperDays}>
            {arrayDays.map((item, index) => {
              return (
                <div key={index} className={styles.day}>
                  <h3 className={styles.dayTitle}>{item}</h3>
                </div>
              );
            })}
          </div> */}
          <Days />
          <Table
            weekId={weekId}
            table={table}
            onClickSlotFn={onClickSlot}
            caller={true}
          />
          {/* <TableCheck table={table} onClickSlotFn={onClickSlot} /> */}
        </section>
      </div>
    </>
  );
}
