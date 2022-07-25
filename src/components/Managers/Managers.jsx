import React from "react";
import { Component, useState, useEffect } from "react";
import getManagers from "../../helpers/api";
import styles from "./Managers.module.scss"
const Managers = ({text}) => {
  const [managers, setManagers] = useState([]);
  const getManagersData = async () => {
    const res = await getManagers()
    
    setManagers(res);
    console.log(res);
    return res;
  };
  useEffect(() => {
getManagersData()
    }, [])
  return (
    <div >
    
     <p className={styles.mini_title}>{text}</p>
     
     
     { managers.length>0&&<ul className={styles.main_wrapper}>
        {managers.map((item) => {
          return <li className={styles.ul_items} key={item.name}>{item.name}</li>;
        })}
      </ul>}
    </div>
  );
};
export default Managers;