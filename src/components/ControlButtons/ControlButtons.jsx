import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import styles from "./ControlButton.module.scss";

import { changeTypeSelection } from "../../redux/manager/manager-operations";
import { getTypeSelection } from "../../redux/manager/manager-selectors";

const ControlButtons = () => {
    const dispatch = useDispatch();
    const buttonType = useSelector(getTypeSelection);
  const onCheckedButton = (event) => {
    dispatch(changeTypeSelection(event.target.name));
  };
  return (
    <div className={styles.wrapperControlButtons}>
      <label
        className={`${styles.controlButton} ${styles.controlButtonGreen} ${
          buttonType === "Consultations" && styles.controlButtonGreenFocus
        }`}
      >
        Consultations
        <input
          checked={buttonType === "Consultations"}
          value={buttonType}
          onChange={onCheckedButton}
          className={styles.input}
          type="radio"
          name="Consultations"
        />
      </label>
      <label
        className={`${styles.controlButton} ${styles.controlButtonOrange} ${
          buttonType === "Working time" && styles.controlButtonOrangeFocus
        }`}
      >
        Working time
        <input
          checked={buttonType === "Working time"}
          onChange={onCheckedButton}
          value={buttonType}
          className={styles.input}
          type="radio"
          name="Working time"
        />
      </label>
      <label
        className={`${styles.controlButton} ${styles.controlButtonGray} ${
          buttonType === "Free" && styles.controlButtonGrayFocus
        }`}
      >
        Free
        <input
          checked={buttonType === "Free"}
          onChange={onCheckedButton}
          value={buttonType}
          className={styles.input}
          type="radio"
          name="Free"
        />
      </label>
    </div>
  );
};

export default ControlButtons;
