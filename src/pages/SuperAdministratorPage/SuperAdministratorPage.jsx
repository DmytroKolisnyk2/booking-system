import React from "react";
import { useState, useEffect } from "react";
import styles from "./SuperAdminPage.module.scss";
import Button from "../../components/Buttons/Buttons";
import API from "../../helpers/api";
import Managers from "../../components/Managers/Managers";
import ManagerModal from "../../components/modals/ManagerModal/ManagerModal";
const SuperAdministrator = () => {
  const [isManagerModal, setManagerModal] = useState(false);
  const handleClose = (e) => {
    if (e === 0) {
      setManagerModal(!isManagerModal);
    }
  };
  return (
    <div className={styles.main_wrapper}>
      <h3 className={styles.main_title}>Manage administrators</h3>

      <Managers text={"Administrators"} />
      <Managers text={"Mangers"} />
      <Managers text={"Confirmators"} />
      <Managers text={"Call center"} />
      <div className={styles.btn_wrapper}>
        <Button
          marginBottom={40}
          paddingRight={39}
          paddingLeft={39}
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
        <button
          onClick={() => {
            setManagerModal(!isManagerModal);
          }}
        >
          Click
        </button>
        <ManagerModal
          isOpen={isManagerModal}
          handleClose={() => handleClose(0)}
        />
      </div>
    </div>
  );
};

export default SuperAdministrator;
