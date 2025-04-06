"use client";

import clsx from "clsx";
import { ComponentProps, forwardRef, useState } from "react";

import styles from "./CommonInput.module.css";
import { EyeCloseIcon } from "../../../assets/EyeCloseIcon";
import { EyeOpenIcon } from "../../../assets/EyeOpenIcon";
import { SearchIcon } from "../../../assets/SearchIcon";
import { TimesIcon } from "../../../assets/TimesIcon";

export type CommonInputProps = ComponentProps<"div"> & {
  inputProps?: ComponentProps<"input">;
  noBorder?: boolean;
  isFullwidth?: boolean;
  theme?: "themeGreen" | "themeGrey" | "themeBlue" | "themeDanger";
  note?: string;
  error?: string;
  label?: string;
  handleClearInput?: () => void;
  size?: "small" | "large";
};

// ✅ Wrap in forwardRef to expose the input ref to the parent
export const CommonInput = forwardRef<HTMLInputElement, CommonInputProps>(
  (
    {
      error,
      note,
      label,
      isFullwidth,
      className,
      theme = "themeBlue",
      noBorder,
      handleClearInput,
      inputProps,
      size = "large",
      ...props
    },
    ref
  ) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const classes = clsx([
      styles[theme],
      styles.root,
      {
        [styles.isFullwidth]: isFullwidth,
      },
      className,
    ]);

    const classes2 = clsx([
      styles.inputWrapper,
      {
        [styles.noBorder]: noBorder,
      },
      styles[size],
      className,
    ]);

    const inputType =
      inputProps?.type === "password" ? (passwordVisible ? "text" : "password") : inputProps?.type;

    return (
      <div className={classes} {...props}>
        {label && (
          <label htmlFor={inputProps?.name} className={styles.label}>
            {label} {inputProps?.required && <span className={styles.required}>*</span>}
          </label>
        )}
        {note && <span className={styles.note}>{note}</span>}
        <div className={classes2}>
          {/* ✅ Use ref directly on input */}
          <input className={clsx([className])} ref={ref} {...inputProps} type={inputType} />

          {inputProps?.type === "password" && (
            <span onClick={() => setPasswordVisible(!passwordVisible)} className={styles.passwordVisible}>
              {!passwordVisible ? <EyeOpenIcon /> : <EyeCloseIcon />}
            </span>
          )}

          {["text", "email"].includes(inputProps?.type || "") && (
            <span onClick={handleClearInput} className={styles.closeTimesIcon}>
              <TimesIcon />
            </span>
          )}

          {inputProps?.type === "search" && (
            <>
              <span className={styles.searchIcon}>
                <SearchIcon />
              </span>
              <span onClick={handleClearInput} className={styles.closeTimesIcon}>
                <TimesIcon />
              </span>
            </>
          )}
        </div>

        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
);

// ✅ Set display name for debugging
CommonInput.displayName = "CommonInput";
