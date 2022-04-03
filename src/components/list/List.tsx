import React, { forwardRef } from "react";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { SList } from "./styles/SList";

interface IList<T> {
  dataSource: T[];
  renderItem: (payload: T) => React.ReactNode;
  renderLoadingItem: () => React.ReactNode;
  itemSize: number;
  hasNextPage?: boolean;
  isNextPageLoading?: boolean;
  height: number;
  width?: number;
  loadNextPage?: (payload: any) => Promise<void>;
}

export const List = forwardRef<any, IList<any>>(({ ...props }, forRef) => {
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const itemCount = props.hasNextPage ? props.dataSource.length + 1 : props.dataSource.length;
  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = props.isNextPageLoading ? () => {} : props.loadNextPage;

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = (index) => !props.hasNextPage || index < props.dataSource.length;

  const Item = ({ index, style }) => {
    let content;
    if (!isItemLoaded(index)) {
      content = props.renderLoadingItem();
    } else {
      content = props.renderItem(props.dataSource[index]);
    }

    return <div style={style}>{content}</div>;
  };

  return (
    <SList className="scroll-container">
      <InfiniteLoader isItemLoaded={isItemLoaded} itemCount={itemCount} loadMoreItems={loadMoreItems} ref={forRef}>
        {({ onItemsRendered, ref }) => (
          <FixedSizeList
            height={props.height}
            itemCount={itemCount}
            itemSize={props.itemSize}
            onItemsRendered={onItemsRendered}
            ref={ref}
            width={props.width}
          >
            {Item}
          </FixedSizeList>
        )}
      </InfiniteLoader>
    </SList>
  );
});
