import React, { FC, memo } from "react";
import { SJustifiedImageGrid } from "./styles/SJustifiedImageGrid";
import { VariableSizeList, areEqual } from "react-window";
import { AssetImageCard } from "../asset-image-card";
import { generateRows } from "./generateRows";
import { SJustifiedImageGridCell } from "./styles/SJustifiedImageGridCell";
import { AVG_ROW_HEIGHT, IMAGE_LABEL_HEIGHT, PADDING_BETWEEN_IMAGES, TOTAL_WIDTH_OF_VIEW } from "./constants";
import { IJustifiedImageGrid } from "./types";
import { SJustifiedImageGridRow } from "./styles/SJustifiedImageGridRow";
import InfiniteLoader from "react-window-infinite-loader";

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

const Row: React.FC<{ data: any, index: number; style: React.CSSProperties }> = memo(({ data: rowConfigs, index, style }) => {
  const currRow = rowConfigs[index];
  if (currRow.__loading) {
    return (
      <div style={style}>
        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div>Loading...</div>
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

export const JustifiedImageGrid: FC<IJustifiedImageGrid> = ({ images, groupSize,  totalCount, scrollToIndex, loadNextPage }) => {
  const infiniteLoaderRef = React.useRef<InfiniteLoader>(null);
  const loadingRef = React.useRef<boolean>(false);
  const [loadingNextPage, setLoadingNextPage] = React.useState<boolean>(false);
  const rowConfigs = generateRows(images, groupSize, totalCount);

  if (loadingNextPage) {
    rowConfigs.push({
      __loading: true,
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
            itemData={rowConfigs}
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
