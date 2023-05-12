import {
  IMAGE_LABEL_HEIGHT,
  MAX_IMAGES_PER_ROW,
  MAX_WIDTH_OF_IMAGE,
  MIN_IMAGES_PER_ROW,
  MIN_WIDTH_OF_IMAGE,
  PADDING_BETWEEN_IMAGES,
  PADDING_BETWEEN_ROWS,
  ROW_HEIGHT,
  TOTAL_WIDTH_OF_VIEW,
} from "./constants";
import { IRow, ResizedImage, Image, IJustifiedImageGridConfig } from "./types";

export function generateRows(images: Image[], groupSize, totalCount, config: IJustifiedImageGridConfig): IRow[] {
  const rows: IRow[] = [];

  let currentRow: ResizedImage[] = [];
  let currentGroup: IRow[] = [];

  let currentGroupIndex = 0;
  let currentGroupAspectRatioTotal = 0;
  for (const image of images) {
    // get the aspect ratio of the image
    const originalAspectRatio = image.width / image.height;
    currentGroupAspectRatioTotal = currentGroupAspectRatioTotal + originalAspectRatio;
  }

  for (const image of images) {
    const originalAspectRatio = image.width / image.height;
    const newHeight = ROW_HEIGHT - IMAGE_LABEL_HEIGHT - PADDING_BETWEEN_ROWS;
    let newWidth = newHeight * originalAspectRatio;

    if (newWidth < MIN_WIDTH_OF_IMAGE) newWidth = MIN_WIDTH_OF_IMAGE;
    if (newWidth > MAX_WIDTH_OF_IMAGE) newWidth = MAX_WIDTH_OF_IMAGE;

    const resizedImage: ResizedImage = {
      ...image,
      renderedWidth: newWidth,
      renderedHeight: newHeight,
      originalAspectRatio,
      newAspectRatio: newWidth / newHeight,
    };

    currentRow.push(resizedImage);

    const currentRowWidth = currentRow.reduce((acc, img) => acc + img.renderedWidth + PADDING_BETWEEN_IMAGES, 0);

    if (currentRow.length >= MIN_IMAGES_PER_ROW && currentRowWidth >= TOTAL_WIDTH_OF_VIEW) {
      rows.push({ images: currentRow, rowHeight: ROW_HEIGHT });
      currentRow = [];
    }

    if (currentRow.length === MAX_IMAGES_PER_ROW) {
      rows.push({ images: currentRow, rowHeight: ROW_HEIGHT });
      currentRow = [];
    }
  }

  // Add any remaining images to the last row
  if (currentRow.length > 0) {
    rows.push({ images: currentRow, rowHeight: ROW_HEIGHT });
  }

  return rows;
}
