import { IRow, ResizedImage, Image, IJustifiedImageGridConfig } from "./types";

function calculateConfigurationParameters(config: IJustifiedImageGridConfig) {
  const aimingImagesPerRow = Math.ceil((config.maxImagesPerRow + config.minImagesPerRow) / 2);
  const aimingRowHeight = Math.ceil((config.maxRowHeight + config.minRowHeight) / 2);
  const idealImageWidth =
    (config.totalWidthOfView - config.paddingBetweenImages * (aimingImagesPerRow - 1)) / aimingImagesPerRow;
  const idealAspectRatio = idealImageWidth / (aimingRowHeight - config.imageLabelHeight - config.paddingBetweenRows);
  const idealAspectRatioSum = idealAspectRatio * aimingImagesPerRow;
  const minAspectRatioImage = Math.max(
    (config.totalWidthOfView - config.paddingBetweenImages * (aimingImagesPerRow - 1)) /
      config.maxImagesPerRow /
      (config.maxRowHeight - config.imageLabelHeight - config.paddingBetweenRows),
    config.minWidthOfImage / aimingRowHeight,
  );
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
  isLastGroup: boolean,
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

      // this should only catch in the last row
      // lets skip the (last) row if it is not filled enough
      const rowIsNotFilledEnough =
        currentRow.length < config.minImagesPerRow || totalWidth < config.totalWidthOfView - config.avgImageWidth;

      if (!rowIsNotFilledEnough) {
        rows.push(
          justifyRow(
            {
              images: currentRow,
              aspectRatioSum: currentAspectRatioSum,
              totalWidth,
              rowHeight: aimingRowHeight,
            },
            config,
          ),
        );
      } else if (isLastGroup) {
        rows.push({
          images: currentRow,
          aspectRatioSum: currentAspectRatioSum,
          totalWidth,
          rowHeight: aimingRowHeight,
        });
      }

      currentRow = [];
      currentAspectRatioSum = 0;
    };

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

    // Finish the last row
    if (images.length - 1 === imageIndex) {
      finishRow();
    }
  }

  return rows;
}

export function justifyRow(row: IRow, config: IJustifiedImageGridConfig): IRow {
  const { totalWidthOfView } = config;

  const currentTotalWidth = row.images.reduce((sum, img) => sum + img.renderedWidth, 0);

  const missingWidth = totalWidthOfView - currentTotalWidth;

  const totalWidth = row.images.reduce((sum, img) => sum + img.renderedWidth, 0);
  let newTotalWidth = 0;
  row.images = row.images.map((img, index) => {
    if (index === row.images.length - 1) {
      return { ...img, renderedWidth: totalWidthOfView - newTotalWidth };
    }

    const newWidth = Math.ceil(img.renderedWidth + missingWidth * (img.renderedWidth / totalWidth));
    newTotalWidth += newWidth;
    return { ...img, renderedWidth: newWidth };
  });

  row.totalWidth = totalWidthOfView;
  return row;
}

export function getGroupRows(images: Image[], config: IJustifiedImageGridConfig, isLastGroup: boolean): IRow[] {
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

  let rows = buildRows(
    images,
    aspectRatios,
    config,
    aimingRowHeight,
    idealAspectRatioSum,
    idealImageWidth,
    isLastGroup,
  );

  return rows;
}

export function generateRows(images: Image[], totalCount, config: IJustifiedImageGridConfig): IRow[] {
  const rows: IRow[] = [];

  console.log(` config`, config);
  let currentGroupIndex = 0;
  let currentGroupImagesCount = 0;

  for (let overallImageIndex = 0; overallImageIndex < images.length; overallImageIndex++) {
    currentGroupImagesCount++;

    if (currentGroupImagesCount === config.groupSize) {
      const currGroupStartIndex = overallImageIndex - config.groupSize + 1;
      const currGroupEndIndex = overallImageIndex + 1;

      let usedImageCount = 0;
      getGroupRows(images.slice(currGroupStartIndex, currGroupEndIndex), config, false).forEach((row) => {
        usedImageCount += row.images.length;
        rows.push(row);
      });

      currentGroupIndex++;
      currentGroupImagesCount = 0;

      if (usedImageCount !== config.groupSize) {
        const leftOverImageCount = config.groupSize - usedImageCount;
        currentGroupImagesCount = currentGroupImagesCount + leftOverImageCount;
        console.log(` leftOverImageCount`, leftOverImageCount);
        console.log(images.slice(currGroupStartIndex + usedImageCount, currGroupEndIndex));
      }

    }
  }

  // collect the last group if we are at total count and reach the last group that can be fetched
  if (currentGroupImagesCount > 0 && images.length > totalCount - config.groupSize) {
    getGroupRows(images.slice(images.length - currentGroupImagesCount, images.length), config, true).forEach((row) =>
      rows.push(row),
    );
  }

  if (rows.length > 0) {
    rows[0].rowHeight = rows[0].rowHeight + config.paddingAroundGrid;
  }
  if (rows.length > 1) {
    rows[rows.length - 1].rowHeight = rows[rows.length - 1].rowHeight + config.paddingAroundGrid;
  }

  return rows;
}
