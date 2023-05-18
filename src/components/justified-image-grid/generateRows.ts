import { IRow, ResizedImage, Image, IJustifiedImageGridConfig } from "./types";

function calculateConfigurationParameters(config: IJustifiedImageGridConfig) {
  const aimingImagesPerRow = Math.ceil((config.maxImagesPerRow + config.minImagesPerRow) / 2);
  const aimingRowHeight = Math.ceil((config.maxRowHeight + config.minRowHeight) / 2);
  const idealImageWidth =
    (config.totalWidthOfView - config.paddingBetweenImages * (aimingImagesPerRow - 1)) / aimingImagesPerRow;
  const idealAspectRatio = idealImageWidth / (aimingRowHeight - config.imageLabelHeight - config.paddingBetweenRows);
  const idealAspectRatioSum = idealAspectRatio * aimingImagesPerRow;
  const minAspectRatioImage =
    (config.totalWidthOfView - config.paddingBetweenImages * (aimingImagesPerRow - 1)) /
    config.maxImagesPerRow /
    (config.maxRowHeight - config.imageLabelHeight - config.paddingBetweenRows);
  const maxAspectRatioImage =
    (config.totalWidthOfView - config.paddingBetweenImages * (aimingImagesPerRow - 1)) /
    config.minImagesPerRow /
    (config.minRowHeight - config.imageLabelHeight - config.paddingBetweenRows);

  return {
    aimingImagesPerRow,
    aimingRowHeight,
    idealImageWidth,
    idealAspectRatio,
    idealAspectRatioSum,
    minAspectRatioImage,
    maxAspectRatioImage,
  };
}

function calculateAspectRatios(
  images: Image[],
  config: IJustifiedImageGridConfig,
  minAspectRatioImage: number,
  maxAspectRatioImage: number,
  idealImageWidth: number,
  aimingRowHeight: number,
): number[] {
  return images.map((currImage) => {
    const currImageWidth = currImage.width || idealImageWidth;
    const currImageHeight = currImage.height || aimingRowHeight - config.imageLabelHeight - config.paddingBetweenRows;
    let currImageAspectRatio = currImageWidth / currImageHeight;

    if (currImageAspectRatio < minAspectRatioImage) {
      currImageAspectRatio = minAspectRatioImage;
    }
    if (currImageAspectRatio > maxAspectRatioImage) {
      currImageAspectRatio = maxAspectRatioImage;
    }
    return currImageAspectRatio;
  });
}

function buildRows(
  images: Image[],
  aspectRatios: number[],
  config: IJustifiedImageGridConfig,
  aimingRowHeight: number,
  idealAspectRatioSum: number,
  idealImageWidth: number,
): IRow[] {
  let rows: IRow[] = [];
  let currentRow: ResizedImage[] = [];
  let currentAspectRatioSum = 0;

  for (let imageIndex = 0; imageIndex < images.length; imageIndex++) {
    const currImage = images[imageIndex];
    const currImageWidth = currImage.width || idealImageWidth;
    const currImageHeight = currImage.height || aimingRowHeight - config.imageLabelHeight - config.paddingBetweenRows;
    const currImageAspectRatio = aspectRatios[imageIndex];

    const addImageToRow = () => {
      const renderedHeight = aimingRowHeight - config.imageLabelHeight - config.paddingBetweenRows;
      const renderedWidth = renderedHeight * currImageAspectRatio;
      currentAspectRatioSum += currImageAspectRatio;
      currentRow.push({
        ...images[imageIndex],
        newAspectRatio: currImageAspectRatio,
        originalAspectRatio: currImageWidth / currImageHeight,
        renderedHeight,
        renderedWidth,
      });
    };

    const finishRow = () => {
      const totalWidth = currentRow.reduce((sum, img) => sum + img.renderedWidth, 0);
      rows.push(
        justifyRow(
          {
            images: currentRow,
            aspectRatioSum: currentAspectRatioSum,
            aspectRatioSumWithoutLast: currentAspectRatioSum - currentRow[currentRow.length - 1].newAspectRatio,
            totalWidth,
            rowHeight: aimingRowHeight,
          } as any,
          config,
        ),
      );
      currentRow = [];
      currentAspectRatioSum = 0;
    };

    // Finish the last row
    if (images.length - 1 === imageIndex) {
      finishRow();
    }

    const newAspectRatioSum = currentAspectRatioSum + currImageAspectRatio;
    const newDiff = idealAspectRatioSum - newAspectRatioSum;
    const currDif = idealAspectRatioSum - currentAspectRatioSum;
    const newImageWouldDecraseDiff = Math.abs(newDiff) < Math.abs(currDif);
    const rowIsNotFilled = currentAspectRatioSum + currImageAspectRatio < idealAspectRatioSum;

    if ((rowIsNotFilled || newImageWouldDecraseDiff) && currentRow.length < config.maxImagesPerRow) {
      addImageToRow();
    } else {
      finishRow();
      addImageToRow();
    }
  }

  return rows;
}

export function justifyRow(row: IRow, config: IJustifiedImageGridConfig): IRow {
  const { totalWidthOfView, paddingBetweenImages } = config;

  const currentTotalWidth = row.images.reduce((sum, img) => sum + img.renderedWidth, 0);

  console.log(` currentTotalWidth`, currentTotalWidth);
  const diff = totalWidthOfView - currentTotalWidth;

  console.log(` diff`, diff);

  row.images = row.images.map((img) => {
    return img;
  });

  return row;
}
export function getGroupRows(images: Image[], config: IJustifiedImageGridConfig): IRow[] {
  const { aimingRowHeight, idealImageWidth, idealAspectRatioSum, minAspectRatioImage, maxAspectRatioImage } =
    calculateConfigurationParameters(config);

  // first lets get the aspect ratio of all images in the group within the bounds of the min and max aspect ratio
  const aspectRatios = calculateAspectRatios(
    images,
    config,
    minAspectRatioImage,
    maxAspectRatioImage,
    idealImageWidth,
    aimingRowHeight,
  );

  let rows = buildRows(images, aspectRatios, config, aimingRowHeight, idealAspectRatioSum, idealImageWidth);

  return rows;
}

export function generateRows(images: Image[], totalCount, config: IJustifiedImageGridConfig): IRow[] {
  const rows: IRow[] = [];

  let currentGroupIndex = 0;
  let currentGroupImagesCount = 0;

  for (let overallImageIndex = 0; overallImageIndex < images.length; overallImageIndex++) {
    currentGroupImagesCount++;

    if (currentGroupImagesCount === config.groupSize) {
      const currGroupStartIndex = overallImageIndex - config.groupSize + 1;
      const currGroupEndIndex = overallImageIndex + 1;
      getGroupRows(images.slice(currGroupStartIndex, currGroupEndIndex), config).forEach((row) => rows.push(row));
      currentGroupIndex++;
      currentGroupImagesCount = 0;
    }
  }

  // collect the last group if we are at total count and reach the last group that can be fetched
  if (currentGroupImagesCount > 0 && images.length > totalCount - config.groupSize) {
    getGroupRows(images.slice(images.length - currentGroupImagesCount, images.length), config).forEach((row) =>
      rows.push(row),
    );
  }

  return rows;
}
