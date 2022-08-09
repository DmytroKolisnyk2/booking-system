import React, {useState, useEffect} from "react";
import { Outlet, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import path from "../../helpers/routerPath";
import { getUserById } from "../../helpers/user/user";

export default function ManagerPage() {
  const { managerId } = useParams();
  const [managerName, setManagerName] = useState('');
  useEffect(() => {
    getUserById(+managerId).then((data) => {
      setManagerName(data.data.name);
    });
  }, [managerId]);
  return (
    <>
      <Header
        endpoints={[
          { text: "planning", path: path.planning },
          { text: "consultations", path: path.consultations },
        ]}
        user={{ name: managerName, role: "Manager" }}
      />
      <Outlet urlManager_Id={managerId} />
    </>
  );
}
