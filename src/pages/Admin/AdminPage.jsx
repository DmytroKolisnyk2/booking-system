import React, {useState, useEffect} from "react";
import styles from "./AdminPage.module.scss";
import Button from "../../components/Buttons/Buttons";

import BgWrapper from "../../components/BgWrapper/BgWrapper";
import { Outlet, useParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import path from "../../helpers/routerPath";
import { getUserById } from "../../helpers/user/user";

const AdminPage = () => {
  const [adminName, setAdminName] = useState("");
  const { adminId } = useParams();
  useEffect(() => {
    getUserById(+adminId)
      .then((data) => {
        setAdminName(data.data.name);
      })
      .catch((err) => {
        setAdminName(err);
      });
  }, [])
  return (
    <>
      <Header
        endpoints={[
          { text: "users", path: path.users },
          { text: "groups", path: path.groups },
          { text: "courses", path: path.courses },
          { text: "Search by CRM", path: path.crm },
        ]}
        user={{ name: adminName, role: "Admin" }}
      />
      <section className={styles.main_wrapper}>
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
      </section>
    </>
  );
};

export default AdminPage;
