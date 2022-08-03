import React from "react";
import { Component, useState, useEffect } from "react";
import { getUsersByRole } from "../../helpers/api";
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
  const [modal, setModal] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const getManagersData = async () => {
  //   const res = await getUsersByRole(role)
  //     .then((res) => res.data)
  //     .catch((error) => console.log(error));
  // };
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  const getManagersData = async () => {
    const res = await getUsersByRole(role)
      .then((res) => (res.data ? res.data : setErrorMessage("Example error message!")))
      .catch((error) => setErrorMessage(error.message));
    // >>>>>>> administratorpage

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
      {errorMessage && <p className="error"> {errorMessage} </p>}
      <div className={styles.wrapper}>
        <ChangeUser isOpen={isOpen} handleClose={() => handleClose()} id={id} administrator={isAdmin}/>
        <p className={styles.mini_title}>{text}</p>
        {managers?.length > 0 && (
          <ul className={styles.main_wrapper}>
            {managers.map((item) => {
              return (
                <li className={styles.ul_items} key={item.name}>
                  <p className={styles.ul_items_text}>{item.name}</p>
                  {/* <button className={styles.ul_items_btn} onClick={ <ChangeUser
            isOpen={isOpen}
            handleClose={() => handleClose()}
            id={id}
          />}/> */}
                  <button
                    className={styles.ul_items_btn}
                    data-modal="change-user"
                    onClick={() => {
                      setIsOpen(!isOpen);
                      setId(item.id);
                      setName(item.name);
                      setTelegram(item.telegram);
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
        />
      </div>
    </>
  );
}
