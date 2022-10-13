import React, { useState } from "react";
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
  hourIndex,
  slotId,
  onClickBtnStart,
  postponed,
  slots,
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
      [styles.callerYellowColor]: +colorId === 2,
      [styles.callerOrangeColor]: +colorId === 1,
      [styles.callerRedColor]: +colorId === 0,
      [styles.callerGreenColor]: +colorId >= 4,
      [styles.callerLightGreenColor]: +colorId === 3,
    });
  };
  const activeCallerFreeClassnames = (colorId) => {
    return classNames(styles.free__button, {
      [styles.callerFreeYellowColor]: +colorId === 2,
      [styles.callerFreeOrangeColor]: +colorId === 1,
      [styles.callerFreeRedColor]: +colorId === 0,
      [styles.callerFreeGreenColor]: +colorId >= 4,
      [styles.callerFreeLightGreenColor]: +colorId === 3,
    });
  };
  return (
    <>
      {caller ? (
        <>
          <li
            onClick={() => {
              if (colorId === 0) return;
              if (!postponed) {
                setIsOpen(!isOpen);
                setModal("appointment");
              } else {
                onClickFn(slots);
              }
            }}
            key={dayIndex}
            className={activeCallerClassnames(colorId)}
          >
            {`${data}:00`}
            <div className={activeCallerFreeClassnames(colorId)}>{colorId}</div>
          </li>
          {modal === "appointment" && !postponed && (
            <NewAppointment
              isOpen={isOpen}
              time={data}
              weekId={weekId}
              dayIndex={dayIndex}
              hourIndex={hourIndex}
              handleClose={() => setIsOpen(!isOpen)}
            />
          )}
        </>
      ) : consultation ? (
        colorId === 4 ? (
          <>
            <li className={activeClassnames(colorId)}>
              {`${data}:00`}
              <div className={styles.hover_buttons}>
                <button type="button" onClick={onClickBtnStart}>
                  start
                </button>
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
                dayIndex={dayIndex}
                hourIndex={hourIndex}
                isOpen={isOpen}
                handleClose={() => setIsOpen(!isOpen)}
                slotId={+slotId}
              />
            )}
          </>
        ) : colorId === 6 || colorId === 7 || colorId === 8 || colorId === 3 ? (
          <>
            <li className={activeClassnames(colorId)}>
              {`${data}:00`}
              <div className={styles.hover_buttons}>
                <button
                  className={styles.only_info_button}
                  type="button"
                  data-modal="consultation"
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
                dayIndex={dayIndex}
                hourIndex={hourIndex}
                slotId={+slotId}
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
