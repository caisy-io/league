import React, { forwardRef, memo, useEffect } from "react";
import { SJustifiedImageGrid } from "./styles/SJustifiedImageGrid";
import { areEqual } from "react-window";
import { generateRows } from "./generateRows";
import { SJustifiedImageGridCell } from "./styles/SJustifiedImageGridCell";
import { IJustifiedImageGrid, IJustifiedImageGridEvent } from "./types";
import { SJustifiedImageGridRow } from "./styles/SJustifiedImageGridRow";
import { Virtuoso } from "react-virtuoso";
import { IRow, IJustifiedImageGridConfig } from "./types";
import { LazyImage } from "./LazyImage";
import { decodeStateSnapshotURLSafe } from "./stateHelper";
import { AssetImageCard } from "../asset-image-card";

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
          const key = "ci_" + image.id;
          return (
            <SJustifiedImageGridCell
              id={key}
              key={key}
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
  (
    { images, config, totalCount, loadNextPage, onImageSelection, onImageClick, restoreStateFrom, scrollToId },
    virtuosoRef,
  ) => {
    const loadingRef = React.useRef<boolean>(false);
    const [loadingNextPage, setLoadingNextPage] = React.useState<boolean>(false);
    const rowConfigs = generateRows(images, totalCount, config);

    if (loadingNextPage && rowConfigs.length > 0 && images.length !== totalCount) {
      rowConfigs[rowConfigs.length - 1].__loading = true;
    }

    const loadMoreItems = () => {
      if (totalCount && totalCount > images.length && !loadingRef.current) {
        loadingRef.current = true;
        loadNextPage().then(() => {
          loadingRef.current = false;
          setLoadingNextPage(false);
        });
        setLoadingNextPage(true);
      }
    };

    const hasImages = !!rowConfigs.length;
    const restoreStateFromSnapshot = restoreStateFrom ? decodeStateSnapshotURLSafe(restoreStateFrom) : undefined;

    const key = restoreStateFrom && hasImages ? `${restoreStateFrom}_${hasImages}` : undefined;

    useEffect(() => {
      const v = (virtuosoRef as any).current;
      if (restoreStateFromSnapshot && v && scrollToId) {
        const scrollToIndex = rowConfigs.findIndex((r) => r.images.find((i) => i.id === scrollToId));
        if (scrollToIndex !== -1) {
          v.scrollToIndex({
            index: scrollToIndex,
            align: "center",
            behavior: "auto",
          });
        }
      }
    }, [scrollToId]);

    return (
      <SJustifiedImageGrid>
        <Virtuoso
          key={key}
          restoreStateFrom={restoreStateFromSnapshot}
          ref={virtuosoRef}
          style={{ height: "100%", width: config.totalWidthOfView + config.paddingAroundGrid * 2 }}
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
