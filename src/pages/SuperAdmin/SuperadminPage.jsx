// <<<<<<< HEAD
// import React from "react";
// import { useState, useEffect } from "react";
// import styles from "./SuperAdminPage.module.scss";
// import Button from "../../components/Buttons/Buttons";
// import API from "../../helpers/api";
// import Managers from "../../components/Managers/Managers";
// import ManagerModal from "../../components/modals/ManagerModal/ManagerModal";
// import NewUser from "../../components/modals/NewUser/NewUser";
// const SuperAdministrator = () => {
//   const [isManagerModal, setManagerModal] = useState(false);
//   const handleClose = (e) => {
//     setManagerModal(!isManagerModal);
//   };
//   console.log(isManagerModal);
//   return (
//     <div className={styles.main_wrapper}>
//       <h3 className={styles.main_title}>Manage administrators</h3>
//       {/* <div className={styles.text_wrapper}>
//         <p className={styles.mini_title}>Administrators</p>
//         <p className={styles.mini_title1}>Managers</p>
//         <p className={styles.mini_title1}>Confirmators</p>
//         <p className={styles.mini_title1}>Call center</p>
//         </div> */}
//       <div className={styles.main_wrapper2}>
//         <Managers
//           text={"Administrators"}
//           role="Administrator"
//           isOpenModal={isManagerModal}
//         />

//         <Managers
//           text={"Managers"}
//           role="Manager"
//           isOpenModal={isManagerModal}
//         />

//         <Managers
//           text={"Confirmators"}
//           role="Confirmator"
//           isOpenModal={isManagerModal}
//         />

//         <Managers
//           text={"Call center"}
//           role="Caller"
//           isOpenModal={isManagerModal}
//         />
//       </div>
//       <div className={styles.btn_wrapper}>
//         <Button
//           className={styles.add_btn}
//           onclick={() => {
//             setManagerModal(!isManagerModal);
//           }}
//           paddingRight={39}
//           paddingLeft={39}
//           width={"auto"}
//           bgColor={"black"}
//           color={"white"}
//           margin={"0 auto"}
//         >
//           Add new administrator +
//         </Button>

//         {/* <button
//           onClick={() => {
//             setManagerModal(!isManagerModal);
//           }}
//         >
//           Click
//         </button> */}
//         <NewUser isOpen={isManagerModal} handleClose={() => handleClose()} administrator={true}/>
//       </div>
//     </div>
//   );
// };
// =======

import React from "react";
import { useState, useEffect } from "react";
import styles from "./SuperAdminPage.module.scss";
import Button from "../../components/Buttons/Buttons";
import API from "../../helpers/api";
import Managers from "../../components/Managers/Managers";
import NewUser from "../../components/modals/NewUser/NewUser";
import BgWrapper from "../../components/BgWrapper/BgWrapper";
import Header from "../../components/Header/Header";
import path from "../../helpers/routerPath";
import { Outlet } from "react-router-dom";

const SuperAdministrator = () => {
  // const [isManagerModal, setManagerModal] = useState(false);
  // const handleClose = (e) => {
  //   if (e === 0) {
  //     setManagerModal(!isManagerModal);
  //   }
  // };
  const [id, setId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState("");

  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header
        endpoints={[
          { text: "users", path: path.users },
          { text: "groups", path: path.groups },
          { text: "courses", path: path.courses },
          { text: "actions", path: path.actions },
        ]}
      />
      <div className={styles.main_wrapper}>
        <BgWrapper title="Super administrator" />
        <Outlet />
      </div>
    </>
  );
};

export default SuperAdministrator;