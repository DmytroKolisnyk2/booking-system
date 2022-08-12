import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./Table.module.scss";
import TableItem from "../TableItem/TableItem";
import { useSelector } from "react-redux";
import { isManagerLoading } from "../../redux/manager/manager-selectors";
import { getCallerLoading } from "../../redux/caller/caller-selectors";
import { TailSpin } from "react-loader-spinner";

const Table = ({ postponed, weekId, table, onClickSlotFn, consultation, caller }) => {
  useEffect(() => {});
  const managerLoading = useSelector(isManagerLoading);
  const callerLoading = useSelector(getCallerLoading);
  return (
    <div className={styles.wrapperTable}>
      {(managerLoading || callerLoading) && (
        <div className={styles.spinner}>
          <TailSpin height="57" width="57" color="#999DFF" />
        </div>
      )}
      <ul className={styles.table}>
        {table.map((day, dayIndex) => {

          return day.map((item, hourIndex) => {
            console.log(item)
            return (
              <Fragment key={hourIndex}>
                {caller ? (
                  <TableItem
                    postponed={postponed}
                    onClickFn={() => onClickSlotFn(item.slot_id)}
                    data={item.time}
                    weekId={weekId}
                    colorId={item.amount}
                    caller={caller}
                    hourIndex={table[dayIndex][hourIndex].time}
                    slotId={item.slot_id}
                    dayIndex={dayIndex}
                  />
                ) : consultation ? (
                  <TableItem
                    data={item.time}
                    colorId={item.color}
                    dayIndex={dayIndex}
                    hourIndex={hourIndex}
                    consultation
                    slotId={item.slot_id}
                    onClickBtnStart={() => onClickSlotFn(dayIndex, hourIndex)}
                  />
                ) : (
                  <TableItem
                    onClickFn={() => onClickSlotFn(dayIndex, hourIndex)}
                    data={item.time}
                    colorId={item.color}
                  />
                )}
              </Fragment>
            );
          });
        })}
      </ul>
    </div>
  );
};

Table.propTypes = {
  table: PropTypes.array.isRequired,
  onClickSlotFn: PropTypes.func,
};

export default Table;
