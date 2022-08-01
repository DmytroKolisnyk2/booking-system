import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ControlButton.module.scss";

import { changeTypeSelection } from "../../redux/manager/manager-operations";
import { getTypeSelection } from "../../redux/manager/manager-selectors";

import RadioButton from "../RadioButton/RadioButton";
import BgWrapper from "../BgWrapper/BgWrapper";

const ControlButtons = () => {
  const dispatch = useDispatch();
  const buttonType = useSelector(getTypeSelection);
  const onCheckedButton = (event) => {
    dispatch(changeTypeSelection(event.target.name));
  };
  return (
    <BgWrapper title="Manager">
      <div className={styles.wrapperControlButtons}>
        <RadioButton
          buttonType={buttonType}
          style={styles.controlButton}
          styleActive={styles.controlButtonGreenFocus}
          styleColor={styles.controlButtonGreen}
          onChangeType={onCheckedButton}
          title="Consultations"
        />
        <RadioButton
          buttonType={buttonType}
          style={styles.controlButton}
          styleActive={styles.controlButtonOrangeFocus}
          styleColor={styles.controlButtonOrange}
          onChangeType={onCheckedButton}
          title="Working time"
        />
        <RadioButton
          buttonType={buttonType}
          style={styles.controlButton}
          styleActive={styles.controlButtonGrayFocus}
          styleColor={styles.controlButtonGray}
          onChangeType={onCheckedButton}
          title="Free"
        />
      </div>
    </BgWrapper>
  );
};

export default ControlButtons;