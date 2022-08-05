import React from "react";
import PropTypes from "prop-types";
import styles from "./Table.module.scss";
import TableItem from "../TableItem/TableItem";

const Table = ({ weekId, table, onClickSlotFn, consultation, caller }) => {
  console.log(table);
  return (
    <ul className={styles.table}>
      {table.map((day, dayIndex) => {
        return day.map((item, hourIndex) => {
          return (
            <>
              {caller ? (
                <TableItem
                  key={hourIndex}
                  data={item.time}
                  weekId={weekId}
                  colorId={item.amount}
                  caller={caller}
                  dayIndex={dayIndex}
                />
              ) : consultation ? (
                <TableItem
                  key={hourIndex}
                  data={item.time}
                  colorId={item.color}
                  consultation
                />
              ) : (
                <TableItem
                  onClickFn={() => onClickSlotFn(dayIndex, hourIndex)}
                  key={hourIndex}
                  data={item.time}
                  colorId={item.color}
                />
              )}
            </>
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
