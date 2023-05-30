import React, { forwardRef, memo,  } from "react";
import { SJustifiedImageGrid } from "./styles/SJustifiedImageGrid";
import { areEqual } from "react-window";
import { AssetImageCard } from "../asset-image-card";
import { generateRows } from "./generateRows";
import { SJustifiedImageGridCell } from "./styles/SJustifiedImageGridCell";
import { IJustifiedImageGrid, IJustifiedImageGridEvent } from "./types";
import { SJustifiedImageGridRow } from "./styles/SJustifiedImageGridRow";
import { Virtuoso } from "react-virtuoso";
import { IRow, IJustifiedImageGridConfig } from "./types";
import { LazyImage } from "./LazyImage";

const Row: React.FC<{
  data: {
    row: IRow;
    config: IJustifiedImageGridConfig;
    onImageSelection: (event: IJustifiedImageGridEvent) => void;
    onImageClick: (event: IJustifiedImageGridEvent) => void;
  };
}> = memo(({ data: { row, config, onImageSelection, onImageClick } }) => {
  const rowImages = row.images;

  return (
    <div>
      <SJustifiedImageGridRow>
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
                skeleton={row.__loading}
                activated={image.selected}
                onImageClick={(e) => onImageClick({ event: e, id: image.id, columnIndex: i } as any)}
                onChange={() => onImageSelection({ id: image.id, columnIndex: i } as any)}
                image={
                  <LazyImage
                    config={config}
                    skeleton={row.__loading}
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

export const JustifiedImageGrid = forwardRef<any, IJustifiedImageGrid>(
  ({ images, config, totalCount, loadNextPage, onImageSelection, onImageClick }, virtuosoRef) => {
    const loadingRef = React.useRef<boolean>(false);
    const [loadingNextPage, setLoadingNextPage] = React.useState<boolean>(false);
    const rowConfigs = generateRows(images, totalCount, config);

    if (loadingNextPage && rowConfigs.length > 0 && images.length !== totalCount) {
      rowConfigs[rowConfigs.length - 1].__loading = true;
    }

    const loadMoreItems = () => {
      if (!loadingRef.current) {
        loadingRef.current = true;
        loadNextPage().then(() => {
          loadingRef.current = false;
          setLoadingNextPage(false);
        });
        setLoadingNextPage(true);
      }
    };

    // useEffect(() => {
    //   virtuosoRef?.current &&
    //     virtuosoRef.current.scrollToIndex({
    //       index: scrollToRowIndex,
    //       align: "center",
    //       behavior: "auto",
    //     });
    // }, [scrollToRowIndex, !!virtuosoRef?.current]);

    return (
      <SJustifiedImageGrid>
        <Virtuoso
          ref={virtuosoRef}
          style={{ height: config.scrollViewHeight, width: config.totalWidthOfView + config.paddingAroundGrid * 2 }}
          data={rowConfigs}
          endReached={loadMoreItems}
          overscan={200}
          itemContent={(index, row) => {
            return (
              <div
                style={{ paddingTop: index == 0 ? "16px" : undefined, paddingBottom: config.paddingBetweenRows + "px" }}
              >
                <Row
                  data={{
                    config,
                    row,
                    onImageSelection: (e) => {
                      onImageSelection && onImageSelection({ ...e, rowIndex: index });
                    },
                    onImageClick: (e) => {
                      onImageClick && onImageClick({ ...e, rowIndex: index });
                    },
                  }}
                />
              </div>
            );
          }}
        />
      </SJustifiedImageGrid>
    );
  },
);
