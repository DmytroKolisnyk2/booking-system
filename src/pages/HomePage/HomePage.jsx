import React, { useState } from "react";

import TableItem from "../../components/TableItem/TableItem";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const [week, setWeek] = useState({
    week_id: 1,
    manager_id: 1,
    slots: [
      [
        { time: 8, color: 0 },
        { time: 9, color: 0 },
        { time: 10, color: 0 },
        { time: 11, color: 1 },
        { time: 12, color: 1 },
        { time: 13, color: 1 },
        { time: 14, color: 1 },
        { time: 15, color: 1 },
        { time: 16, color: 1 },
        { time: 17, color: 1 },
        { time: 18, color: 1 },
        { time: 19, color: 1 },
        { time: 20, color: 1 },
        { time: 21, color: 1 },
        { time: 22, color: 0 },
      ],
      [
        { time: 8, color: 0 },
        { time: 9, color: 0 },
        { time: 10, color: 0 },
        { time: 11, color: 1 },
        { time: 12, color: 1 },
        { time: 13, color: 1 },
        { time: 14, color: 1 },
        { time: 15, color: 2 },
        { time: 16, color: 1 },
        { time: 17, color: 1 },
        { time: 18, color: 1 },
        { time: 19, color: 1 },
        { time: 20, color: 1 },
        { time: 21, color: 1 },
        { time: 22, color: 0 },
      ],
      [
        { time: 8, color: 0 },
        { time: 9, color: 0 },
        { time: 10, color: 0 },
        { time: 11, color: 1 },
        { time: 12, color: 1 },
        { time: 13, color: 1 },
        { time: 14, color: 1 },
        { time: 15, color: 1 },
        { time: 16, color: 1 },
        { time: 17, color: 1 },
        { time: 18, color: 1 },
        { time: 19, color: 1 },
        { time: 20, color: 1 },
        { time: 21, color: 1 },
        { time: 22, color: 0 },
      ],
      [
        { time: 8, color: 0 },
        { time: 9, color: 0 },
        { time: 10, color: 0 },
        { time: 11, color: 1 },
        { time: 12, color: 1 },
        { time: 13, color: 1 },
        { time: 14, color: 1 },
        { time: 15, color: 1 },
        { time: 16, color: 1 },
        { time: 17, color: 1 },
        { time: 18, color: 1 },
        { time: 19, color: 1 },
        { time: 20, color: 1 },
        { time: 21, color: 1 },
        { time: 22, color: 0 },
      ],
      [
        { time: 8, color: 0 },
        { time: 9, color: 0 },
        { time: 10, color: 0 },
        { time: 11, color: 1 },
        { time: 12, color: 1 },
        { time: 13, color: 1 },
        { time: 14, color: 1 },
        { time: 15, color: 1 },
        { time: 16, color: 1 },
        { time: 17, color: 1 },
        { time: 18, color: 1 },
        { time: 19, color: 1 },
        { time: 20, color: 1 },
        { time: 21, color: 1 },
        { time: 22, color: 0 },
      ],
      [
        { time: 8, color: 0 },
        { time: 9, color: 0 },
        { time: 10, color: 1 },
        { time: 11, color: 1 },
        { time: 12, color: 1 },
        { time: 13, color: 1 },
        { time: 14, color: 1 },
        { time: 15, color: 1 },
        { time: 16, color: 1 },
        { time: 17, color: 1 },
        { time: 18, color: 1 },
        { time: 19, color: 1 },
        { time: 20, color: 1 },
        { time: 21, color: 0 },
        { time: 22, color: 0 },
      ],
      [
        { time: 8, color: 0 },
        { time: 9, color: 0 },
        { time: 10, color: 1 },
        { time: 11, color: 1 },
        { time: 12, color: 1 },
        { time: 13, color: 1 },
        { time: 14, color: 1 },
        { time: 15, color: 1 },
        { time: 16, color: 1 },
        { time: 17, color: 1 },
        { time: 18, color: 1 },
        { time: 19, color: 1 },
        { time: 20, color: 1 },
        { time: 21, color: 0 },
        { time: 22, color: 0 },
      ],
    ],
  });
  return (
    <section className={styles.tableSection}>
      <ul className={styles.table}>
        {week.slots.map(day => {
          return day.map(item => {
            return <TableItem data={item.time} colorId={item.color} />;
          })
        })}
      </ul>
    </section>
  );
};

export default HomePage;
