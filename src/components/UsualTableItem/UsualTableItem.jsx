import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import styles from './UsualTableItem.module.scss';


const UsualTableItem = ({data, colorId}) => {
    const activeClassnames = (colorId) => {
        return classNames(styles.item, {
          [styles.grayColor]: +colorId === 0,
          [styles.orangeColor]: +colorId === 2,
          [styles.greenColor]: +colorId === 1,
        });
      };
    return (
      <li
        className={activeClassnames(colorId)}
      >{`${data}:00`}</li>
    );
};

UsualTableItem.propTypes = {
    data: PropTypes.number.isRequired,
    colorId: PropTypes.number.isRequired,
    onClickFn: PropTypes.func.isRequired,
};

export default UsualTableItem;