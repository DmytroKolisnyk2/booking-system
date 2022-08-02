import React from "react";
import PropTypes from 'prop-types';
import styles from './Table.module.scss';
import TableItem from "../TableItem/TableItem";

const Table = ({table, onClickSlotFn}) => {
    return (
      <ul className={styles.table}>
        {table.map((day, dayIndex) => {
          return day.map((item, hourIndex) => {
            return (
              <TableItem
                onClickFn={() => onClickSlotFn(dayIndex, hourIndex)}
                key={hourIndex}
                data={item.time}
                colorId={item.color}
              />
            );
          });
        })}
      </ul>
    );
};

Table.propTypes = {
    table: PropTypes.array.isRequired,
    onClickSlotFn: PropTypes.func.isRequired,
};

export default Table;