import React from "react";
import styles from './Modal.module.scss';
import { createPortal } from "react-dom";

const modalRef = document.querySelector("#root-modal");

const Modal = (props) => {
  return createPortal(
    <div className={styles["Overlay"]}>
      <div className={styles["Modal"]}>{props.children}</div>
    </div>,
    modalRef
  );
};

export default Modal;