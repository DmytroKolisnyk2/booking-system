import { useState } from "react";
import styles from "./AdminPage.module.scss";

import Managers from "../../components/Managers/Managers";
import NewUser from "../../components/modals/NewUser/NewUser";

export default function UsersPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };
    const usersArray = [
      { text: "Managers", role: "Manager", isAdmin: false, isManager: true },
      {
        text: "Confirmators",
        role: "Confirmator",
        isAdmin: false,
        isManager: false,
      },
      { text: "Call center", role: "Caller", isAdmin: false, isManager: false },
    ];
  return (
    <>
      <h3 className={styles.main_title}>Manage users</h3>
      <div className={styles.main_wrapper2}>
        {usersArray.map((item, index) => {
          return (
            <Managers
              key={index}
              text={item.text}
              role={item.role}
              isOpenModal={isOpen}
              isAdmin={item.isAdmin}
              isManager={item.isManager}
            />
          );
        })}
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
          isAdmin={true}
        />
      </div>
    </>
  );
}
