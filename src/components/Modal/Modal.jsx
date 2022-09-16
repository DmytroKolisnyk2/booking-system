import React from "react";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { Fade } from "react-awesome-reveal";

const modalRef = document.querySelector("#root-modal");

const Modal = (props) => {
  return createPortal(
    <div
      className={styles["Overlay"]}
      style={{ zIndex: props.index }}
      onClick={props.onClose}
    >
      <Fade triggerOnce duration={250}>
        <div className={styles["Modal"]} onClick={(e) => e.stopPropagation()}>
          {props.children}
        </div>
      </Fade>
    </div>,
    modalRef
  );
};

export default Modal;
