import React from "react";
import { Component, useState, useEffect } from "react";
import { getManagers, putManager,getCourses } from "../../helpers/api";
import styles from "./Managers.module.scss";
import ChangeUser from "../modals/ChangeUser/ChangeUser";


export default function Managers ({ text, isOpenModal }){
  const [managers, setManagers] = useState([]);
  const [id, setId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState("");
  // const [errorMessage, setErrorMessage] = useState('');
  // setErrorMessage('Example error message!');
  const handleClose = () => { 
    setIsOpen(!isOpen);
  };
  const getManagersData = async () => {
    const res = await getManagers()
      .then((res) => res.data)
      .catch((error) => console.log(error));

    setManagers(res);
    console.log(res);
    return res;
  };
  // const getCoursesData = async () => {
  //   const res = await getCoursesData()
  //     .then((res) => res.data)
  //     .catch((error) => console.log(error));

  //   setManagers(res);
  //   console.log(res);
  //   return res;
  // };
  useEffect(() => {
    getManagersData();
    getCourses()
  }, []);
  useEffect(() => {
    const get = async () => {
      await getManagersData();
    };
    get();
    // const getCours = async () => {
    //   await getCoursesData();
    // };
    // getCours();
  }, [isOpen, isOpenModal]);
  return (
    <>
    {/* {errorMessage && (
      <p className="error"> {errorMessage} </p>
    )} */}
      <div className={styles.wrapper}>
        <ChangeUser isOpen={isOpen} handleClose={() => handleClose()} id={id} />
        <p className={styles.mini_title}>{text}</p>
        {managers.length > 0 && (
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
                    }}
                  />
                </li>
              );
            })}
          </ul>
        )}
           
      </div>
    </>
  );
};