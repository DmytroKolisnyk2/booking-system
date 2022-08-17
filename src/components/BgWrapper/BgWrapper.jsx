import React from "react";
import bg from "../../img/Bg.png";
import styles from "./BgWrapper.module.scss";
import { Fade } from "react-awesome-reveal";

export default function BgWrapper({ children, title, top, bottom }) {
  return (
    <section className={styles.bgWrapper}>
     <Fade triggerOnce duration={400}>
        <img
          style={{
            marginTop: `${top}px`,
            marginBottom: `${bottom}px`,
          }}
          src={bg}
          alt=""
          className={styles.bgImg}
        />
        <h2 className={styles.title}>{title}</h2>
        {children}
     </Fade>
    </section>
  );
}
