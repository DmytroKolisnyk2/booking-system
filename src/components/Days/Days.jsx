import React from "react";
import styles from './Days.module.scss';


const Days = () => {
    const arrayDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return (
      <div>
        <div className={styles.wrapperDays}>
          {arrayDays.map((item, index) => {
            return (
              <div key={index} className={styles.day}>
                <h3 className={styles.dayTitle}>{item}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
};

export default Days;