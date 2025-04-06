import clsx from "clsx";
import React, { ComponentProps } from "react";
import styles from "./TextArea.module.css";

export type TextAreaProps = {
  noBorder?: boolean;
  isFullwidth?: boolean;
  theme?: "themeGreen" | "themeDanger" | "themeGrey";
  inputProps: ComponentProps<"textarea">;
  label?: string;
  error?: string;
  note?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const { noBorder, isFullwidth, theme = "themeGreen", label, note, error, inputProps, ...rest } = props;
  const classes = clsx([
    styles[theme],
    styles.root,
    {
      [styles.noBorder]: noBorder,
      [styles.isFullwidth]: isFullwidth,
    },
    inputProps?.className,
  ]);
  return (
    <>
      <div className={classes} {...rest}>
        {label ? (
          <label htmlFor={inputProps?.name} className={styles.label}>
            {label} {inputProps?.required && <span className={styles.required}>*</span>}
          </label>
        ) : null}

        <div className={styles.inputWrapper}>
          <textarea ref={ref} {...inputProps} />
        </div>
        {note ? <span className={styles.note}>{note}</span> : null}

        {error ? <span className={styles.error}>{error}</span> : null}
      </div>
    </>
  );
});

TextArea.displayName = "TextArea";
