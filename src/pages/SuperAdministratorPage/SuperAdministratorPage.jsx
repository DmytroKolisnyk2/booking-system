import React from "react";
import { useState, useEffect } from "react";
import styles from "./SuperAdminPage.module.scss";
import Button from "../../components/Buttons/Buttons";
import API from "../../helpers/api";
import Managers from "../../components/Managers/Managers";
import NewUser from "../../components/modals/NewUser/NewUser";
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
    <div className={styles.main_wrapper}>
      <h3 className={styles.main_title}>Manage administrators</h3>
      {/* <div className={styles.text_wrapper}>
        <p className={styles.mini_title}>Administrators</p>
        <p className={styles.mini_title1}>Managers</p>
        <p className={styles.mini_title1}>Confirmators</p>
        <p className={styles.mini_title1}>Call center</p>
        </div> */}
        <div className={styles.main_wrapper2}>
      <Managers text={"Administrators"} />
      
      <Managers text={"Mangers"} />
   
      <Managers text={"Confirmators"} />
      
      <Managers text={"Call center"} />
      </div> 
      <div className={styles.btn_wrapper}>
        <button className={styles.add_btn}
          paddingRight={39}
          paddingLeft={39}
          width={"auto"}
          bgColor={"black"}
          color={"white"}
          margin={"0 auto"}       data-modal="new-user"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Add new administrator +
        </button>
        <NewUser isOpen={isOpen} handleClose={() => handleClose()} />

      
         {/* <button
          onClick={() => {
            setManagerModal(!isManagerModal);
          }}
        >
          Click
        </button>  */}
         {/* <ManagerModal
          isOpen={isManagerModal}
          handleClose={() => handleClose(0)}
        /> */}
      
      </div>
    </div>
  );
};

export default SuperAdministrator;
