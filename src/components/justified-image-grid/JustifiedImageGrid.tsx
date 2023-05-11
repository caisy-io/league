import React, { FC } from "react";
import { SJustifiedImageGrid } from "./styles/SJustifiedImageGrid";
import { FixedSizeList as List } from "react-window";
import { AssetImageCard } from "../asset-image-card";
import { generateRows } from "./generateRows";
import { SJustifiedImageGridCell } from "./styles/SJustifiedImageGridCell";
import { IMAGE_LABEL_HEIGHT, PADDING_BETWEEN_IMAGES, TOTAL_WIDTH_OF_VIEW } from "./constants";
import { IJustifiedImageGrid } from "./types";
import { SJustifiedImageGridRow } from "./styles/SJustifiedImageGridRow";

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

export const JustifiedImageGrid: FC<IJustifiedImageGrid> = ({ images, rowHeight }) => {
  const rowConfigs = generateRows(images);
  console.log("rowConfigs", rowConfigs);

  const Row: React.FC<{ index: number; style: React.CSSProperties }> = ({ index, style }) => {
    const rowImages = rowConfigs[index].images;
    console.log("rowImages", rowImages);

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
                      style={{
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
  };

  return (
    <SJustifiedImageGrid style={{ width: TOTAL_WIDTH_OF_VIEW, height: 800 }}>
      <List
        height={800} // For instance.
        itemCount={rowConfigs.length}
        itemSize={rowHeight}
        width={TOTAL_WIDTH_OF_VIEW}
      >
        {Row}
      </List>
    </SJustifiedImageGrid>
  );
};
