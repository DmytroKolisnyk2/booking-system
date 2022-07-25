import React from "react";
import PropTypes from "prop-types";
import styles from "./TableButton.module.scss";


const TableButton = ({title}) => {
    return <button className={styles.tableButton} type="button">{title}</button>;
};


TableButton.propTypes = {
    title: PropTypes.string.isRequired,
};

export default TableButton;