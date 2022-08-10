import React from "react";
import styles from "./AdminPage.module.scss";
import Button from "../../components/Buttons/Buttons";

import BgWrapper from "../../components/BgWrapper/BgWrapper";
import { Outlet, useParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import path from "../../helpers/routerPath";

const AdminPage = () => {
  const { adminId } = useParams();
  return (
    <>
      <Header
        endpoints={[
          { text: "users", path: path.users },
          { text: "groups", path: path.groups },
          { text: "courses", path: path.courses },
          { text: "actions", path: path.actions },
        ]}
        user={{ name: adminId, role: "Admin" }}
      />
      <div className={styles.main_wrapper}>
        <BgWrapper title="Administrator" />
        <Button
          paddingRight={36}
          paddingLeft={36}
          width={"auto"}
          bgColor={"purple"}
          color={"white"}
          margin={"0 auto"}
        >
          Manage: Administrator Марія
        </Button>
        <Outlet />
      </div>
    </>
  );
};

export default AdminPage;
