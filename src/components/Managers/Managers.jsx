import React from "react";
import { useState, useEffect } from "react";
import { getUsersByRole, getManagers } from "../../helpers/api";
import styles from "./Managers.module.scss";
import ChangeUser from "../modals/ChangeUser/ChangeUser";

// <<<<<<< HEAD
// export default Managers = ({ text, isOpenModal, role }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [managers, setManagers] = useState([]);
//   const [id, setId] = useState(0);
// =======
export default function Managers({ text, isOpenModal, role, isAdmin }) {
  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [managers, setManagers] = useState([]);
  const [id, setId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [newRole, setRole] = useState("");
  const [newLogin, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  const getManagersData = async () => {
    const res = await getUsersByRole(role)
      .then((res) =>
        res.data ? res.data : setErrorMessage("Example error message!")
      )
      .catch((error) => setErrorMessage(error.message));
    // if (role === "Manager") {
    //   console.log(
    //     await getManagers()
    //       .then((res) =>
    //         res.data ? res.data : setErrorMessage("Example error message!")
    //       )
    //       .catch((error) => setErrorMessage(error.message))
    //   );
    //   const managers = await getManagers()
    //     .then((res) =>
    //       res.data ? res.data : setErrorMessage("Example error message!")
    //     )
    //     .catch((error) => setErrorMessage(error.message));
    //   managers.map((i) => {
    //     i.manager = true;
    //     res.push(i);
    //   });
    //   console.log(res);
    // }
    setManagers(res);
    return res;
  };
  useEffect(() => {
    getManagersData();
  }, []);

  useEffect(() => {
    getManagersData();
  }, [isOpen, isOpenModal]);

  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.mini_title}>{text}</p>
        {errorMessage && <p className="error"> {errorMessage} </p>}
        {managers?.length > 0 && (
          <ul className={styles.main_wrapper}>
            {managers.map((item) => {
              return (
                <li className={styles.ul_items} key={item.name}>
                  <p className={styles.ul_items_text}>{item.name}</p>
                  <button
                    className={styles.ul_items_btn}
                    data-modal="change-user"
                    onClick={() => {
                      setIsOpen(!isOpen);
                      setId(item.id);
                      setName(item.name);
                      setTelegram(item.telegram);
                      setRole(item.role_id);
                      setLogin(item.login);
                    }}
                  />
                </li>
              );
            })}
          </ul>
        )}
        <ChangeUser
          isOpen={isOpen}
          handleClose={() => setIsOpen(!isOpen)}
          id={id}
          dataName={name}
          dataDesc={telegram}
          administrator={isAdmin}
          dataRole={newRole}
          dataLogin={newLogin}
          dataPassword={password}
        />
      </div>
    </>
  );
}
