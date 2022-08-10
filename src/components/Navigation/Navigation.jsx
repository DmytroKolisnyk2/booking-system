import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

export default function Navigation({ links, user }) {

  
  return (

    <nav className={styles["menu"]}>
     { links && links.length  === 0  ? <p className={styles["endpoints_role"]}>{user.role + ": " + user.name}</p> : <p className={styles["role"]}>{user.role + ": " + user.name}</p> } 
     {/* {user && <p className={styles["role"]}>{user.role + ": " + user.name}</p>} */}
         {console.log( links.length )}
         
       
         <ul className={styles["list"]}>
        {links.map((item) => (
          <li key={item.path} className={styles["list__item"]}>
            <NavLink
              to={item.path}
              className={(navData) =>
                (navData.isActive && styles.NavLinkActive) + " " + styles.NavLink
              }
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );

}