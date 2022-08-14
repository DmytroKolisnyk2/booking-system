import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsersByRole } from "../../helpers/user/user";
import styles from "./Managers.module.scss";
import ChangeUser from "../modals/ChangeUser/ChangeUser";
import { Fade } from "react-awesome-reveal";

export default function Managers({ text, isOpenModal, role, isAdmin }) {
  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [managers, setManagers] = useState([]);
  const [id, setId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [newRole, setRole] = useState("");
  const [newLogin, setLogin] = useState("");
  const getManagersData = async () => {
    const res = await getUsersByRole(role)
      .then((res) =>
        res.data ? res.data : setErrorMessage("Example error message!")
      )
      .catch((error) => setErrorMessage(error.message));
    setManagers(res);
    return res;
  };
  useEffect(() => {
    getManagersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, isOpenModal]);

  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.mini_title}>{text}</p>
        {errorMessage && <p className="error"> {errorMessage} </p>}
        {managers?.length > 0 && (
          <ul className={styles.main_wrapper}>
            <Fade cascade triggerOnce duration={300} direction="up">
              {managers.map((item) => {
                return (
                  <li key={item.name}>
                    <Link
                      target="_blank"
                      className={styles.ul_items}
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
                    </Link>
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
      </div>
    </>
  );
}
