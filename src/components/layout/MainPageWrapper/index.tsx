import React, { HTMLAttributes } from "react";
import styles from "./MainPageWrapper.module.css";

export type MainPageWrapperProps = HTMLAttributes<HTMLDivElement>;

export const MainPageWrapper = React.forwardRef<HTMLDivElement, MainPageWrapperProps>(
  ({ children, ...props }, ref) => {
    return (
      <div className={styles.root} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);
