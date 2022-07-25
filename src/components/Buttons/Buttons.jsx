import React from "react";
import styles from "./Button.module.scss";


export default function Button({
  bottom,
  children,
  width,
  paddingLeft,
  paddingRight,
  bgColor,
  color,
  margin,
  height,
  type,

}) {
  const colorPalette = {
    white: "white",
    black: "#000000",
  };
  const bgColorPalette = {
    white: "white",
    purple: "#6268FF",
    black: "#000000",
  };

  return (
    <button
      style={{
        padding: `10px ${paddingRight}px 10px ${paddingLeft}px`,
        width: width,
        backgroundColor: bgColorPalette[bgColor],
        color: colorPalette[color],
        marginBottom:`${bottom}px`,
        margin: margin,
        height: height,
     
      }}
      className={styles.button}
      type={type ? type : "button"}
    >
      {children}
    </button>
  );
}

// Button.defaultProps = {
//   width: 170,
//   paddingLeft: 30,
//   paddingRight: 30,
//   height: 60,
// };

