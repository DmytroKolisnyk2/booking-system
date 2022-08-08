import React from "react";
import logo from "../../img/goiteensLOGO.png";
import LoginBox from "../LoginBox/LoginBox";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.scss";

export default function Header({ endpoints = [], user }) {
  return (
    <header className={styles.header}>
      <a
        className={styles["logoLink"]}
        href="https://goiteens.ua/"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        <img src={logo} alt="logo" className={styles["logoImg"]} />
      </a>
      <Navigation user={user} links={endpoints} />
      <LoginBox />
    </header>
  );
}
