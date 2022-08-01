import React from "react";
import { Component, useState, useEffect } from "react";
import { getManagers, putManager } from "../../helpers/api";
import styles from "../../pages/SuperAdministratorPage/SuperAdminPage.module.scss";
import ChangeUser from "../modals/ChangeUser/ChangeUser";
import NewUser from "../modals/NewUser/NewUser";

export default function ModalBtn ({ isOpenModal,item}){
  const [managers, setManagers] = useState([]);
  const [id, setId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState("");

  const handleClose = () => { 
    setIsOpen(!isOpen);
  };
  const getManagersData = async () => {
    const res = await getManagers()
      .then((res) => res.data)
      .catch((error) => console.log(error));

    setManagers(res);
    console.log(res);
    return res;
  };
//   useEffect(() => {
//     getManagersData();
//   }, []);
  useEffect(() => {
    const get = async () => {
      await getManagersData();
    };
    get();
  }, [isOpen, isOpenModal]);
  return (
    <>

<button className={styles.add_btn}
    data-modal="new-user"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Add new administrator +
        </button>
        <NewUser isOpen={isOpen} handleClose={() => handleClose()} />
    
    </>
  );
};
// export default Managers;
