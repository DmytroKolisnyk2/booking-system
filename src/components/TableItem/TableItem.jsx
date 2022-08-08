import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./TableItem.module.scss";
import ConsultationInfo from "../../components/modals/ConsultationInfo/ConsultationInfo";
import { changeStatusSlot } from "../../redux/manager/manager-operations";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const TableItem = ({
  data,
  colorId,
  onClickFn,
  consultation,
  dayIndex,
  hourIndex,
}) => {
  const { managerId } = useParams();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState("");
  // {console.log(managerId)}
  const api_info = {
<<<<<<< HEAD
    managerId: managerId,
=======
    managerId: +managerId,
>>>>>>> f22b92e125cbe9c21c5f90d569591384464e9ea6
    weekId: 1, // weekId
    dayIndex: dayIndex,
    slotHour: data,
    colorId: [7, 8],
    hourIndex: hourIndex,
    dispatch: dispatch,
  };
  const activeClassnames = (colorId) => {
    return classNames(styles.item, {
      [styles.grayColor]: +colorId === 0,
      [styles.orangeColor]: +colorId === 2,
      [styles.greenColor]: +colorId === 1,
      [styles.blueColor]: +colorId === 3,
      [styles.purpleColor]: +colorId === 4,
      [styles.darkOrangeColor]: +colorId === 6,
      [styles.darkGreenColor]: +colorId === 7,
      [styles.redColor]: +colorId === 8,
    });
  };
  return (
    <>
      {consultation ? (
        colorId === 2 ? (
          <>
            <li className={activeClassnames(colorId)}>
              {`${data}:00`}
              <div className={styles.hover_buttons}>
                <button type="button" onClick={onClickFn}>
                  start
                </button>
                <button
                  type="button"
                  data-modal="consulta"
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setModal("consulta");
                  }}
                >
                  info
                </button>
              </div>
            </li>

            {modal === "consulta" && (
              <ConsultationInfo
                api_info={api_info}
                isOpen={isOpen}
                handleClose={() => setIsOpen(!isOpen)}
              />
            )}
          </>
        ) : colorId === 6 ? (
          <>
            <li className={activeClassnames(colorId)}>
              {`${data}:00`}
              <div className={styles.hover_buttons}>
                <button
                  className={styles.only_info_button}
                  type="button"
                  data-modal="consulta"
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setModal("consulta");
                  }}
                >
                  info
                </button>
              </div>
            </li>

            {modal === "consulta" && (
              <ConsultationInfo
                api_info={api_info}
                isOpen={isOpen}
                handleClose={() => setIsOpen(!isOpen)}
              />
            )}
          </>
        ) : (
          <li className={activeClassnames(colorId)}>{`${data}:00`}</li>
        )
      ) : (
        <li
          onClick={onClickFn}
          className={activeClassnames(colorId)}
        >{`${data}:00`}</li>
      )}
    </>
  );
};

TableItem.propTypes = {
  data: PropTypes.number.isRequired,
  colorId: PropTypes.number.isRequired,
  onClickFn: PropTypes.func,
  consultation: PropTypes.bool,
};

export default TableItem;
