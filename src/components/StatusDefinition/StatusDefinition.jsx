import React from "react";
import classNames from 'classnames';
import styles from "./StatusDefinition.module.scss";
import BgWrapper from "../BgWrapper/BgWrapper";

const ControlButtons = () => {
  return (
    <BgWrapper top={-80} title="Manager">
      <div className={styles.wrapperStatsDefins}>
        <div className={classNames(styles.statDefin, styles.bck_scheduled)}>Scheduled</div>
        <div className={classNames(styles.statDefin, styles.bck_confirmed)}>Confirmed</div>
        <div className={classNames(styles.statDefin, styles.bck_orange)}>Going on now</div>
        <div className={classNames(styles.statDefin, styles.bck_green)}>
          Successfully completed
        </div>
        <div className={classNames(styles.statDefin, styles.bck_red)}>
          Conducted unsuccessfully
        </div>
      </div>
    </BgWrapper>
  );
};

export default ControlButtons;
