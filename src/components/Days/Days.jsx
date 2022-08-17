import React from "react";
import styles from "./Days.module.scss";
import { useSelector } from "react-redux";
import { getDate } from "../../redux/manager/manager-selectors";
import { getCallerDate } from "../../redux/caller/caller-selectors";
import moment from "moment";
import { Fade } from "react-awesome-reveal";

const Days = ({ caller }) => {
  const managerDate = new Date(useSelector(getDate));
  const callerDate = new Date(useSelector(getCallerDate));
  const arrayDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let date = caller ? callerDate : managerDate;
  return (
    <div>
      <div className={styles.wrapperDays}>
        {arrayDays.map((item, index) => {
          const day =
            moment(date).add(index, "days").date() < 10
              ? `0${moment(date).add(index, "days").date()}`
              : moment(date).add(index, "days").date();
          const month =
            moment(date).add(index, "days").month() + 1 < 10
              ? `0${moment(date).add(index, "days").month() + 1}`
              : moment(date).add(index, "days").month() + 1;
          return (
            <div key={index} className={styles.day}>
                <h3 className={styles.dayTitle}>{item}</h3>
              <Fade delay={500} triggerOnce duration={500}>
                <span className={styles.dayDate}>{`${day}.${month}`}</span>
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Days;
