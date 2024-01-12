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

const Scroller = React.forwardRef(({ style, ...props }: any, ref) => {
  return <div style={{ ...style, width: "auto", minWidth: props.context.containerWidth }} ref={ref} {...props} />;
});

const ListItem = React.forwardRef(({ style, ...props }: any) => {
  return <div style={{ ...style, width: "auto", minWidth: props.context.tableWidth }} {...props} />;
});

export const HorizontallyScrollableTable: FC<ITable> = forwardRef(
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
      tableWidth,
      containerMaxWidth,
      onRowHover,
      hasNextPage,
    },
    ref,
  ) => {
    const containerRef = useRef<any>({});
    const headerRef = useRef<any>({});
    const [scrollerRef, setScrollerRef] = useState<HTMLElement | null>(null);
    const [rowWidth, setRowWidth] = useState<number>();
    const [containerWidth, setContainerWidth] = useState<number | string>("auto");

    const tableRowsRef = useRef<HTMLDivElement>(null);

    const { height: containerHeight } = useDimensions(containerRef);
    const { height: headerHeight } = useDimensions(headerRef);
    const height = containerHeight - headerHeight;

    // Only load 1 page of items at a time.
    // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
    const loadMoreItems = isNextPageLoading || hasNextPage === false ? () => {} : loadNextPage;

    // Every row is loaded except for our loading indicator row.
    // const isItemLoaded = (index) => !props.hasNextPage || index < props.dataSource.length;
    if (!dataSource) {
      return null;
    }

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

    const onScroll = (e) => {
      const scrollLeft = e?.nativeEvent?.target?.scrollLeft;

      (innerHeaderRef.current as HTMLDivElement).style.left = `-${scrollLeft}px`;
    };

    useEffect(() => {
      if (typeof window === "undefined") return;

      const handleResize = (e) => {
        const windowWidth = e.target.innerWidth;
        const rect = containerRef?.current?.getBoundingClientRect?.();
        const left = rect?.left;
        const right = rect?.right;

        const startToWindow = windowWidth - left;
        const endToWindow = windowWidth - right;
        const maxWidth = windowWidth;

        const containerWidth = Math.max(startToWindow, endToWindow);

        setContainerWidth(Math.min(containerWidth, maxWidth, containerMaxWidth || 999999));
      };

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, [typeof window, containerMaxWidth]);

    useEffect(() => {
      if (!containerMaxWidth) return;

      const windowWidth = window?.innerWidth;
      const rect = containerRef?.current?.getBoundingClientRect?.();
      const left = rect?.left;
      const right = rect?.right;

      const startToWindow = windowWidth - left;
      const endToWindow = windowWidth - right;
      const maxWidth = windowWidth;

      const containerWidth = Math.max(startToWindow, endToWindow, containerMaxWidth);

      setContainerWidth(Math.min(containerWidth, maxWidth));
    }, [containerMaxWidth]);

    const TableWithRows = (
      <Virtuoso
        components={{
          Scroller: Scroller as any,
          Item: ListItem as any,
          Header: () => <div style={{ minWidth: tableWidth, width: "auto" }}>{renderAsFirstRow}</div>,
        }}
        totalCount={dataSource.length}
        context={{
          containerWidth: containerWidth || "auto",
          tableWidth: tableWidth || "auto",
        }}
        onScroll={onScroll}
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
          maxWidth: containerWidth,
        }}
        ref={containerRef}
      >
        <SThead
          style={{
            width: tableWidth,
            maxWidth: containerWidth,
            height: innerHeaderRef?.current?.offsetHeight,
          }}
          ref={headerRef}
        >
          <STr ref={innerHeaderRef} style={{ ...rowStyle, minWidth: tableWidth, position: "absolute", width: "100%" }}>
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
