import { Fade } from "react-awesome-reveal";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

export default function Navigation({ links, user }) {
  return (
    <nav className={styles["menu"]}>
      <Fade duration={200} triggerOnce delay={300} direction="up">
        {links.length === 0 && (
          <p className={styles["endpoints_role"]}>{user.role + ": " + user.name}</p>
        )}
        {user && links.length !== 0 && (
          <p className={styles["role"]}>{user.role + ": " + user.name}</p>
        )}
      </Fade>
      <div></div>
      <ul className={styles["list"]}>
       <Fade duration={250} cascade triggerOnce direction="up">
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
       </Fade>
      </ul>
    </nav>
  );
}
