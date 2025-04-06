import clsx from "clsx";
import { ComponentProps, useRef } from "react";
import styles from "./DateInput.module.css";

export type DateInputProps = ComponentProps<"div"> & {
  inputProps?: ComponentProps<"input">;
  noBorder?: boolean;
  isFullwidth?: boolean;
  theme?: "themeGreen" | "themeGrey" | "themeDanger";
  note?: string;
  error?: string;
  label?: string;
};

export const DateInput = ({
  error,
  note,
  label,
  isFullwidth,
  className,
  theme = "themeGreen",
  noBorder,
  inputProps,
  ...props
}: DateInputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const classes = clsx([
    styles[theme],
    styles.root,
    {
      [styles.noBorder]: noBorder,
      [styles.isFullwidth]: isFullwidth,
    },
    className,
  ]);

  return (
    <div className={classes} {...props}>
      {label ? <label htmlFor={inputProps?.name}>{label}</label> : null}
      <input {...inputProps} className={clsx([className])} ref={ref} />
      {note ? <span className={styles.note}>{note}</span> : null}
      {error ? <span className={styles.error}>{error}</span> : null}
    </div>
  );
};
