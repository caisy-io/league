import {
  IMAGE_LABEL_HEIGHT,
  MAX_WIDTH_OF_IMAGE,
  MIN_WIDTH_OF_IMAGE,
  PADDING_BETWEEN_IMAGES,
  PADDING_BETWEEN_ROWS,
  AVG_IMAGE_WIDTH,
  GROUP_SIZE,
  PADDING_AROUND_GRID,
  SVG_PADDING,
  RESIZE_IMAGE_HEIGHT,
  SCROLL_VIEW_HEIGHT,
  AVG_ROW_HEIGHT,
  ROW_MAX_HEIGHT,
  ROW_MIN_HEIGHT,
} from "./constants";
import { IJustifiedImageGridConfigOverwrite, IJustifiedImageGridConfig } from "./types";

const breakpointImageAmount = [600, 800, 1000, 1600];
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
// grid width: 1400
// height of image: 440
// min width image: 300
// max width image: 710

// CASE 4
// grid width: 1700
// height of image: 552
// min width image: 398
// max width image: 942

// width is view with and skaling is the skaling factor between 0 and 1
export const getImagesPerRow = (
  width: number,
  skaling: number,
): {
  maxImagesPerRow: number;
  minImagesPerRow: number;
} => {
  switch (true) {
    case width > breakpointImageAmount[3]:
      switch (true) {
        case skaling < 0.4:
          return {
            maxImagesPerRow: 10,
            minImagesPerRow: 5,
          };
        case skaling > 0.6:
          return {
            maxImagesPerRow: 7,
            minImagesPerRow: 2,
          };
        default:
          return {
            maxImagesPerRow: 9,
            minImagesPerRow: 4,
          };
      }

    case width > breakpointImageAmount[2]:
      switch (true) {
        case skaling < 0.4:
          return {
            maxImagesPerRow: 9,
            minImagesPerRow: 4,
          };
        case skaling > 0.6:
          return {
            maxImagesPerRow: 5,
            minImagesPerRow: 2,
          };
        default:
          return {
            maxImagesPerRow: 7,
            minImagesPerRow: 3,
          };
      }
    case width > breakpointImageAmount[1]:
      switch (true) {
        case skaling < 0.4:
          return {
            maxImagesPerRow: 7,
            minImagesPerRow: 3,
          };
        case skaling > 0.6:
          return {
            maxImagesPerRow: 4,
            minImagesPerRow: 2,
          };
        default:
          return {
            maxImagesPerRow: 5,
            minImagesPerRow: 2,
          };
      }
    case width > breakpointImageAmount[0]:
      switch (true) {
        case skaling > 0.6:
          return {
            maxImagesPerRow: 3,
            minImagesPerRow: 2,
          };
        default:
          return {
            maxImagesPerRow: 4,
            minImagesPerRow: 2,
          };
      }
    default:
      return {
        maxImagesPerRow: 3,
        minImagesPerRow: 2,
      };
  }
};

export const getSvgPadding = (
  width: number,
  skaling: number,
): {
  svgPadding: number;
} => {
  switch (true) {
    case width > breakpointImageAmount[3]:
      switch (true) {
        case skaling < 0.4:
          return {
            svgPadding: 16,
          };
        case skaling > 0.6:
          return {
            svgPadding: 32,
          };
        default:
          return {
            svgPadding: 32,
          };
      }
    case width > breakpointImageAmount[2]:
      switch (true) {
        case skaling < 0.4:
          return {
            svgPadding: 8,
          };
        case skaling > 0.6:
          return {
            svgPadding: 16,
          };
        default:
          return {
            svgPadding: 16,
          };
      }
    default:
      return {
        svgPadding: 8,
      };
  }
};

const baseHeightScaleFactor = 0.19;

export const dynamicConfig = ({
  overwriteConfig,
  skaling,
  totalWidthOfView,
}: {
  overwriteConfig?: Partial<IJustifiedImageGridConfigOverwrite>;
  skaling: number;
  totalWidthOfView: number;
}): IJustifiedImageGridConfig => {
  const baseRowHeight = Math.max(totalWidthOfView * baseHeightScaleFactor, 170);
  const scaleSum = -1 * (0.5 - skaling) * baseRowHeight * 0.5;
  const scaledRowHeight = baseRowHeight + (scaleSum > 1 ? scaleSum * 3 : scaleSum);
  const scaledHeightRato = scaledRowHeight / baseRowHeight;

  return {
    totalWidthOfView: totalWidthOfView,
    // computed calculated values
    maxWidthOfImage: totalWidthOfView * 0.41 * scaledHeightRato,
    minWidthOfImage: totalWidthOfView * 0.19 * scaledHeightRato,
    avgImageWidth: overwriteConfig?.avgImageWidth || AVG_IMAGE_WIDTH,
    ...getImagesPerRow(totalWidthOfView, skaling),
    ...getSvgPadding(totalWidthOfView, skaling),
    minRowHeight: scaledRowHeight - scaledRowHeight * 0.2,
    maxRowHeight: scaledRowHeight + scaledRowHeight * 0.2,
    avgRowHeight: scaledRowHeight,
    resizeHeight: scaledRowHeight < 300 ? 300 : scaledRowHeight < 600 ? 600 : 1200,
    // fixed values
    groupSize: overwriteConfig?.groupSize || GROUP_SIZE,
    paddingAroundGrid: overwriteConfig?.paddingAroundGrid || PADDING_AROUND_GRID,
    imageLabelHeight: overwriteConfig?.imageLabelHeight || IMAGE_LABEL_HEIGHT,
    paddingBetweenImages: overwriteConfig?.paddingBetweenImages || PADDING_BETWEEN_IMAGES,
    paddingBetweenRows: overwriteConfig?.paddingBetweenRows || PADDING_BETWEEN_ROWS,
    scrollViewHeight: overwriteConfig?.scrollViewHeight || SCROLL_VIEW_HEIGHT,
  };
};
