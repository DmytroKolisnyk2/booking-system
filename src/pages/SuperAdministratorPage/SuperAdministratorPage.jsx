
      import React from "react";
      import { useState, useEffect } from "react";
      import styles from "./SuperAdminPage.module.scss";
      import Button from "../../components/Buttons/Buttons";
      import API from "../../helpers/api";
      import Managers from "../../components/Managers/Managers";
      import NewUser from "../../components/modals/NewUser/NewUser";
      import BgWrapper from "../../components/BgWrapper/BgWrapper";
      
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
        }
        return (
          <div className={styles.main_wrapper}>
            <BgWrapper title="Super administrator"/>
      <h3 className={styles.main_title}>Manage administrators</h3>
              <div className={styles.main_wrapper2}>
            <Managers isOpenModal={isOpen} text={"Administrators"} />
            
            <Managers isOpenModal={isOpen} text={"Mangers"} />
         
            <Managers isOpenModal={isOpen} text={"Confirmators"} />
            
            <Managers isOpenModal={isOpen} text={"Call center"} />
            </div> 
            <div className={styles.btn_wrapper}>
              <button className={styles.add_btn}
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
      
      export default SuperAdministrator;