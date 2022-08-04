import React from "react";
import PropTypes from 'prop-types';
import styles from './TableCheck.module.scss';
import TableItemCheck from "../TableItemCheck/TableItemCheck";

const TableCheck = ({table, onClickSlotFn}) => {
    return (
      <ul className={styles.table}>
        {table.map((day, dayIndex) => {
          {console.log(dayIndex);}
          return day.map((item, hourIndex) => {
            return (
              <TableItemCheck
                item={item}
                hourIndex={hourIndex}
              />
            );
          });
        })}
      </ul>
    );
};

TableCheck.propTypes = {
    table: PropTypes.array.isRequired,
    onClickSlotFn: PropTypes.func.isRequired,
};

export default TableCheck;

