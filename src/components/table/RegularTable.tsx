import React, { FC, forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { STable } from "./styles/STable";
import { STh } from "./styles/STh";
import { STr } from "./styles/STr";
import { STd } from "./styles/STd";
import { STbody } from "./styles/STbody";
import { SThead } from "./styles/SThead";
import { STableLoading } from "./styles/STableLoading";
import { Empty } from "../empty";
import debounce from "lodash/debounce";
import { useDimensions } from "../../utils";
import { Spinner } from "../spinner";
import { Virtuoso } from "react-virtuoso";
import { ITable } from "./Table";

export const RegularTable: FC<ITable> = forwardRef(
  (
    {
      dataSource,
      isNextPageLoading,
      loadNextPage = () => null,
      loading,
      emptyMessage,
      style,
      rowStyle,
      onRowClick,
      columns,
      renderAsFirstRow,
      empty,
      onRowHover,
    },
    ref,
  ) => {
    const containerRef = useRef<any>({});
    const headerRef = useRef<any>({});
    const firstRowRef = useRef<HTMLDivElement>(null);
    const [scrollerRef, setScrollerRef] = useState<HTMLElement | null>(null);
    const [rowWidth, setRowWidth] = useState<number>();
    const tableRowsRef = useRef<HTMLDivElement>(null);

    const { height: containerHeight } = useDimensions(containerRef);
    const { height: headerHeight } = useDimensions(headerRef);
    const height = containerHeight - headerHeight;

    // Only load 1 page of items at a time.
    // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
    const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

    // Every row is loaded except for our loading indicator row.
    // const isItemLoaded = (index) => !props.hasNextPage || index < props.dataSource.length;
    if (!dataSource) {
      return null;
    }

    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
      if (tableRowsRef.current && firstRowRef.current && !initialized) {
        setInitialized(dataSource.length > 0 && !loading && !isNextPageLoading);
        tableRowsRef.current.style.transform = `translateY(${
          firstRowRef.current.offsetHeight > 0 ? firstRowRef.current.offsetHeight : 0
        }px)`;
      }
    }, [tableRowsRef.current, renderAsFirstRow, dataSource, firstRowRef.current]);

    useEffect(() => {
      if (tableRowsRef.current && firstRowRef.current) {
        tableRowsRef.current.style.transform = `translateY(${
          firstRowRef.current.offsetHeight > 0 ? firstRowRef.current.offsetHeight : 0
        }px)`;
      }
    }, [dataSource?.length]);

    useEffect(() => {
      setRowWidth((scrollerRef as any)?.firstChild?.offsetWidth || "100%");
    }, [scrollerRef, dataSource?.length, (scrollerRef as any)?.firstChild?.offsetWidth]);

    const RenderRow = ({ index }: { index: number }) => {
      const row = dataSource[index];

      return (
        <STr
          onClick={() => (!!onRowClick ? onRowClick(row) : () => {})}
          onMouseEnter={() => onRowHover?.(row)}
          key={`row-${row.id}`}
        >
          {columns.map(({ key, renderItem }, keyIndex) => {
            const header = document.getElementById(`header-${keyIndex}`);
            const headerWidth = header?.offsetWidth || 0;
            const isLastCell = keyIndex === columns.length - 1;

            const headerStyle = {
              width: headerWidth,
              minWidth: headerWidth,
            };

            return (
              <STd
                key={key}
                style={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  display: "block",
                  ...(!isLastCell ? headerStyle : {}),
                  ...row?.[key]?.style,
                }}
              >
                {renderItem?.(row[key], index) || row[key]}
              </STd>
            );
          })}
        </STr>
      );
    };

    const debouncedLoadMoreItems = useMemo(() => debounce(loadMoreItems, 300), [loadMoreItems]);

    const innerHeaderRef = useRef<HTMLDivElement>(null);

    const TableWithRows = (
      <Virtuoso
        components={{
          Header: () => <div style={{ width: "auto" }}>{renderAsFirstRow}</div>,
        }}
        totalCount={dataSource.length}
        className="league-table"
        height={height}
        style={{ minHeight: height }}
        endReached={debouncedLoadMoreItems}
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
        itemContent={(index) => {
          return <RenderRow index={index} />;
        }}
      />
    );

    return (
      <STable
        style={{
          ...style,
        }}
        ref={containerRef}
      >
        <SThead
          style={{
            height: innerHeaderRef?.current?.offsetHeight,
          }}
          ref={headerRef}
        >
          <STr ref={innerHeaderRef} style={{ ...rowStyle, position: "absolute", width: "100%" }}>
            {columns.map((column, columnIndex) => {
              const id = `header-${columnIndex}`;

              return (
                <STh
                  key={columnIndex}
                  id={id}
                  style={{
                    ...column.style,
                  }}
                >
                  {column.header}
                </STh>
              );
            })}
          </STr>
        </SThead>
        <STbody>
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
