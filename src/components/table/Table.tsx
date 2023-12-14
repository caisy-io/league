import React, { CSSProperties, FC, forwardRef, ReactNode } from "react";
import { HorizontallyScrollableTable } from "./HorizontallyScrollableTable";
import { RegularTable } from "./RegularTable";

export interface IColumn {
  header: ReactNode;
  key: string;
  defaultCanSort?: boolean;
  renderItem?: (cellValue: any, index: number) => JSX.Element;
  style?: CSSProperties;
}

interface ITableBase {
  columns: IColumn[];
  dataSource: any;
  isNextPageLoading?: boolean;
  loadNextPage?: () => Promise<void>;
  loading?: boolean;
  emptyMessage?: string;
  style?: CSSProperties;
  rowStyle?: CSSProperties;
  onRowClick?: (payload: any) => void;
  renderAsFirstRow?: JSX.Element;
  ref?: any;
  empty?: ReactNode;
  tableWidth?: number | string;
  containerMaxWidth?: number;
  isHorizontallyScrollable?: boolean;
}

interface ITableWithItemSize extends ITableBase {
  itemSize: number;
  useConditionalItemSize?: false;
}

interface ITableWithDynamicItemSize extends ITableBase {
  itemSize: (data: any) => number;
  useConditionalItemSize: true;
}

export type ITable = ITableWithItemSize | ITableWithDynamicItemSize;

export const Table: FC<ITable> = forwardRef(({ isHorizontallyScrollable, ...props }, ref) => {
  return (
    <>
      {isHorizontallyScrollable ? (
        <HorizontallyScrollableTable ref={ref} {...props} />
      ) : (
        <RegularTable ref={ref} {...props} />
      )}
    </>
  );
});
