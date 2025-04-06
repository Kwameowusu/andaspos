
import clsx from "clsx";
import React from "react";
import styles from "./CommonButton.module.css";

export type CommonButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isFullwidth?: boolean;
  isCircle?: boolean;
  size?: "small" | "large";
  variants?: "filled" | "tonal" | "outlined" | "text";
  responsive?: boolean;
  theme?: "themeGreen" | "themeBlue" | "themeDanger" | "themeGrey";
  noBorder?: boolean;
  rippleColor?: string;
};

export const CommonButton = React.forwardRef<HTMLButtonElement, CommonButtonProps>((props, ref) => {
  const {
    children,
    className,
    noBorder,
    isFullwidth,
    responsive,
    isCircle,
    size = "large",
    variants = "filled",
    theme = "themeBlue",
    rippleColor,
    ...rest
  } = props;

  const classes = clsx([
    styles[theme],
    styles.root,
    {
      [styles.noBorder]: noBorder,
      [styles.isFullwidth]: isFullwidth,
      [styles.responsive]: responsive,
      [styles.isCircle]: isCircle,
    },
    styles[size],
    styles[variants],
    className,
  ]);
  const buttonProps = { effect: "ripple" };

  return (
    <>
      <button className={classes} {...rest} ref={ref}>
        <span
          className={styles.clickPad}
          {...buttonProps}

        ></span>
        {children}
      </button>
    </>
  );
});
