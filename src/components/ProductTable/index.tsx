import { flexRender, getCoreRowModel, useReactTable, FilterFn, ColumnDef, getFilteredRowModel } from "@tanstack/react-table";
import { ComponentProps, useMemo } from "react";
import { rankItem } from "@tanstack/match-sorter-utils";
import styles from "./ProductTable.module.css";
import { Product } from "../types";
import { PlusIcon } from "../../assets/PlusIcon";
import { toast } from "sonner";

// const { addLightOpacity } = useHexes();

export type ProductTableProps = {
  productList: Product[];
  setGlobalFilter: (arg: string) => void;
  globalFilter: string
} & ComponentProps<"div">;

const fuzzyFilter: FilterFn<Product> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({ itemRank });
  return itemRank.passed;
};
export const ProductTable = ({ children, productList, setGlobalFilter, globalFilter, ...props }: ProductTableProps) => {

  const columns: ColumnDef<Product>[] = useMemo(() => {
    return [
      {
        accessorKey: 'id',
        header: 'No.',
        cell: ({ getValue }) => {
          const value = getValue() as number;
          return `${value}.`;
        },
      },
      {
        accessorKey: 'name',
        header: 'Product Name',
        cell: ({ getValue }) => {
          const value = getValue() as string;
          return value;
        },
      },
      {
        accessorKey: 'category',
        header: 'Category',
        cell: ({ getValue }) => {
          const value = getValue() as string;
          return value;
        },
      },
      {
        accessorKey: 'quantity',
        header: 'Quantity',
        cell: ({ getValue }) => {
          const value = getValue() as number;
          return value.toLocaleString();
        },
      },
      {
        id: 'action',
        header: '',
        cell: () => (
          <div
            onClick={() => {
              toast.success('Product added to cart', {
                position: 'top-right',
              });
            }}
            className={styles.addToCartButton}
          >
            <PlusIcon />
          </div>
        ),
      },
    ];
  }, []);


  const table = useReactTable({
    data: productList,
    globalFilterFn: fuzzyFilter,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
  });

  const filteredData = table.getFilteredRowModel().rows;

  return (
    <div className={styles.container} {...props}>
      <div className={styles.headerWrapper}>
        {/* <span className={styles.headerName}>USSD Information</span> */}
      </div>
      {children}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className={styles.th} style={{ textWrap: "wrap" }}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr
                key={row.id}
                className={styles.tr}
                style={{
                  backgroundColor: row.getIsSelected()
                    ? ("#000000")
                    : "var(--okw-cover-bg-color)",
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={styles.td} style={{ maxWidth: "40px", textWrap: "wrap" }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
