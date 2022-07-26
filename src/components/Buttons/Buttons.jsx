import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

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
  style
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
        marginBottom: `${bottom}px`,
        margin: margin,
        height: height,
      }}
      className={classNames(styles.button, style)}
      type={type ? type : "button"}
    >
      {children}
    </button>
  );
}

