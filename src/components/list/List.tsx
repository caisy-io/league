import React from "react";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { SListItemLoading } from "../list-item-legacy/styles/SListItemLoading";
import { SList } from "./styles/SList";
import { SListHeaderContainer } from "./styles/SListHeaderContainer";
import { SListWrapper } from "./styles/SListWrapper";

interface IList {
  header?: React.ReactNode;
  dataSource: any[];
  renderItem: (payload: any) => React.ReactNode;
  itemSize: number;
  hasNextPage?: boolean;
  isNextPageLoading?: boolean;
  height: number;
  width?: number;
  loadNextPage?: (payload: any) => Promise<void>;
}

export const List: React.FC<IList> = ({ ...props }) => {
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
      content = <SListItemLoading>Loading...</SListItemLoading>;
    } else {
      content = props.renderItem(props.dataSource[index]);
    }

    return <div style={style}>{content}</div>;
  };

  return (
    <SListWrapper>
      {props.header && <SListHeaderContainer>{props.header}</SListHeaderContainer>}
      <SList className="scroll-container">
        <InfiniteLoader isItemLoaded={isItemLoaded} itemCount={itemCount} loadMoreItems={loadMoreItems}>
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
    </SListWrapper>
  );
};
