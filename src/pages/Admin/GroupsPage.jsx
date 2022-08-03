import React from "react";
import { useState, useEffect } from "react";
import styles from "../SuperAdmin/SuperAdminPage.module.scss";
import Button from "../../components/Buttons/Buttons";
import API from "../../helpers/api";
import Groups from "../../components/Groups/Groups";
import NewGroup from "../../components/modals/NewGroup/NewGroup";
import BgWrapper from "../../components/BgWrapper/BgWrapper";

const GroupsPage = () => {
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
      <h3 className={styles.main_title}>Manage groups</h3>
      <div className={styles.main_wrapper2}>
        <Groups text={"Minecraft"} isOpenModal={isOpen} />
        <Groups text={"Scratch"} isOpenModal={isOpen} />
        <Groups text={"Roblox"} isOpenModal={isOpen} />
      </div>
      <div className={styles.btn_wrapper}>
        <button
          className={styles.add_btn}
          data-modal="new-user"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Add new groups +
        </button>
        <NewGroup isOpen={isOpen} handleClose={() => handleClose()} />

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

export default GroupsPage;
