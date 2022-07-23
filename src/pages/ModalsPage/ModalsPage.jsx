import React, { useState } from "react";
import NewManager from "../../components/modals/NewManager/NewManager";
import ChangeAdministrator from "../../components/modals/ChangeAdmin/ChangeAdmin";
import styles from "./ModalsPage.module.scss";

const ModalsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenChange, setIsOpenChange] = useState(false);
  const handleClose = (e) => {
    if (e === 0) {
      setIsOpen(!isOpen);
    } else if(e === 1) {
      setIsOpenChange(!isOpenChange);
    }
  };
  const handleCloseAdmin = (e) => {
    setIsOpenChange(!isOpenChange);
  };

  return (
    <div>
      <button
        onClick={() => {
          isOpen ? setIsOpen(false) : setIsOpen(true);
        }}
      >
        Open newManager
      </button>
      <NewManager isOpen={isOpen} handleClose={() => handleClose(0)} />
      <button
        onClick={() => {
          isOpenChange ? setIsOpenChange(false) : setIsOpenChange(true);
        }}
      >
        Open change administrator
      </button>
      <ChangeAdministrator isOpen={isOpenChange} handleClose={() => handleClose(1)} />
    </div>
  );
};

export default ModalsPage;
