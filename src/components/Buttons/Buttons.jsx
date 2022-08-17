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
  style,
  onclick,
  disabled,
}) {
  const colorPalette = {
    white: "white",
    black: "#000000",
  };
  const bgColorPalette = {
    white: "white",
    purple: "#6268FF",
    black: "#000000",
    grayColor: "rgb(240, 240, 240)",
    orangeColor: "rgb(255, 235, 163)",
    greenColor: "rgb(188, 255, 165)",
  };

  return (
    <button
      disabled={disabled}
      style={{
        padding: `10px ${paddingRight}px 10px ${paddingLeft}px`,
        width: width,
        backgroundColor: bgColorPalette[bgColor],
        color: colorPalette[color],
        marginBottom: `${bottom}px`,
        margin: margin,
        height: height,
      }}
      className={classNames(style, styles.button)}
      type={type ? type : "button"}
      onClick={onclick}
    >
      {children}
    </button>
  );
}
