import React from "react";
import classNames from 'classnames';
import { useSelector, useDispatch } from "react-redux";
import styles from "./StatusDefinition.module.scss";

import { changeTypeSelection } from "../../redux/manager/manager-operations";
import { getTypeSelection } from "../../redux/manager/manager-selectors";

import RadioButton from "../RadioButton/RadioButton";
import BgWrapper from "../BgWrapper/BgWrapper";

const ControlButtons = () => {

  return (
    <BgWrapper title="Manager">
      <div className={styles.wrapperStatsDefins}>
        <div className={classNames(styles.statDefin, styles.bck_blue)}>Scheduled</div>
        <div className={classNames(styles.statDefin, styles.bck_pink)}>Confirmed</div>
        <div className={classNames(styles.statDefin, styles.bck_orange)}>Going on now</div>
        <div className={classNames(styles.statDefin, styles.bck_green)}>Successfully completed</div>
        <div className={classNames(styles.statDefin, styles.bck_red)}>Conducted unsuccessfully</div>
      </div>
    </BgWrapper>
  );
};

export default ControlButtons;
