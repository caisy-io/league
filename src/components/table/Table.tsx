import React, { CSSProperties, FC, forwardRef, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { STable } from "./styles/STable";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { STh } from "./styles/STh";
import { STr } from "./styles/STr";
import { STd } from "./styles/STd";
import { STbody } from "./styles/STbody";
import { SThead } from "./styles/SThead";
import { STableLoading } from "./styles/STableLoading";
import { IconAngleDown, IconAngleUp } from "../../icons";
import { FixedSizeList } from "react-window";
import { Empty } from "../empty/Empty";
import debounce from "lodash/debounce";
import { useDimensions } from "../../utils";
import { Spinner } from "../spinner";

export interface IColumn {
  header: ReactNode;
  key: string;
  defaultCanSort?: boolean;
  renderItem?: (cellValue: any, index: number) => JSX.Element;
  style?: CSSProperties;
}

interface ITable {
  columns: IColumn[];
  dataSource: any;
  globalFilter?: string;
  itemSize: number;
  isNextPageLoading?: boolean;
  loadNextPage?: () => Promise<void>;
  hasNextPage?: boolean;
  loading?: boolean;
  emptyMessage?: string;
  style?: CSSProperties;
  rowStyle?: CSSProperties;
  onRowClick?: (payload: any) => void;
  tableOptions?: any;
  onHeaderClick?: (column: any) => Promise<void>;
}

export const Table: FC<any> = forwardRef(
  (
    {
      dataSource,
      tableOptions,
      globalFilter,
      itemSize,
      isNextPageLoading,
      loadNextPage,
      hasNextPage,
      loading,
      emptyMessage,
      style,
      rowStyle,
      onRowClick,
      onHeaderClick,
      columns,
    },
    ref,
  ) => {
    const containerRef = useRef<any>({});
    const headerRef = useRef<any>({});
    const bodyRef = useRef<HTMLDivElement>();
    const [innerColumns, setColumns] = useState<any[]>([]);

    const { height: containerHeight } = useDimensions(containerRef);
    const { height: headerHeight } = useDimensions(headerRef);
    const height = containerHeight - headerHeight;

    useEffect(() => {
      columns &&
        setColumns(
          columns.map((column) => {
            return !!column.renderItem
              ? {
                  Header: column.header,
                  accessor: column.key,
                  Cell: (cellProps) => (column.renderItem as any)(cellProps.cell.value, cellProps.cell.row.index),
                  defaultCanSort: column.defaultCanSort,
                  style: column.style,
                }
              : {
                  Header: column.header,
                  accessor: column.key,
                  defaultCanSort: column.defaultCanSort,
                  style: column.style,
                };
          }),
        );
    }, [columns]);

    // Only load 1 page of items at a time.
    // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
    const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

    // Every row is loaded except for our loading indicator row.
    // const isItemLoaded = (index) => !props.hasNextPage || index < props.dataSource.length;
    if (!dataSource) {
      return null;
    }

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setGlobalFilter } = useTable(
      {
        columns: innerColumns,
        data: dataSource,
        ...(tableOptions ? tableOptions : {}),
      },
      useGlobalFilter,
      useSortBy,
    );

    useEffect(() => {
      setGlobalFilter(globalFilter);
    }, [globalFilter]);

    const RenderRow = useCallback(
      ({ index, style }) => {
        const row = rows[index];
        if (row) {
          prepareRow(row);
          return (
            <STr
              onClick={() => (!!onRowClick ? onRowClick(row) : () => {})}
              key={index}
              {...row.getRowProps({
                style: { ...style, rowStyle },
              })}
            >
              {row.cells.map((cell, cellIndex) => {
                return (
                  <STd
                    key={cellIndex}
                    style={{ textOverflow: "ellipsis", overflow: "hidden", display: "block", ...cell?.value?.style }}
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </STd>
                );
              })}
            </STr>
          );
        }
        return null;
      },
      [prepareRow, rows],
    );

    const triggerLoadMoreItems = () => {
      const table = bodyRef?.current;
      if (!!table && table.scrollTop / (table.scrollHeight - table.clientHeight) > 0.8) {
        hasNextPage && (loadMoreItems as any)();
      }
    };

    const onScroll = debounce(() => triggerLoadMoreItems(), 160);

    return (
      <STable ref={containerRef} style={style} {...getTableProps()}>
        <SThead ref={headerRef}>
          {headerGroups.map((headerGroup, headerIndex) => (
            <STr style={{ ...rowStyle }} key={headerIndex} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, columnIndex) => {
                return (
                  <STh
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    onClick={() => onHeaderClick && onHeaderClick(column)}
                    key={columnIndex}
                    style={{ ...column.style }}
                  >
                    {column.render("Header")}
                    {column.defaultCanSort !== false && column.isSorted ? (
                      column.isSortedDesc == "DESC" ? (
                        <IconAngleDown />
                      ) : (
                        <IconAngleUp />
                      )
                    ) : null}
                  </STh>
                );
              })}
            </STr>
          ))}
        </SThead>
        <STbody {...getTableBodyProps()}>
          {loading ? (
            <STableLoading height={height}>
              <Spinner />
            </STableLoading>
          ) : dataSource?.length ? (
            <FixedSizeList
              onScroll={onScroll}
              outerRef={bodyRef}
              className="league-table"
              height={height}
              itemSize={itemSize}
              itemCount={dataSource?.length || 0}
              ref={ref}
            >
              {RenderRow}
            </FixedSizeList>
          ) : (
            <Empty type="blueprint" title="" description={emptyMessage || "No data found."} />
          )}
        </STbody>
      </STable>
    );
  },
);
