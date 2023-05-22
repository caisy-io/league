import React, { FC, memo } from "react";
import { SJustifiedImageGrid } from "./styles/SJustifiedImageGrid";
import { VariableSizeList, areEqual } from "react-window";
import { AssetImageCard } from "../asset-image-card";
import { generateRows } from "./generateRows";
import { SJustifiedImageGridCell } from "./styles/SJustifiedImageGridCell";
import { IJustifiedImageGrid, IJustifiedImageGridConfigOverwrite } from "./types";
import { SJustifiedImageGridRow } from "./styles/SJustifiedImageGridRow";
import InfiniteLoader from "react-window-infinite-loader";
import { IRow, IJustifiedImageGridConfig } from "./types";
import { LazyImage } from "./LazyImage";

const Row: React.FC<{
  data: { rows: IRow[]; config: IJustifiedImageGridConfig };
  index: number;
  style: React.CSSProperties;
}> = memo(({ data: { rows, config }, index, style }) => {
  const currRow = rows[index];
  const rowImages = currRow.images;

  return (
    <div style={style}>
      <SJustifiedImageGridRow style={index == 0 ? { paddingTop: "16px" } : {}}>
        {rowImages.map((image, i) => {
          return (
            <SJustifiedImageGridCell
              key={"ci_" + image.id}
              style={{
                width: image.renderedWidth,
                height: image.renderedHeight + config.imageLabelHeight,
                marginRight: i < rowImages.length - 1 ? config.paddingBetweenImages : 0,
              }}
            >
              <AssetImageCard
                key={"ai_" + image.id}
                skeleton={currRow.__loading}
                image={
                  <LazyImage
                    config={config}
                    skeleton={currRow.__loading}
                    key={"li_" + image.id}
                    src={image.src}
                    label={image.label}
                    blurHash={image.blurHash}
                  />
                }
                labelText={image.title ?? config.imageTitleFallback ?? ""} // Replace with your actual label text
              />
            </SJustifiedImageGridCell>
          );
        })}
      </SJustifiedImageGridRow>
    </div>
  );
}, areEqual);

export const JustifiedImageGrid: FC<IJustifiedImageGrid> = ({
  images,
  config,
  totalCount,
  scrollToIndex,
  loadNextPage,
}) => {
  const infiniteLoaderRef = React.useRef<InfiniteLoader>(null);
  const loadingRef = React.useRef<boolean>(false);
  const [loadingNextPage, setLoadingNextPage] = React.useState<boolean>(false);
  const rowConfigs = generateRows(images, totalCount, config);

  if (loadingNextPage && rowConfigs.length > 0 && images.length !== totalCount) {
    rowConfigs[rowConfigs.length - 1].__loading = true;
  }

  const isItemLoaded = (index: number) => {
    // console.log(` isItemLoaded index`, index);
    return rowConfigs[index];
  };
  const loadMoreItems = (startIndex: number, stopIndex: number) => {
    if (!loadingRef.current) {
      console.log(` loadMoreItems`, startIndex, stopIndex);
      loadingRef.current = true;
      loadNextPage().then(() => {
        loadingRef.current = false;
        setLoadingNextPage(false);
      });
      setLoadingNextPage(true);
    }
  };

  React.useEffect(() => {
    if (Number.isInteger(scrollToIndex)) {
      setTimeout(() => {
        (infiniteLoaderRef as React.MutableRefObject<any>)?.current?._listRef.scrollToItem(scrollToIndex, "smart");
      }, 0);
    }
  }, [scrollToIndex]);

  return (
    <SJustifiedImageGrid style={{ height: config.scrollViewHeight + config.paddingAroundGrid * 2 }}>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={totalCount}
        loadMoreItems={loadMoreItems}
        ref={infiniteLoaderRef}
      >
        {({ onItemsRendered, ref }) => (
          <VariableSizeList
            onItemsRendered={onItemsRendered}
            ref={ref}
            height={config.scrollViewHeight} // For instance.
            itemData={{ config, rows: rowConfigs }}
            itemCount={rowConfigs.length}
            itemSize={(index) => rowConfigs[index].rowHeight}
            width={config.totalWidthOfView + config.paddingAroundGrid * 2}
          >
            {Row}
          </VariableSizeList>
        )}
      </InfiniteLoader>
    </SJustifiedImageGrid>
  );
};
