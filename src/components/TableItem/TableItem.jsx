import React, {useState} from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import styles from './TableItem.module.scss';
import ConsultationInfo from "../../components/modals/ConsultationInfo/ConsultationInfo";


const TableItem = ({data, colorId, onClickFn, consultation}) => {
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
    return (
      <>
        {consultation ? (
          colorId === 2 ? (
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
                      setModal("consulta");
                    }}
                  >
                    info
                  </button>
                </div>
              </li>

              {modal === "consulta" && (
                <ConsultationInfo
                  isOpen={isOpen}
                  handleClose={() => setIsOpen(!isOpen)}
                />
              )}
            </>
          ) : (
            <li
              className={activeClassnames(colorId)}
            >{`${data}:00`}</li>
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