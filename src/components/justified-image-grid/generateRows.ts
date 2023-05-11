import {
  IMAGE_LABEL_HEIGHT,
  MAX_IMAGES_PER_ROW,
  MAX_WIDTH_OF_IMAGE,
  MIN_IMAGES_PER_ROW,
  MIN_WIDTH_OF_IMAGE,
  PADDING_BETWEEN_IMAGES,
  ROW_HEIGHT,
  TOTAL_WIDTH_OF_VIEW,
} from "./constants";
import { Row, ResizedImage, Image } from "./types";

export function generateRows(images: Image[]): Row[] {
  const rows: Row[] = [];

  let currentRow: ResizedImage[] = [];

  for (const image of images) {
    const originalAspectRatio = image.width / image.height;
    const newHeight = ROW_HEIGHT - IMAGE_LABEL_HEIGHT;
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
      rows.push({ images: currentRow });
      currentRow = [];
    }

    if (currentRow.length === MAX_IMAGES_PER_ROW) {
      rows.push({ images: currentRow });
      currentRow = [];
    }
  }

  // Add any remaining images to the last row
  if (currentRow.length > 0) {
    rows.push({ images: currentRow });
  }

  return rows;
}
