import React from "react";
import Header from "../../components/Header/Header";
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <>
      <Header
        endpoints={[
          { text: "caller", path: "caller/1" },
          { text: "superadmin", path: "superadmin/users/" },
          { text: "admin", path: "admin/1/users/" },
          { text: "manager", path: "manager/1/planning/" },
          { text: "confirmator", path: "confirmator/1/" },
        ]}
      />
      <section className={styles.home}><p className={styles.error}><span>404</span>Not Found</p></section>
    </>
  );
};

export default HomePage;
