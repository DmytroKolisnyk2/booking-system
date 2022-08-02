import React from "react";
import { useState, useEffect } from "react";
import styles from "./AdminPage.module.scss";
import Button from "../../components/Buttons/Buttons";
import API from "../../helpers/api";
import Managers from "../../components/Managers/Managers";
import ManagerModal from "../../components/modals/ManagerModal/ManagerModal";
import BgWrapper from "../../components/BgWrapper/BgWrapper";
import NewUser from "../../components/modals/NewUser/NewUser";
const AdminPage = () => {
  const [id, setId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState("");

  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.main_wrapper}>
      <BgWrapper title="Administrator" />
<a href="/superadmin">
      <Button
        paddingRight={36}
        paddingLeft={36}
        width={"auto"}
        bgColor={"purple"}
        color={"white"}
        margin={"0 auto"}
      >
        Manage: Administrator Марія
      </Button></a>
      <h3 className={styles.main_title}>Manage users</h3>
      <div className={styles.main_wrapper2}>


      <Managers text={"Administrators"} role="Administrator"/>
      
      <Managers text={"Managers"} role="Manager"/>
   
      <Managers text={"Confirmators"} role="Confirmator"/>
{/*       
      <Managers text={"Call center"} role="Caller"/> */}
      </div>
      <div className={styles.btn_wrapper}>
        <button
          className={styles.add_btn}
          data-modal="new-user"
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
        {/* <ModalBtn/> */}
      </div>
    </div>
  );
};

export default AdminPage;
