import React from "react";
import bg from "../../img/Bg.png";
import styles from "./BgWrapper.module.scss";

export default function BgWrapper({ children, title }) {
  return (
    <section className={styles.bgWrapper}>
      <img src={bg} alt="" className={styles.bgImg} />
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
}
