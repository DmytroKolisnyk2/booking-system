import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./TableItem.module.scss";
import ConsultationInfo from "../../components/modals/ConsultationInfo/ConsultationInfo";
import NewAppointment from "../../components/modals/NewAppointment2/NewAppointment";

const TableItem = ({
  data,
  colorId,
  onClickFn,
  consultation,
  caller,
  weekId,
  dayIndex,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState("");
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

  const activeCallerClassnames = (colorId) => {
    return classNames(styles.item, {
      [styles.callerYellowColor]: +colorId === 1,
      [styles.callerOrangeColor]: +colorId === 0,
      [styles.callerRedColor]: +colorId === -1,
      [styles.callerGreenColor]: +colorId === 2,
      [styles.callerLightGreenColor]: +colorId === 3,
      [styles.callerLightGreenColor]: +colorId === 4,
    });
  };
  const activeCallerFreeClassnames = (colorId) => {
    return classNames(styles.free__button, {
      [styles.callerFreeYellowColor]: +colorId === 1,
      [styles.callerFreeOrangeColor]: +colorId === 0,
      [styles.callerFreeRedColor]: +colorId === -1,
      [styles.callerFreeGreenColor]: +colorId === 2,
      [styles.callerFreeLightGreenColor]: +colorId === 3,
      [styles.callerFreeLightGreenColor]: +colorId === 4,
    });
  };
  return (
    <>
      {caller ? (
        <>
          <li
            onClick={() => {
              setIsOpen(!isOpen);
              setModal("appointment");
            }}
            key={dayIndex}
            className={activeCallerClassnames(colorId)}
          >
            {`${data}:00`}
            <div className={activeCallerFreeClassnames(colorId)}>{colorId}</div>
          </li>
          {modal === "appointment" && (
            <NewAppointment
              isOpen={isOpen}
              time={data}
              weekId={weekId}
              dayIndex={dayIndex}
              handleClose={() => setIsOpen(!isOpen)}
            />
          )}
        </>
      ) : consultation ? (
        colorId === 2 ? (
          <>
            <li className={activeClassnames(colorId)}>
              {`${data}:00`}
              <div className={styles.hover_buttons}>
                <button>start</button>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setModal("consultation");
                  }}
                >
                  info
                </button>
              </div>
            </li>
            {modal === "consultation" && (
              <ConsultationInfo
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
TableItem.defaultProps = {
  colorId: 0,
};
export default TableItem;
