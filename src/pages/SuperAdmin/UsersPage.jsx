import { useState } from "react";
import styles from "./SuperAdminPage.module.scss";
import Managers from "../../components/Managers/Managers";
import NewUser from "../../components/modals/NewUser/NewUser";

export default function UsersPage() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <h3 className={styles.main_title}>Manage administrators</h3>
      <div className={styles.main_wrapper2}>
        <Managers
          text={"Administrators"}
          role="Administrator"
          isOpenModal={isOpen}
          isAdmin={false}
        />
        <Managers
          text={"Managers"}
          role="Manager"
          isOpenModal={isOpen}
          isAdmin={false}
          isManager
        />

        <Managers
          text={"Confirmators"}
          role="Confirmator"
          isOpenModal={isOpen}
          isAdmin={false}
        />

        <Managers
          text={"Call center"}
          role="Caller"
          isOpenModal={isOpen}
          isAdmin={false}
        />
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
        <NewUser
          isOpen={isOpen}
          handleClose={() => handleClose()}
          isAdmin={false}
        />
      </div>
    </>
  );
}
