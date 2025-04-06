// import { ReactNode } from "react"

import { HTMLAttributes } from "react";
import styles from "./AppWrapper.module.css";
import { Outlet } from "react-router-dom";

export const AppWrapper = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <>
      <div className={styles.root} {...props}>
        <div className={styles.container}><Outlet/></div>
      </div>
    </>
  );
};
