import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import path from "../../helpers/routerPath";

export default function ManagerPage() {
  const { managerId } = useParams();

  return (
    <>
      <Header
        endpoints={[
          { text: "planning", path: path.planning },
          { text: "consultations", path: path.consultations },
        ]}
        user={{ name: managerId, role: "Manager" }}
      />
      <Outlet/>
    </>
  );
}
