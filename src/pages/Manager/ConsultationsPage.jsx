import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "react-calendar/dist/Calendar.css";
import styles from "./ManagerPage.module.scss";
import Table from "../../components/Table/Table";
import {
  getDate,
  getTable,
  getWeekId,
} from "../../redux/manager/manager-selectors";
import {
  changeStatusSlot,
  setManagerError,
  setManagerLoading,
  getManagerCurrentWorkWeek,
  getManagerWorkWeek,
} from "../../redux/manager/manager-operations";
import { postStartConsultation } from "../../helpers/consultation/consultation";
import { updateSlot } from "../../helpers/week/week";
import StatusDefinition from "../../components/StatusDefinition/StatusDefinition";
import DatePicker from "../../components/DatePicker/DatePicker";
import Days from '../../components/Days/Days';

const ConsultationPage = () => {
  const { managerId } = useParams();
  const dispatch = useDispatch();
  const tableDate = useSelector(getDate);
  const table = useSelector(getTable);
  const weekId = useSelector(getWeekId);

  const onClickSlotButton = (dayIndex, hourIndex) => {
    dispatch(setManagerLoading(true));
    return postStartConsultation(
      +weekId,
      dayIndex,
      table[dayIndex][hourIndex].time,
      +managerId
    )
      .then(() => {
        return updateSlot(
          managerId,
          weekId,
          dayIndex,
          table[dayIndex][hourIndex].time,
          6
        )
          .then(() => {
            dispatch(
              changeStatusSlot({
                dayIndex,
                hourIndex,
                colorId: 6,
              })
            );
          })
          .catch((error) => dispatch(setManagerError(error.message)));
      })
      .catch((error) => dispatch(setManagerError(error.message)))
      .finally(() => dispatch(setManagerLoading(false)));
  };

  useEffect(() => {
    dispatch(getManagerCurrentWorkWeek(+managerId));
  }, [dispatch, managerId]);
  return (
    <section className={styles.tableSection}>
      <StatusDefinition />
      <DatePicker tableDate={tableDate} changeDateFn={getManagerWorkWeek} />
      <Days />
      <Table table={table} consultation onClickSlotFn={onClickSlotButton} />
    </section>
  );
};

export default ConsultationPage;
