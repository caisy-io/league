import React, { forwardRef, useEffect } from "react";
import { SList } from "./styles/SList";
import { Virtuoso } from "react-virtuoso";

interface IList<T> {
  dataSource: T[];
  renderItem: (payload: T, index?: number) => React.ReactNode;
  renderLoadingItem: () => React.ReactNode;
  itemSize: number;
  hasNextPage?: boolean;
  isNextPageLoading?: boolean;
  height: number;
  width?: number;
  loadNextPage?: (payload: any) => Promise<void>;
  scrollToIndex?: number;
}

export const List = forwardRef<any, IList<any>>(({ scrollToIndex, ...props }, forRef) => {
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = props.isNextPageLoading ? () => {} : props.loadNextPage;

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = (index) => !props.hasNextPage || index < props.dataSource.length;
  // console.log(isItemLoaded());

  useEffect(() => {
    if (Number.isInteger(scrollToIndex)) {
      (forRef as any).current.scrollToIndex({
        index: scrollToIndex,
        align: "center",
        behavior: "auto",
      });
    }
  }, [scrollToIndex]);

  return (
    <SList className="scroll-container">
      <Virtuoso
        height={props.height}
        style={{ height: props.height, minHeight: props.height }}
        width={props.width}
        endReached={loadMoreItems}
        ref={forRef}
        useWindowScroll
        data={props.dataSource}
        itemContent={(index, row) => {
          let content;
          if (!isItemLoaded(index)) {
            content = props.renderLoadingItem();
          } else {
            content = props.renderItem(row, index);
          }

          return <div>{content}</div>;
        }}
      />
    </SList>
  );
});
