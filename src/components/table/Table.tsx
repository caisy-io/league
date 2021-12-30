import React, { CSSProperties } from "react";
import { STable } from "./styles/STable";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { STh } from "./styles/STh";
import { STr } from "./styles/STr";
import { STd } from "./styles/STd";
import { STbody } from "./styles/STbody";
import { SThead } from "./styles/SThead";
import { STableLoading } from "./styles/STableLoading";
import { IconAngleDown, IconAngleUp, IconLoading } from "../../icons";
import { FixedSizeList } from "react-window";
import { Empty } from "../empty/Empty";
import debounce from "lodash/debounce";
import { useDimensions } from "../../utils";

export interface IColumn {
  header: React.ReactNode;
  key: string;
  defaultCanSort?: boolean;
  renderItem?: (cellValue: any, index: number) => JSX.Element;
  style?: CSSProperties;
}

interface ITable {
  columns: IColumn[];
  dataSource: any;
  globalFilter?: string;
  width?: number;
  itemSize: number;
  isNextPageLoading?: boolean;
  loadNextPage?: () => Promise<void>;
  hasNextPage?: boolean;
  loading?: boolean;
  emptyMessage?: string;
  style?: React.CSSProperties;
  rowStyle?: React.CSSProperties;
  onRowClick?: (payload: any) => void;
  tableOptions?: any;
  onHeaderClick?: (column: any) => Promise<void>;
}

export const Table: React.FC<ITable> = ({ dataSource, tableOptions, ...props }) => {
  const containerRef = React.useRef<any>({});
  const headerRef = React.useRef<any>({});
  const bodyRef = React.useRef<HTMLDivElement>();
  const [columns, setColumns] = React.useState<any[]>([]);

  const { height: containerHeight } = useDimensions(containerRef);
  const { height: headerHeight } = useDimensions(headerRef);
  const height = containerHeight - headerHeight;

  React.useEffect(() => {
    props.columns &&
      setColumns(
        props.columns.map((column) => {
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
  }, [props.columns]);

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = props.isNextPageLoading ? () => {} : props.loadNextPage;

  // Every row is loaded except for our loading indicator row.
  // const isItemLoaded = (index) => !props.hasNextPage || index < props.dataSource.length;
  if (!dataSource) {
    return null;
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setGlobalFilter } = useTable(
    {
      columns,
      data: dataSource,
      ...(tableOptions ? tableOptions : {}),
    },
    useGlobalFilter,
    useSortBy,
  );

  React.useEffect(() => {
    setGlobalFilter(props.globalFilter);
  }, [props.globalFilter]);

  const RenderRow = React.useCallback(
    ({ index, style }) => {
      const row = rows[index];
      if (row) {
        prepareRow(row);
        return (
          <STr
            onClick={() => (!!props.onRowClick ? props.onRowClick(row) : () => {})}
            key={index}
            {...row.getRowProps({
              style: { ...style, ...props.rowStyle },
            })}
          >
            {row.cells.map((cell, cellIndex) => {
              console.log(cell);
              return (
                <STd
                  key={cellIndex}
                  style={{ textOverflow: "ellipsis", overflow: "hidden", display: "block", ...cell.value.style }}
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
    const table = bodyRef.current;
    if (!!table && table.scrollTop / (table.scrollHeight - table.clientHeight) > 0.8) {
      props.hasNextPage && (loadMoreItems as any)();
    }
  };

  const onScroll = debounce(() => triggerLoadMoreItems(), 160);

  return (
    <STable ref={containerRef} style={props.style} {...getTableProps()}>
      <SThead ref={headerRef}>
        {headerGroups.map((headerGroup, headerIndex) => (
          <STr style={{ ...props.rowStyle }} key={headerIndex} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, columnIndex) => {
              console.log(column);
              return (
                <STh
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  onClick={() => props.onHeaderClick && props.onHeaderClick(column)}
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
        {props.loading ? (
          <STableLoading height={height}>
            <IconLoading />
          </STableLoading>
        ) : dataSource?.length ? (
          <FixedSizeList
            onScroll={onScroll}
            outerRef={bodyRef}
            className="league-table"
            height={height}
            itemSize={props.itemSize}
            itemCount={dataSource?.length || 0}
          >
            {RenderRow}
          </FixedSizeList>
        ) : (
          <Empty type="schema" title="" description={props.emptyMessage ? props.emptyMessage : "No data found."} />
        )}
      </STbody>
    </STable>
  );
};
