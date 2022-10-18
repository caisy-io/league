import React, {
  CSSProperties,
  FC,
  forwardRef,
  memo,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { STable } from "./styles/STable";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { STh } from "./styles/STh";
import { STr } from "./styles/STr";
import { STd } from "./styles/STd";
import { STbody } from "./styles/STbody";
import { SThead } from "./styles/SThead";
import { STableLoading } from "./styles/STableLoading";
import { IconAngleDown, IconAngleUp } from "../../icons";
import { areEqual, VariableSizeList } from "react-window";
import { Empty } from "../empty";
import debounce from "lodash/debounce";
import { useDimensions } from "../../utils";
import { Spinner } from "../spinner";
import { STableFirstRow } from "./styles/STableFirstRow";

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

export const Table: FC<ITable> = forwardRef(
  (
    {
      dataSource,
      tableOptions,
      globalFilter,
      itemSize,
      isNextPageLoading,
      loadNextPage = () => null,
      hasNextPage,
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
    },
    ref,
  ) => {
    const containerRef = useRef<any>({});
    const headerRef = useRef<any>({});
    const bodyRef = useRef<HTMLDivElement>();
    const firstRowRef = useRef<HTMLDivElement>(null);
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
      if (firstRowRef.current) {
        firstRowRef.current.style.transform = `translateY(-${0 * 0.5}px)`;
        if (tableRowsRef.current) {
          tableRowsRef.current.style.transform = `translateY(${
            firstRowRef.current.offsetHeight > 0 ? firstRowRef.current.offsetHeight - 0 : 0
          }px)`;
        }
        // const height =
        //   scrollOffset * 2 < firstRowRef.current.scrollHeight ? firstRowRef.current.scrollHeight - scrollOffset * 2 : 0;
        // firstRowRef.current.style.height = height + "px";
      }
    }, [tableRowsRef.current,dataSource, firstRowRef.current]);

    const RenderRow = memo(({ data, index, style }: any) => {
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
              return (
                <STd
                  key={`cell-${row.id}-${cellIndex}`}
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
    }, areEqual);

    const debouncedLoadMoreItems = useMemo(() => debounce(loadMoreItems, 300), [loadMoreItems]);

    const triggerLoadMoreItems = () => {
      const table = bodyRef?.current;

      if (!!table && table.scrollTop / (table.scrollHeight - table.clientHeight) > 0.8) {
        if (hasNextPage) {
          debouncedLoadMoreItems();
        }
      }
    };

    const onScroll = ({ scrollOffset }) => {
      if (firstRowRef.current) {
        firstRowRef.current.style.transform = `translateY(-${scrollOffset * 0.5}px)`;
        if (tableRowsRef.current) {
          tableRowsRef.current.style.transform = `translateY(${
            firstRowRef.current.offsetHeight > scrollOffset ? firstRowRef.current.offsetHeight - scrollOffset : 0
          }px)`;
        }
        // const height =
        //   scrollOffset * 2 < firstRowRef.current.scrollHeight ? firstRowRef.current.scrollHeight - scrollOffset * 2 : 0;
        // firstRowRef.current.style.height = height + "px";
      }
      triggerLoadMoreItems();
    };

    const memoItemSize = useMemo(
      () => (item) => (itemSize as (data: any) => number)(item),
      [dataSource, rows, useConditionalItemSize],
    );

    const TableWithRows = useMemo(() => {
      return (
        <VariableSizeList
          onScroll={onScroll}
          outerRef={bodyRef}
          className="league-table"
          height={height}
          itemSize={useConditionalItemSize ? (index) => memoItemSize(rows[index]) : () => itemSize}
          itemData={rows}
          itemCount={dataSource?.length || 0}
          ref={ref}
        >
          {(props) => <RenderRow {...props} />}
        </VariableSizeList>
      );
    }, [rows, dataSource, height, itemSize]);

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
            <>
              {!!renderAsFirstRow ? (
                <>
                  <STableFirstRow ref={firstRowRef}>{renderAsFirstRow}</STableFirstRow>
                  <div ref={tableRowsRef}>{TableWithRows}</div>
                </>
              ) : (
                <>{TableWithRows}</>
              )}
            </>
          ) : empty ? (
            empty
          ) : (
            <Empty type="blueprint" title="" description={emptyMessage || "No data found."} />
          )}
        </STbody>
      </STable>
    );
  },
);
