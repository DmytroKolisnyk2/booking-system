import React from "react";
import CallerPage from "../../../pages/Caller/CallerPage";
import Modal from "../../Modal/Modal";

export default function PostponeModal({ isOpen, onClose }) {
  return isOpen ? (
    <Modal onClose={onClose}>
      <CallerPage></CallerPage>
    </Modal>
  ) : (
    <></>
  );
}
