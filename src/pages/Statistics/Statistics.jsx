import { Fade } from "react-awesome-reveal";
import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Statistics.module.scss";

const Statistics = () => {
  return (
    <>
      <Header endpoints={[{ text: "To Superadmin page", path: "superadmin/users/" }]} />
      <section className={styles.home}>
     <Fade triggerOnce duration={250} direction="down">
          <p className={styles.error}>
           Statistics page.
          </p>
     </Fade>
      </section>
    </>
  );
};

export default Statistics;
