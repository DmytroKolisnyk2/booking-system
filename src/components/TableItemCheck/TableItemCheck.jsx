import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./TableItemCheck.module.scss";

import CurrentTableItem from "../CurrentTableItem/CurrentTableItem";
import UsualTableItem from "../UsualTableItem/UsualTableItem";

const TableItemCheck = ({ item, hourIndex}) => {
  const activeClassnames = (colorId) => {
    return classNames(styles.item, {
      [styles.grayColor]: +colorId === 0,
      [styles.orangeColor]: +colorId === 2,
      [styles.greenColor]: +colorId === 1,
    });
  };
  return <>{item.color == 2 ? (
    <CurrentTableItem data={item.time} colorId={item.color} />
  ) : (
    <UsualTableItem data={item.time} colorId={item.color} />
  )}
  </>
};

TableItemCheck.propTypes = {
  data: PropTypes.number.isRequired,
  colorId: PropTypes.number.isRequired,
  onClickFn: PropTypes.func.isRequired,
};

export default TableItemCheck;