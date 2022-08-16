import { useState, useEffect } from "react";
import styles from "./AdminPage.module.scss";
import Managers from "../../components/Managers/Managers";
import NewUser from "../../components/modals/NewUser/NewUser";
import { getUsers } from "../../helpers/user/user";
import { getManagers } from "../../helpers/manager/manager";

export default function UsersPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  const usersArray = [
    { text: "Managers", role: "Manager", isAdmin: false, isManager: true },
  ];
  const getUsersData = async () => {
    const arr = [];
    const res = await getUsers().then((res) =>
      res.users.filter((item) => item.role_id > 2)
    );
    const resManagers = await getManagers().then((res) => res.data);
    resManagers.map((item) => (item.role_id = 2));
    arr.push(...res);
    arr.push(...resManagers);
    return setData(arr);
  };
  useEffect(() => {
    getUsersData();
  }, [isOpen]);
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
              roleId={item.roleId}
              isAdmin
              data={data}
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
