
import { ComponentProps } from "react";
import { CommonInput } from "../../InputFields";

import styles from "./ProductTableFilterToolBar.module.css";

export type ProductFilterToolBarProps = {

  globalFilter: string;
  setGlobalFilter: (arg: string) => void;
} & ComponentProps<"div">;

export const ProductFilterToolBar = ({
  globalFilter,
  setGlobalFilter,

  ...props
}: ProductFilterToolBarProps) => {



  return (
    <>
      <div className={styles.headerWrapper} {...props}>
      
        <div className={styles.searchFilterWrapper}>
          <CommonInput
            size="large"
            isFullwidth
            className={styles.searchInput}
            inputProps={{
              type: "search",
              value: globalFilter ?? "",
              onChange: (e: { target: { value: string; }; }) => setGlobalFilter(e.target.value),
              placeholder: "Search Products...",
            }}
          />
      
        </div>
      </div>


    </>
  );
};
