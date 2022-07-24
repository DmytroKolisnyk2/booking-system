import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

export default function Navigation({ links, user }) {
  return (
    <nav className={styles["menu"]}>
      {user && <p className={styles["role"]}>{user.role + ": " + user.name}</p>}
      <ul className={styles["list"]}>
        {links.map((item) => (
          <li className={styles["list__item"]}>
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
