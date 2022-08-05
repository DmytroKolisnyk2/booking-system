import React from "react";
import Header from "../../components/Header/Header";
import path from "../../helpers/routerPath";

const HomePage = () => {
  return (
    <>
      <Header
        endpoints={[
          { text: "superadmin", path: "superadmin/users/" },
          { text: "admin", path: "admin/1/users/" },
          { text: "manager", path: "manager/1/planning/" },
          { text: "confirmator", path: "confirmator/1/" },
          { text: "modals", path: path.modals },
        ]}
      />
      <section></section>
    </>
  );
};

export default HomePage;
