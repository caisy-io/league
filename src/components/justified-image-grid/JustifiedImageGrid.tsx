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
  PADDING_BETWEEN_IMAGES,
  PADDING_BETWEEN_ROWS,
  ROW_MAX_HEIGHT,
  ROW_MIN_HEIGHT,
  TOTAL_WIDTH_OF_VIEW,
} from "./constants";
import { IJustifiedImageGrid, IJustifiedImageGridConfigOverwrite } from "./types";
import { SJustifiedImageGridRow } from "./styles/SJustifiedImageGridRow";
import InfiniteLoader from "react-window-infinite-loader";
import { AssetImageCardSkeleton } from "../asset-image-card-skeleton";
import { IRow, IJustifiedImageGridConfig } from "./types";

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
  };
};

const Row: React.FC<{
  data: { rows: IRow[]; config: IJustifiedImageGridConfig };
  index: number;
  style: React.CSSProperties;
}> = memo(({ data: { rows, config }, index, style }) => {
  const currRow = rows[index];
  if (currRow.__loading == 1) {
    const firstWidth = config.totalWidthOfView / 3.5;
    const secondWidth = config.totalWidthOfView / 4 - 24;
    const thirdWidth = config.totalWidthOfView - firstWidth - secondWidth - 24;
    return (
      <div style={style}>
        <div style={{ display: "flex", gap: "12px" }}>
          <div style={{ width: firstWidth + "px", height: (config.avgRowHeight - 12) + "px", opacity: 0.8 }}>
            <AssetImageCardSkeleton />
          </div>
          <div style={{ width: secondWidth + "px", height: (config.avgRowHeight - 12) + "px", opacity: 0.6 }}>
            <AssetImageCardSkeleton />
          </div>
          <div style={{ width: thirdWidth + "px", height: (config.avgRowHeight - 12) + "px", opacity: 0.4 }}>
            <AssetImageCardSkeleton />
          </div>
        </div>
        <div style={{width: "100%", height: "12px"}}></div>
      </div>
    );
  }
  if (currRow.__loading == 2) {
    const firstWidth = config.totalWidthOfView / 2.5;
    const secondWidth = config.totalWidthOfView / 3.5 - 24;
    return (
      <div style={style}>
        <div style={{ display: "flex", gap: "12px" }}>
          <div
            style={{
              width: firstWidth + "px",
              height: (config.avgRowHeight - 12) + "px",
              opacity: 0.8,
            }}
          >
            <AssetImageCardSkeleton />
          </div>
          <div
            style={{
              width: secondWidth + "px",
              height: (config.avgRowHeight - 12) + "px",
              opacity: 0.6,
            }}
          >
            <AssetImageCardSkeleton />
          </div>
        </div>
      </div>
    );
  }
  const rowImages = currRow.images;

  return (
    <div style={style}>
      <SJustifiedImageGridRow>
        {rowImages.map((image, i) => {
          return (
            <SJustifiedImageGridCell
              key={i}
              style={{
                width: image.renderedWidth,
                height: image.renderedHeight + IMAGE_LABEL_HEIGHT,
                marginRight: i < rowImages.length - 1 ? PADDING_BETWEEN_IMAGES : 0,
              }}
            >
              <AssetImageCard
                image={
                  <img
                    key={i}
                    src={image.src + "?height=600"}
                    alt="image"
                    loading="lazy"
                    decoding="async"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                }
                labelText="Image Label" // Replace with your actual label text
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

  if (loadingNextPage) {
    rowConfigs.push({
      __loading: 1,
      images: [],
      rowHeight: AVG_ROW_HEIGHT,
    });
    rowConfigs.push({
      __loading: 2,
      images: [],
      rowHeight: AVG_ROW_HEIGHT,
    });
  }

  console.log("rowConfigs", rowConfigs);

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
    <SJustifiedImageGrid style={{ width: TOTAL_WIDTH_OF_VIEW, height: 800 }}>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={1999}
        loadMoreItems={loadMoreItems}
        ref={infiniteLoaderRef}
      >
        {({ onItemsRendered, ref }) => (
          <VariableSizeList
            onItemsRendered={onItemsRendered}
            ref={ref}
            height={800} // For instance.
            itemData={{ config, rows: rowConfigs }}
            itemCount={rowConfigs.length}
            itemSize={(index) => rowConfigs[index].rowHeight}
            width={TOTAL_WIDTH_OF_VIEW}
          >
            {Row}
          </VariableSizeList>
        )}
      </InfiniteLoader>
    </SJustifiedImageGrid>
  );
};
