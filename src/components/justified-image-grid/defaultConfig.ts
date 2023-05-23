import {
  IMAGE_LABEL_HEIGHT,
  MAX_IMAGES_PER_ROW,
  MIN_IMAGES_PER_ROW,
  MAX_WIDTH_OF_IMAGE,
  MIN_WIDTH_OF_IMAGE,
  PADDING_BETWEEN_IMAGES,
  PADDING_BETWEEN_ROWS,
  ROW_MAX_HEIGHT,
  ROW_MIN_HEIGHT,
  TOTAL_WIDTH_OF_VIEW,
  AVG_ROW_HEIGHT,
  AVG_IMAGE_WIDTH,
  GROUP_SIZE,
  PADDING_AROUND_GRID,
  SVG_PADDING,
  RESIZE_IMAGE_HEIGHT,
  SCROLL_VIEW_HEIGHT,
} from "./constants";
import { IJustifiedImageGridConfigOverwrite, IJustifiedImageGridConfig } from "./types";

export const getDefaultConfig = (
  overwriteConfig?: Partial<IJustifiedImageGridConfigOverwrite>,
): IJustifiedImageGridConfig => {
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
    avgRowHeight: overwriteConfig?.avgRowHeight || AVG_ROW_HEIGHT,
    totalWidthOfView: overwriteConfig?.totalWidthOfView || TOTAL_WIDTH_OF_VIEW,
    avgImageWidth: overwriteConfig?.avgImageWidth || AVG_IMAGE_WIDTH,
    groupSize: overwriteConfig?.groupSize || GROUP_SIZE,
    paddingAroundGrid: overwriteConfig?.paddingAroundGrid || PADDING_AROUND_GRID,
    svgPadding: overwriteConfig?.svgPadding || SVG_PADDING,
    resizeHeight: overwriteConfig?.resizeHeight || RESIZE_IMAGE_HEIGHT,
    scrollViewHeight: overwriteConfig?.scrollViewHeight || SCROLL_VIEW_HEIGHT,
  };
};
