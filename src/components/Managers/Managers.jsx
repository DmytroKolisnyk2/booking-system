import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../../helpers/user/user";
import styles from "./Managers.module.scss";
import ChangeUser from "../modals/ChangeUser/ChangeUser";
import { Fade } from "react-awesome-reveal";
import { getManagers } from "../../helpers/manager/manager";

export default function Managers({ isOpenModal, role, isAdmin, data }) {
  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [managers, setManagers] = useState(data);
  const [id, setId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [newRole, setRole] = useState("");
  const [newLogin, setLogin] = useState("");
  let usersArray = [
    {
      text: "Administrators",
      role: "Administrator",
      roleId: 3,
      isAdmin: false,
      isManager: false,
    },
    {
      text: "Managers",
      role: "Manager",
      roleId: 2,
      isAdmin: false,
      isManager: true,
    },
    {
      text: "Confirmators",
      role: "Confirmator",
      roleId: 5,
      isAdmin: false,
      isManager: false,
    },
    {
      text: "Call center",
      role: "Caller",
      isAdmin: false,
      roleId: 4,
      isManager: false,
    },
  ];
  if (isAdmin) {
    usersArray = usersArray.slice(1);
  }

  const getUsersData = async () => {
    const arr = [];
    const res = await getUsers().then((res) =>
      res.users.filter((item) => item.role_id > 2)
    );
    const resManagers = await getManagers().then((res) => res.data);
    resManagers.map((item) => (item.role_id = 2));
    arr.push(...res);
    arr.push(...resManagers);
    return setManagers(arr);
  };

  useEffect(() => {
    getUsersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, isOpenModal]);
  return (
    <>
      {managers?.length > 0 &&
        usersArray.map((i, index) => {
          return (
            <React.Fragment key={index}>
              <div className={styles.wrapper} key={index}>
                <p className={styles.mini_title}>{i.text}</p>
                <ul className={styles.main_wrapper}>
                  {managers.map((item) => {
                    if (i.roleId === item.role_id || !item.role_id) {
                      return (
                        <Fade
                          cascade
                          triggerOnce
                          duration={300}
                          direction="up"
                          key={item.id}
                        >
                          <li className={styles.ul_items} key={item.name}>
                            <Link
                              className={styles.ul_items_link}
                              target="_blank"
                              to={
                                i.role === "Manager"
                                  ? `/manager/${item.id}/planning/`
                                  : i.role === "Administrator"
                                  ? `/admin/${item.id}`
                                  : i.role === "Caller"
                                  ? `/caller/${item.id}`
                                  : i.role === "Confirmator" &&
                                    `/confirmator/${item.id}`
                              }
                            >
                              <p className={styles.ul_items_text}>
                                {item.name} ({item.id})
                              </p>
                            </Link>
                            <button
                              className={styles.ul_items_btn}
                              data-modal="change-user"
                              onClick={() => {
                                setIsOpen(!isOpen);
                                setId(item.id);
                                setName(item.name);
                                setTelegram(item.telegram);
                                if (!item.role_id) setRole(2);
                                else {
                                  setRole(item.role_id);
                                }
                                setLogin(item.login);
                              }}
                            />
                          </li>
                        </Fade>
                      );
                    }
                  })}
                </ul>
              </div>
            </React.Fragment>
          );
        })}
      <ChangeUser
        isOpen={isOpen}
        handleClose={() => setIsOpen(!isOpen)}
        id={id}
        dataName={name}
        dataDesc={telegram}
        administrator={isAdmin}
        dataRole={newRole}
        dataLogin={newLogin}
      />
      {/* <div className={styles.wrapper}>
        <p className={styles.mini_title}>{text}</p>
        {errorMessage && <p className="error"> {errorMessage} </p>}
        {managers?.length > 0 && (
          <ul className={styles.main_wrapper}>
            <Fade cascade triggerOnce duration={300} direction="up">
              {managers.map((item) => {
                return (
                  <li className={styles.ul_items} key={item.name}>
                    <Link
                      className={styles.ul_items_link}
                      target="_blank"
                      to={
                        role === "Manager"
                          ? `/manager/${item.id}/planning/`
                          : role === "Administrator"
                          ? `/admin/${item.id}`
                          : role === "Caller"
                          ? `/caller/${item.id}`
                          : role === "Confirmator" && `/confirmator/${item.id}`
                      }
                    >
                      <p className={styles.ul_items_text}>
                        {item.name} ({item.id})
                      </p>
                    </Link>
                    <button
                      className={styles.ul_items_btn}
                      data-modal="change-user"
                      onClick={() => {
                        setIsOpen(!isOpen);
                        setId(item.id);
                        setName(item.name);
                        setTelegram(item.telegram);
                        if (!item.role_id) setRole(2);
                        else {
                          setRole(item.role_id);
                        }
                        setLogin(item.login);
                      }}
                    />
                  </li>
                );
              })}
            </Fade>
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
        />
      </div> */}
    </>
  );
}
