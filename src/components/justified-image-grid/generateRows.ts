import { IJustifiedImageGridConfig, ResizedImage, Image, IRow } from "./types";

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
  const rows: IRow[] = [];
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
      const skip =
        currentRow.length < config.minImagesPerRow || totalWidth < config.totalWidthOfView - config.avgImageWidth;

      if (!skip) {
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
        // console.log(` isLastGroup`, isLastGroup, imageIndex, images.length);
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

    // rowIsNotFilled && console.log(` rowIsNotFilled=${rowIsNotFilled} ${currentRow.length}`, rowIsNotFilled, newImageWouldDecraseDiff,  currentRow.length < config.maxImagesPerRow);
    if (
      currentRow.length < config.minImagesPerRow ||
      ((rowIsNotFilled || newImageWouldDecraseDiff) && currentRow.length < config.maxImagesPerRow)
    ) {
      addImageToRow();
    } else {
      finishRow();
      addImageToRow();
    }

    // Finish the last row
    if (images.length != 0 && images.length - 1 === imageIndex) {
      finishRow();
    }
  }

  return rows;
}

export function stretchImages(images: ResizedImage[], config: IJustifiedImageGridConfig): number[] {
  // Deconstruct configuration for easier usage
  const { totalWidthOfView, paddingBetweenImages } = config;

  // Get current image widths and calculate total width
  const imageWidths = images.map((img) => img.renderedWidth);
  const totalCurrentWidth = imageWidths.reduce((sum, width) => sum + width, 0);

  // Calculate the width available for images after considering the padding
  const availableWidth = totalWidthOfView - paddingBetweenImages * (images.length - 1);

  // Calculate new widths maintaining their proportions and round down to integer
  const newWidths = imageWidths.map((width) => Math.floor((width / totalCurrentWidth) * availableWidth));

  // Calculate the remaining width after rounding down
  let remainingWidth = availableWidth - newWidths.reduce((sum, width) => sum + width, 0);

  // Sort images by their fractional part, largest first
  const fractionalParts = imageWidths.map((width) => ((width / totalCurrentWidth) * availableWidth) % 1);
  const indices = Array.from(fractionalParts.keys()).sort((a, b) => fractionalParts[b] - fractionalParts[a]);

  // Distribute the remaining width among the images, starting with the largest ones
  while (remainingWidth > 0) {
    for (const i of indices) {
      if (remainingWidth > 0) {
        newWidths[i]++;
        remainingWidth--;
      }
    }
  }

  return newWidths;
}

export function justifyRow(row: IRow, config: IJustifiedImageGridConfig): IRow {
  const strechedWidths = stretchImages(row.images, config);
  row.images.forEach((_, index) => {
    row.images[index].renderedWidth = strechedWidths[index];
  });

  row.totalWidth = config.totalWidthOfView;
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

  const rows = buildRows(
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

      currentGroupImagesCount = 0;

      if (usedImageCount !== config.groupSize) {
        const leftOverImageCount = config.groupSize - usedImageCount;
        currentGroupImagesCount = currentGroupImagesCount + leftOverImageCount;
        // if (leftOverImageCount > 7){
        //   console.log(`leftOverImageCount=${leftOverImageCount} usedImageCount=${usedImageCount} config.groupSize=${config.groupSize} images.length=${images.length} totalCount=${totalCount} `);
        // }
        // console.log(images.slice(currGroupStartIndex + usedImageCount, currGroupEndIndex));
      }
    }
  }

  // collect the last group if we are at total count and reach the last group that can be fetched
  // console.log(` currentGroupImagesCount`, currentGroupImagesCount, images.length, totalCount);
  if (currentGroupImagesCount > 0) {
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
