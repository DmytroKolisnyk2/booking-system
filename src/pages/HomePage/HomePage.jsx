import React from "react";
import Header from "../../components/Header/Header";
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <>
      <Header
        endpoints={[
          { text: "superadmin", path: "superadmin/users/" },
        ]}
      />
      <section className={styles.home}><p className={styles.error}><span>404</span>Not Found</p></section>
    </>
  );
};

export default HomePage;
