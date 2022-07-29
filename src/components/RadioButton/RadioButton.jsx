import React from "react";
import PropTypes from 'prop-types';
import styles from './RadioButton.module.scss';


const RadioButton = ({title, buttonType, style, styleActive, styleColor, onChangeType}) => {
    return (
      <label
        className={`${style} ${styleColor} ${
          buttonType === title && styleActive
        }`}
      >
        {title}
        <input
          checked={buttonType === title}
          value={buttonType}
          onChange={onChangeType}
          className={styles.input}
          type="radio"
          name={title}
        />
      </label>
    );
};

RadioButton.propTypes = {
  buttonType: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  styleColor: PropTypes.string.isRequired,
  styleActive: PropTypes.string.isRequired,
  onChangeType: PropTypes.func.isRequired,
};

export default RadioButton;