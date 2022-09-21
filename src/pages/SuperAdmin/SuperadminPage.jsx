import React from "react";
import styles from "./SuperAdminPage.module.scss";
import BgWrapper from "../../components/BgWrapper/BgWrapper";
import Header from "../../components/Header/Header";
import path from "../../helpers/routerPath";
import { Outlet } from "react-router-dom";

const SuperAdministrator = () => {
  return (
    <>
      <Header
        endpoints={[
          { text: "users", path: path.users },
          { text: "groups", path: path.groups },
          { text: "courses", path: path.courses },
          { text: "Search by CRM", path: path.crm },
        ]}
      />
      <section className={styles.main_wrapper}>
        <BgWrapper title="Super administrator" />
        <Outlet />
      </section>
    </>
  );
};

export default SuperAdministrator;
