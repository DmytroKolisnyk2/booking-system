import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Table.module.scss";
import TableItem from "../TableItem/TableItem";
const shortid = require("shortid");

const Table = ({ weekId, table, onClickSlotFn, consultation, caller }) => {
  useEffect(() => {});
  return (
    <ul className={styles.table}>
      {table.map((day, dayIndex) => {
        return day.map((item, hourIndex) => {
          return (
            <React.Fragment key={shortid.generate()}>
              {caller ? (
                <TableItem
                  onClickFn={() => onClickSlotFn()}
                  key={shortid.generate()}
                  data={item.time}
                  weekId={weekId}
                  colorId={item.amount}
                  caller={caller}
                  dayIndex={dayIndex}
                />
              ) : consultation ? (
                <TableItem
                  key={shortid.generate()}
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
                  key={shortid.generate()}
                  data={item.time}
                  colorId={item.color}
                />
              )}
            </React.Fragment>
          );
        });
      })}
    </ul>
  );
};

Table.propTypes = {
  table: PropTypes.array.isRequired,
  onClickSlotFn: PropTypes.func,
};

export default Table;
