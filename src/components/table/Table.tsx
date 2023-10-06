import React, { CSSProperties, FC, forwardRef, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { STable } from "./styles/STable";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { STh } from "./styles/STh";
import { STr } from "./styles/STr";
import { STd } from "./styles/STd";
import { STbody } from "./styles/STbody";
import { SThead } from "./styles/SThead";
import { STableLoading } from "./styles/STableLoading";
import { IconAngleDown, IconAngleUp } from "../../icons";
import { Empty } from "../empty";
import debounce from "lodash/debounce";
import { useDimensions } from "../../utils";
import { Spinner } from "../spinner";
import { STableFirstRow } from "./styles/STableFirstRow";
import { Virtuoso } from "react-virtuoso";

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
  globalFilter?: string;
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
  renderAsFirstRow?: JSX.Element;
  ref?: any;
  empty?: ReactNode;
  tableMinWidth?: number | string;
  tableMaxHeight?: number | string;
  containerWidth?: number | string;
  tableWidth?: number | string;
}

interface ITableWithItemSize extends ITableBase {
  itemSize: number;
  useConditionalItemSize?: false;
}

interface ITableWithDynamicItemSize extends ITableBase {
  itemSize: (data: any) => number;
  useConditionalItemSize: true;
}

type ITable = ITableWithItemSize | ITableWithDynamicItemSize;

const Scroller = React.forwardRef(({ style, ...props }: any, ref) => {
  return <div style={{ ...style, width: "auto", minWidth: props.context.containerWidth }} ref={ref} {...props} />;
});

const ListItem = React.forwardRef(({ style, ...props }: any) => {
  return <div style={{ ...style, width: "auto", minWidth: props.context.tableWidth }} {...props} />;
});

export const Table: FC<ITable> = forwardRef(
  (
    {
      dataSource,
      tableOptions,
      globalFilter,
      itemSize,
      isNextPageLoading,
      loadNextPage = () => null,
      loading,
      emptyMessage,
      style,
      rowStyle,
      onRowClick,
      onHeaderClick,
      columns,
      renderAsFirstRow,
      empty,
      useConditionalItemSize,
      containerWidth,
      tableWidth,
    },
    ref,
  ) => {
    const containerRef = useRef<any>({});
    const headerRef = useRef<any>({});
    const [scrollerRef, setScrollerRef] = useState<HTMLElement | null>(null);
    const [rowWidth, setRowWidth] = useState<number>();
    const tableRowsRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
      setRowWidth((scrollerRef as any)?.firstChild?.offsetWidth || "100%");
    }, [scrollerRef, dataSource?.length, (scrollerRef as any)?.firstChild?.offsetWidth]);

    const RenderRow = ({ data, index, style }: any) => {
      const row = data[index];
      if (row) {
        prepareRow(row);

        return (
          <STr
            onClick={() => (!!onRowClick ? onRowClick(row) : () => {})}
            key={`row-${row.id}`}
            {...row.getRowProps({
              style: { ...style, rowStyle },
            })}
          >
            {row.cells.map((cell, cellIndex) => {
              const header = document.getElementById(`header-${cellIndex}`);
              const headerWidth = header?.offsetWidth || 0;

              const headerStyle = {
                width: headerWidth,
                minWidth: headerWidth,
              };

              const isLastCell = cellIndex === row.cells.length - 1;

              return (
                <STd
                  key={`cell-${row.id}-${cellIndex}`}
                  id={`cell-${cellIndex}`}
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    display: "block",
                    ...(!isLastCell ? headerStyle : {}),
                    ...cell?.value?.style,
                  }}
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
    };

    const debouncedLoadMoreItems = useMemo(() => debounce(loadMoreItems, 300), [loadMoreItems]);

    const onScroll = (e) => {
      const scrollLeft = e?.nativeEvent?.target?.scrollLeft;

      headerRef.current.scrollLeft = scrollLeft;
    };

    const memoItemSize = useMemo(
      () => (item) => (itemSize as (data: any) => number)(item),
      [dataSource, rows, useConditionalItemSize],
    );

    const TableWithRows = (
      <Virtuoso
        components={{
          Scroller: Scroller as any,
          Item: ListItem as any,
          Header: () => (
            <div style={{ position: "sticky", minWidth: tableWidth, width: "auto" }}>{renderAsFirstRow}</div>
          ),
        }}
        context={{
          containerWidth,
          tableWidth,
        }}
        onScroll={onScroll}
        className="league-table"
        height={height}
        style={{ minHeight: height }}
        endReached={debouncedLoadMoreItems}
        data={rows}
        ref={ref as any}
        scrollerRef={setScrollerRef as any}
        totalListHeightChanged={(height) => {
          if (
            height > (scrollerRef as any)?.offsetHeight &&
            (scrollerRef as any)?.firstChild?.offsetWidth === rowWidth
          ) {
            setRowWidth((scrollerRef as any)?.firstChild?.offsetWidth - 15);
          } else {
            setRowWidth((scrollerRef as any)?.firstChild?.offsetWidth);
          }
        }}
        itemContent={(index, row) => {
          return (
            <RenderRow
              data={rows}
              index={index}
              style={{
                height: useConditionalItemSize ? memoItemSize(row) : itemSize,
              }}
            />
          );
        }}
      />
    );

    return (
      <STable
        style={{
          ...style,
        }}
        ref={containerRef}
        {...getTableProps()}
      >
        <SThead style={{ width: containerWidth, overflow: "hidden" }} ref={headerRef}>
          {headerGroups.map((headerGroup, headerIndex) => (
            <STr style={{ ...rowStyle, width: tableWidth }} key={headerIndex} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, columnIndex) => {
                const id = `header-${columnIndex}`;

                return (
                  <STh
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    onClick={() => onHeaderClick && onHeaderClick(column)}
                    key={columnIndex}
                    id={id}
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
          ) : (
            <>
              {dataSource?.length ? (
                <>{!!renderAsFirstRow ? <div ref={tableRowsRef}>{TableWithRows}</div> : <>{TableWithRows}</>}</>
              ) : empty ? (
                empty
              ) : (
                <Empty type="blueprint" title="" description={emptyMessage || "No data found."} />
              )}
            </>
          )}
        </STbody>
      </STable>
    );
  },
);
