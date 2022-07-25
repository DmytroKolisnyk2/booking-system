import styles from "./ManagerModal.module.scss";
import Modal from "../../Modal/Modal";
import React, { Component, useState, useEffect } from "react";
import Managers from "../../Managers/Managers"
import Button from "../../Buttons/Buttons"
const ManagerModal = ({ prop,managers, isOpen, handleClose }) => {
  return (
    <div>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <div className={styles.modal}>
            <h3 className={styles.title}>{prop}</h3>
            <Managers text={managers}/>
            <Button
          marginBottom={40}
          paddingRight={10}
          paddingLeft={10}
          width={"auto"}
          bgColor={"black"}
          color={"white"}
          margin={"0 auto"}
        >
          Add new administrator +
        </Button>
        <Button
          paddingRight={39}
          paddingLeft={39}
          width={"auto"}
          bgColor={"purple"}
          color={"white"}
          margin={"0 auto"}
        >
          Save
        </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ManagerModal;