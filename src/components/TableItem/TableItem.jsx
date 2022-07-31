import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import styles from './TableItem.module.scss';


const TableItem = ({data, colorId, onClickFn}) => {
      const activeClassnames = (colorId) => {
        return classNames(styles.item, {
          [styles.grayColor]: +colorId === 0,
          [styles.orangeColor]: +colorId === 2,
          [styles.greenColor]: +colorId === 1,
        });
      };
    return (
      <li
        onClick={onClickFn}
        className={activeClassnames(colorId)}
      >{`${data}:00`}</li>
    );
};

TableItem.propTypes = {
    data: PropTypes.number.isRequired,
    colorId: PropTypes.number.isRequired,
    onClickFn: PropTypes.func.isRequired,
};

export default TableItem;