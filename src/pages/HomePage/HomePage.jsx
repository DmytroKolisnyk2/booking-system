import { Fade } from "react-awesome-reveal";
import React from "react";
import Header from "../../components/Header/Header";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <>
      <Header endpoints={[{ text: "superadmin", path: "superadmin/users/" }]} />
      <section className={styles.home}>
     <Fade triggerOnce duration={250} direction="down">
          <p className={styles.error}>
            <span>404</span>Not Found
          </p>
     </Fade>
      </section>
    </>
  );
};

export default HomePage;
