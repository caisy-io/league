import React, { FC, memo } from "react";
import { SJustifiedImageGrid } from "./styles/SJustifiedImageGrid";
import { VariableSizeList, areEqual } from "react-window";
import { AssetImageCard } from "../asset-image-card";
import { generateRows } from "./generateRows";
import { SJustifiedImageGridCell } from "./styles/SJustifiedImageGridCell";
import {
  AVG_IMAGE_WIDTH,
  AVG_ROW_HEIGHT,
  GROUP_SIZE,
  IMAGE_LABEL_HEIGHT,
  MAX_IMAGES_PER_ROW,
  MAX_WIDTH_OF_IMAGE,
  MIN_IMAGES_PER_ROW,
  MIN_WIDTH_OF_IMAGE,
  PADDING_AROUND_GRID,
  PADDING_BETWEEN_IMAGES,
  PADDING_BETWEEN_ROWS,
  ROW_MAX_HEIGHT,
  ROW_MIN_HEIGHT,
  SCROLL_VIEW_HEIGHT,
  TOTAL_WIDTH_OF_VIEW,
} from "./constants";
import { IJustifiedImageGrid, IJustifiedImageGridConfigOverwrite } from "./types";
import { SJustifiedImageGridRow } from "./styles/SJustifiedImageGridRow";
import InfiniteLoader from "react-window-infinite-loader";
import { AssetImageCardSkeleton } from "../asset-image-card-skeleton";
import { IRow, IJustifiedImageGridConfig } from "./types";
import { LazyImage } from "./LazyImage";

// CASE 1
// grid width: 512
// heightof image:  100
// min width image: 85
// max width image: 202

// CASE 2
// grid width: 1000
// height of image: 240
// min width image: 170
// max width image: 410

// CASE 3
// grid width: 1700
// height of image: 440
// min width image: 300
// max width image: 710

// CASE 4
// grid width: 1700
// height of image: 552
// min width image: 398
// max width image: 942

// -- with padding below

// CASE 1
// grid width 512
// height of image with subtitle 140
// height of the subtitle 40
// min width image 85
// max width image 202

// CASE 2
// grid width 1000
// height of image with subtitle 280
// height of the subtitle 40
// min width image 170
// max width image 410

// CASE 3
// grid width 1700
// height of image with subtitle 480
// height of the subtitle 40
// min width image 300
// max width image 710

// CASE 4
// grid width 1700
// height of image with subtitle 592
// height of the subtitle 40
// min width image 398
// max width image 942

const getDefaultConfig = (overwriteConfig?: Partial<IJustifiedImageGridConfigOverwrite>): IJustifiedImageGridConfig => {
  return {
    imageLabelHeight: overwriteConfig?.imageLabelHeight || IMAGE_LABEL_HEIGHT,
    maxImagesPerRow: overwriteConfig?.maxImagesPerRow || MAX_IMAGES_PER_ROW,
    minImagesPerRow: overwriteConfig?.minImagesPerRow || MIN_IMAGES_PER_ROW,
    maxWidthOfImage: overwriteConfig?.maxWidthOfImage || MAX_WIDTH_OF_IMAGE,
    minWidthOfImage: overwriteConfig?.minWidthOfImage || MIN_WIDTH_OF_IMAGE,
    paddingBetweenImages: overwriteConfig?.paddingBetweenImages || PADDING_BETWEEN_IMAGES,
    paddingBetweenRows: overwriteConfig?.paddingBetweenRows || PADDING_BETWEEN_ROWS,
    maxRowHeight: overwriteConfig?.maxRowHeight || ROW_MAX_HEIGHT,
    minRowHeight: overwriteConfig?.minRowHeight || ROW_MIN_HEIGHT,
    totalWidthOfView: overwriteConfig?.totalWidthOfView || TOTAL_WIDTH_OF_VIEW,
    avgRowHeight: overwriteConfig?.avgRowHeight || AVG_ROW_HEIGHT,
    avgImageWidth: overwriteConfig?.avgImageWidth || AVG_IMAGE_WIDTH,
    groupSize: overwriteConfig?.groupSize || GROUP_SIZE,
    paddingAroundGrid: overwriteConfig?.paddingAroundGrid || PADDING_AROUND_GRID,
    scrollViewHeight: overwriteConfig?.scrollViewHeight || SCROLL_VIEW_HEIGHT,
  };
};

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
                height: image.renderedHeight + IMAGE_LABEL_HEIGHT,
                marginRight: i < rowImages.length - 1 ? PADDING_BETWEEN_IMAGES : 0,
              }}
            >
              <AssetImageCard
                key={"ai_" + image.id}
                skeleton={currRow.__loading}
                image={
                  <LazyImage
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
  config: overwriteConfig,
  totalCount,
  scrollToIndex,
  loadNextPage,
}) => {
  const infiniteLoaderRef = React.useRef<InfiniteLoader>(null);
  const loadingRef = React.useRef<boolean>(false);
  const [loadingNextPage, setLoadingNextPage] = React.useState<boolean>(false);
  const config = getDefaultConfig(overwriteConfig);
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
