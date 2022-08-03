import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./CurrentTableItem.module.scss";
import ConsultationInfo from "../../components/modals/ConsultationInfo/ConsultationInfo";

const CurrentTableItem = ({ data, colorId }) => {
  const activeClassnames = (colorId) => {
    return classNames(styles.item, {
      [styles.grayColor]: +colorId === 0,
      [styles.orangeColor]: +colorId === 2,
      [styles.greenColor]: +colorId === 1,
    });
  };

  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState("");

  return (
    <>
      <li className={activeClassnames(colorId)}>
        {`${data}:00`}
        <div className={styles.hover_buttons}>
          <button>start</button>
          <button
              type="button"
              data-modal="consulta"
              onClick={() => {
                setIsOpen(!isOpen);
                setModal("consulta")
              }}
          >
            info
          </button>
        </div>
      </li>

      {modal === "consulta" && (
          <ConsultationInfo isOpen={isOpen} handleClose={() => setIsOpen(!isOpen)}  />
        )}
    </>
  );
};

CurrentTableItem.propTypes = {
  data: PropTypes.number.isRequired,
  colorId: PropTypes.number.isRequired,
  onClickFn: PropTypes.func.isRequired,
};

export default CurrentTableItem;
