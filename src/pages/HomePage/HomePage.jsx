import React from "react";
import Header from "../../components/Header/Header";
import path from "../../helpers/routerPath";

const HomePage = () => {
  return (
    <div>
      <Header
        endpoints={[
          { text: "superadmin", path: "superadmin/users/" },
          { text: "admin", path: "admin/Maks/users/" },
          { text: "manager", path: "manager/Maks/planning/" },
          { text: "modals", path: path.modals },
        ]}
      />
    </div>
  );
};

export default HomePage;
