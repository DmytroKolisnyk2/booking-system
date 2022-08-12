import "react-calendar/dist/Calendar.css";
import React, { useEffect, useState } from "react";
import styles from "../../../pages/Caller/CallerPage.module.scss";
import BgWrapper from "../../BgWrapper/BgWrapper";
import { Outlet } from "react-router-dom";
import DatePicker from "../../DatePicker/DatePicker";
import { useSelector, useDispatch } from "react-redux";
import Table from "../../Table/Table";
import Days from "../../Days/Days";
import { getUsersByRole } from "../../../helpers/user/user";
import { getDate, getTable, getWeekId } from "../../../redux/caller/caller-selectors";
import { getCallerCurrentWeek, getCallerWeek } from "../../../redux/caller/caller-operations";
import Button from "../../Buttons/Buttons";
import ManagerListModal from "./ManagerListModal/ManagerListModal";

export default function PostponeModal({ isOpen, onClose, appointmentId }) {
  const [callerId, setCallerId] = useState(null);
  const [error, setError] = useState("");
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const dispatch = useDispatch();
  const tableDate = useSelector(getDate);
  const table = useSelector(getTable);
  const weekId = useSelector(getWeekId);

  const onClickSlotFn = (data) => {
    setIsOpenDropdown(data);
  };

  useEffect(() => {
    dispatch(getCallerCurrentWeek(callerId));
    getUsersByRole("Confirmator")
      .then(({ data }) => setCallerId(data[0].id))
      .catch(() => setError("Caller not found"));
  }, [dispatch]);

  return isOpen ? (
    <div className={styles.postponedWrapper}>
      <ManagerListModal
        closePostponed={onClose}
        appointmentId={appointmentId}
        isOpenDropdown={isOpenDropdown}
        setIsOpenDropdown={setIsOpenDropdown}
      />

      <BgWrapper top={-120} title="Postpone the meeting" />
      <Outlet />
      <p className={styles.free__places}>
        <span className={styles.free__span}>--</span> - number of free places
      </p>
      <section className={styles.tableSection}>
        <DatePicker changeDateFn={getCallerWeek} tableDate={tableDate} caller={true} />
        <Days />
        {!error && (
          <Table
            postponed
            onClickSlotFn={onClickSlotFn}
            weekId={weekId}
            table={table}
            caller={true}
          />
        )}
        {error && <p className={styles.free__places}>{error.message}</p>}
      </section>
      <div className={styles.button}>
        <Button
          onclick={onClose}
          paddingRight={31}
          paddingLeft={31}
          width={"auto"}
          bgColor={"black"}
          color={"white"}
        >
          Return to confirmations
        </Button>
      </div>
    </div>
  ) : (
    <></>
  );
}
