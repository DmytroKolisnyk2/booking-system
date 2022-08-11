import "react-calendar/dist/Calendar.css";
import Modal from "../../Modal/Modal";
import React, { useEffect, useState } from "react";
import styles from "../../../pages/Caller/CallerPage.module.scss";
import BgWrapper from "../../BgWrapper/BgWrapper";
import { Outlet } from "react-router-dom";
import DatePicker from "../../DatePicker/DatePicker";
import { useSelector, useDispatch } from "react-redux";
import Table from "../../Table/Table";
import Days from "../../Days/Days";
import { getUserById, getUsersByRole } from "../../../helpers/user/user";
import { getDate, getTable, getWeekId } from "../../../redux/caller/caller-selectors";
import { getCallerCurrentWeek, getCallerWeek } from "../../../redux/caller/caller-operations";

export default function PostponeModal({ isOpen, onClose }) {
  const [callerId, setCallerId] = useState(null);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const tableDate = useSelector(getDate);
  const table = useSelector(getTable);
  const weekId = useSelector(getWeekId);
  const onClickSlot = () => {
    console.log("object");
    // dispatch(getCallerCurrentWeek(callerId));
  };

  useEffect(() => {
    dispatch(getCallerCurrentWeek(callerId));
    getUsersByRole("Confirmator")
      .then(({ data }) => setCallerId(data[0].id))
      .catch(() => setError("Caller not found"));
  }, [dispatch]);

  return isOpen ? (
    <Modal onClose={onClose}>
      <div className={styles.main__wrapper}>
        <BgWrapper top={-160} title="Caller" />
        <Outlet />
        <p className={styles.free__places}>
          <span className={styles.free__span}>--</span> - number of free places
        </p>
        <section className={styles.tableSection}>
          <DatePicker changeDateFn={getCallerWeek} tableDate={tableDate} caller={true} />
          <Days />
          {!error && (
            <Table weekId={weekId} table={table} caller={true} />
          )}
          {error && <p className={styles.free__places}>{error.message}</p>}
        </section>
      </div>
    </Modal>
  ) : (
    <></>
  );
}
