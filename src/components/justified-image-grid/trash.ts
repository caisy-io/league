
// for (const image of images) {
//     const originalAspectRatio = image.width / image.height;
//     const newHeight = ROW_HEIGHT - IMAGE_LABEL_HEIGHT - PADDING_BETWEEN_ROWS;
//     let newWidth = newHeight * originalAspectRatio;

//     if (newWidth < MIN_WIDTH_OF_IMAGE) newWidth = MIN_WIDTH_OF_IMAGE;
//     if (newWidth > MAX_WIDTH_OF_IMAGE) newWidth = MAX_WIDTH_OF_IMAGE;

//     const resizedImage: ResizedImage = {
//       ...image,
//       renderedWidth: newWidth,
//       renderedHeight: newHeight,
//       originalAspectRatio,
//       newAspectRatio: newWidth / newHeight,
//     };

//     currentRow.push(resizedImage);

//     const currentRowWidth = currentRow.reduce((acc, img) => acc + img.renderedWidth + PADDING_BETWEEN_IMAGES, 0);

//     if (currentRow.length >= MIN_IMAGES_PER_ROW && currentRowWidth >= TOTAL_WIDTH_OF_VIEW) {
//       rows.push({ images: currentRow, rowHeight: ROW_HEIGHT });
//       currentRow = [];
//     }

//     if (currentRow.length === MAX_IMAGES_PER_ROW) {
//       rows.push({ images: currentRow, rowHeight: ROW_HEIGHT });
//       currentRow = [];
//     }
//   }

//   // Add any remaining images to the last row
//   if (currentRow.length > 0) {
//     rows.push({ images: currentRow, rowHeight: ROW_HEIGHT });
//   }

//   return rows;


function normalizeLastRows(rows: IRow[]): IRow[] {
  // we find the one with the lowest aspect ratio sum
  let rowWithLowestAspectRatioSumIndex = rows.reduce(
    (minIndex, row, index) => (row.aspectRatioSum! < rows[minIndex].aspectRatioSum! ? index : minIndex),
    0,
  );

  // last row has the lowest aspect ratio sum
  if (rowWithLowestAspectRatioSumIndex === rows.length - 1) {
    const secondLastRow = rows[rowWithLowestAspectRatioSumIndex - 1];
    const lastImageAspectRatio = secondLastRow.images[secondLastRow.images.length - 1].newAspectRatio;

    const newLastRowAspectRatioSum = lastImageAspectRatio + rows[rowWithLowestAspectRatioSumIndex].aspectRatioSum!;
    const newSecondLastRowAspectRatio = secondLastRow.aspectRatioSum! - lastImageAspectRatio;

    if (newLastRowAspectRatioSum < newSecondLastRowAspectRatio) {
      // only if the after the update the the row no overcome the one from before
      const lastImage = rows[rowWithLowestAspectRatioSumIndex - 1].images.pop();
      rows[rowWithLowestAspectRatioSumIndex].images.unshift(lastImage!);

      // Recalculate aspect ratio sums for affected rows
      rows[rowWithLowestAspectRatioSumIndex - 1].aspectRatioSum! -= lastImage!.newAspectRatio;
      rows[rowWithLowestAspectRatioSumIndex].aspectRatioSum! += lastImage!.newAspectRatio;
    }
  }

  return rows;
}

export const normalizedRows = (rows) => {
    // we find the one with the lowest aspect ratio sum
    let rowWithLowestAspectRatioSumIndex = 0;
    rows.forEach((row, index) => {
      if (row.aspectRatioSum! < rows[rowWithLowestAspectRatioSumIndex].aspectRatioSum!) {
        rowWithLowestAspectRatioSumIndex = index;
      }
    });

    // we find the one with the heighest aspect ratio sum before that
    let rowWithHeighestAspectRatioSumIndex = 0;
    rows.forEach((row, index) => {
      if (
        index < rowWithLowestAspectRatioSumIndex &&
        row.aspectRatioSum! > rows[rowWithHeighestAspectRatioSumIndex].aspectRatioSum!
      ) {
        rowWithHeighestAspectRatioSumIndex = index;
      }
    });

    // We loop over all rows starting from the one with the highest aspect ratio sum
    for (let i = rowWithHeighestAspectRatioSumIndex; i < rowWithLowestAspectRatioSumIndex; i++) {
      // We shift the last image of the current row to the next row
      const lastImage = rows[i].images.pop();
      rows[i + 1].images.unshift(lastImage!);

      // Recalculate aspect ratio sums for affected rows
      rows[i].aspectRatioSum = rows[i].images.reduce((sum, img) => sum + img.newAspectRatio, 0);
      rows[i + 1].aspectRatioSum = rows[i + 1].images.reduce((sum, img) => sum + img.newAspectRatio, 0);
    }
  };



  // export function getGroupRows(images: Image[], config: IJustifiedImageGridConfig): IRow[] {
  //   const rows: IRow[] = [];
  //   const aimingImagesPerRow = Math.ceil((config.maxImagesPerRow + config.minImagesPerRow) / 2);
  //   const aimingRowHeight = Math.ceil((config.maxRowHeight + config.minRowHeight) / 2);
  //   const amingRows = Math.ceil(config.groupSize / aimingImagesPerRow);
  //   const idealImageWidth =
  //     (config.totalWidthOfView - config.paddingBetweenImages * (aimingImagesPerRow - 1)) / aimingImagesPerRow;
  //   const idealAspectRatio = idealImageWidth / (aimingRowHeight - config.imageLabelHeight - config.paddingBetweenRows);
  //   const idealAspectRatioSum = idealAspectRatio * aimingImagesPerRow;
  //   const minAspectRatioImage =
  //     (config.totalWidthOfView - config.paddingBetweenImages * (aimingImagesPerRow - 1)) /
  //     config.maxImagesPerRow /
  //     (config.maxRowHeight - config.imageLabelHeight - config.paddingBetweenRows);
  //   const maxAspectRatioImage =
  //     (config.totalWidthOfView - config.paddingBetweenImages * (aimingImagesPerRow - 1)) /
  //     config.minImagesPerRow /
  //     (config.minRowHeight - config.imageLabelHeight - config.paddingBetweenRows);
  //   console.log(` idealAspectRatioSum`, idealAspectRatioSum);
  //   console.log(` idealAspectRatio`, idealAspectRatio);
  //   console.log(` minAspectRatioImage`, minAspectRatioImage);
  //   console.log(` maxAspectRatioImage`, maxAspectRatioImage);
  //   console.log(` idealImageWidth`, idealImageWidth);
  //   console.log(` amingRows`, amingRows);
  //   console.log(` aimingImagesPerRow`, aimingImagesPerRow);
  //   console.log(` aimingRowHeight`, aimingRowHeight);
  //   console.log(` getGroupRows images.length`, images.length, config.groupSize);
  
  //   console.log(` images`, images);
  
  //   // first lets get the aspect ratio of all images in the group within the bounds of the min and max aspect ratio
  //   const aspectRatios: number[] = [];
  
  //   for (const currImage of images) {
  //     const currImageWidth = currImage.width || idealImageWidth;
  //     const currImageHeight = currImage.height || aimingRowHeight - config.imageLabelHeight - config.paddingBetweenRows;
  //     let currImageAspectRatio = currImageWidth / currImageHeight;
  
  //     if (currImageAspectRatio < minAspectRatioImage) {
  //       currImageAspectRatio = minAspectRatioImage;
  //     }
  //     if (currImageAspectRatio > maxAspectRatioImage) {
  //       currImageAspectRatio = maxAspectRatioImage;
  //     }
  //     aspectRatios.push(currImageAspectRatio);
  //   }
  
  //   console.log(` aspectRatios`, aspectRatios);
  //   let currentRow: ResizedImage[] = [];
  //   let currentAspectRatioSum = 0;
  //   for (let imageIndex = 0; imageIndex < images.length; imageIndex++) {
  //     const currImage = images[imageIndex];
  //     const currImageWidth = currImage.width || idealImageWidth;
  //     const currImageHeight = currImage.height || aimingRowHeight - config.imageLabelHeight - config.paddingBetweenRows;
  //     const currImageAspectRatio = aspectRatios[imageIndex];
  
  //     const addImageToRow = () => {
  //       currentAspectRatioSum += currImageAspectRatio;
  //       // we add the image to the current row
  //       currentRow.push({
  //         ...images[imageIndex],
  //         newAspectRatio: currImageAspectRatio,
  //         originalAspectRatio: currImageWidth / currImageHeight,
  //         renderedHeight: aimingRowHeight - config.imageLabelHeight - config.paddingBetweenRows,
  //         renderedWidth: (aimingRowHeight - config.imageLabelHeight - config.paddingBetweenRows) * currImageAspectRatio,
  //       });
  //     };
  
  //     const fninishRow = () => {
  //       rows.push({
  //         images: currentRow,
  //         aspectRatioSum: currentAspectRatioSum,
  //         aspectRatioSumWithoutLast: currentAspectRatioSum - currentRow[currentRow.length - 1].newAspectRatio,
  //         totalWidth: currentRow.reduce((sum, img) => {
  //           return sum + img.renderedWidth;
  //         }, 0),
  //         rowHeight: aimingRowHeight,
  //       } as any);
  //       currentRow = [];
  //       currentAspectRatioSum = 0;
  //     };
  
  //     if (images.length - 1 === imageIndex) {
  //       // last row
  //       addImageToRow();
  //       fninishRow();
  //       break;
  //     }
  
  //     const newAspectRatioSum = currentAspectRatioSum + currImageAspectRatio;
  //     const newDiff = idealAspectRatioSum - newAspectRatioSum;
  //     const currDif = idealAspectRatioSum - currentAspectRatioSum;
  
  //     const newImageWouldDecraseDiff = Math.abs(newDiff) < Math.abs(currDif);
  
  //     const rowIsNotFilled = currentAspectRatioSum + currImageAspectRatio < idealAspectRatioSum;
  
  //     if ((rowIsNotFilled || newImageWouldDecraseDiff) && currentRow.length < config.maxImagesPerRow) {
  //       addImageToRow();
  //     } else {
  //       fninishRow();
  //       addImageToRow();
  //       // todo maybe check if the item first better in the current or the next row
  //     }
  //   }
  
  //   const allRowsLength = rows.reduce((sum, row) => {
  //     return sum + row.images.length;
  //   }, 0);
  
  //   // get average aspect ratio of all rows
  //   const averageAspectRatio =
  //     rows.reduce((sum, row) => {
  //       return sum + row.aspectRatioSum!;
  //     }, 0) / rows.length;
  
  //   const normalizeLastRows = (rows) => {
  //     const shiftImages = (fromRowIndex, toRowIndex) => {
  //       // We loop over all rows starting from the one with the highest aspect ratio sum
  //       for (let i = fromRowIndex; i < toRowIndex; i++) {
  //         // We shift the last image of the current row to the next row
  //         const lastImage = rows[i].images.pop();
  //         rows[i + 1].images.unshift(lastImage!);
  
  //         // Recalculate aspect ratio sums for affected rows
  //         rows[i].aspectRatioSum = rows[i].images.reduce((sum, img) => sum + img.newAspectRatio, 0);
  //         rows[i + 1].aspectRatioSum = rows[i + 1].images.reduce((sum, img) => sum + img.newAspectRatio, 0);
  //       }
  //     };
  
  //     // we find the one with the lowest aspect ratio sum
  //     let rowWithLowestAspectRatioSumIndex = 0;
  //     rows.forEach((row, index) => {
  //       if (row.aspectRatioSum! < rows[rowWithLowestAspectRatioSumIndex].aspectRatioSum!) {
  //         rowWithLowestAspectRatioSumIndex = index;
  //       }
  //     });
  
  //     // last row has the lowest aspect ratio sum
  //     if (rowWithLowestAspectRatioSumIndex === rows.length - 1) {
  //       const secondLastRow = rows[rowWithLowestAspectRatioSumIndex - 1];
  //       const lastImageAspectRatio = secondLastRow.images[secondLastRow.images.length - 1].newAspectRatio;
  //       console.log(` lastImageAspectRatio`, lastImageAspectRatio);
  
  //       const newLastRowAspectRatioSum = lastImageAspectRatio + rows[rowWithLowestAspectRatioSumIndex].aspectRatioSum!;
  //       const newSecondLastRowAspectRatio = secondLastRow.aspectRatioSum! - lastImageAspectRatio;
  
  //       console.log(` newLastRowAspectRatioSum`, newLastRowAspectRatioSum);
  //       console.log(` newSecondLastRowAspectRatio`, newSecondLastRowAspectRatio);
  
  //       if (newLastRowAspectRatioSum < newSecondLastRowAspectRatio) {
  //         // only if the after the update the the row no overcome the one from before
  //         console.log("shift image for last row");
  //         shiftImages(rowWithLowestAspectRatioSumIndex - 1, rowWithLowestAspectRatioSumIndex);
  //       }
  //     }
  //   };
  
  //   console.log(` averageAspectRatio`, averageAspectRatio);
  //   console.log(` allRowsLength`, allRowsLength);
  //   console.log(
  //     ` rows`,
  //     rows.map((row) => row.aspectRatioSum),
  //   );
  //   normalizeLastRows(rows);
  //   normalizeLastRows(rows);
  //   console.log(
  //     ` rows`,
  //     rows.map((row) => row.aspectRatioSum),
  //   );
  
  //   return rows;
  // }






  // let currentRow: ResizedImage[] = [];
  // let currentAspectRatioSum = 0;
  // for (let imageIndex = 0; imageIndex < images.length; imageIndex++) {
  //   const currImage = images[imageIndex];
  //   const currImageWidth = currImage.width || idealImageWidth;
  //   const currImageHeight = currImage.height || aimingRowHeight - config.imageLabelHeight - config.paddingBetweenRows;
  //   const currImageAspectRatio = aspectRatios[imageIndex];

  //   const addImageToRow = () => {
  //     currentAspectRatioSum += currImageAspectRatio;
  //     // we add the image to the current row
  //     currentRow.push({
  //       ...images[imageIndex],
  //       newAspectRatio: currImageAspectRatio,
  //       originalAspectRatio: currImageWidth / currImageHeight,
  //       renderedHeight: aimingRowHeight - config.imageLabelHeight - config.paddingBetweenRows,
  //       renderedWidth: (aimingRowHeight - config.imageLabelHeight - config.paddingBetweenRows) * currImageAspectRatio,
  //     });
  //   };

  //   const fninishRow = () => {
  //     rows.push({
  //       images: currentRow,
  //       aspectRatioSum: currentAspectRatioSum,
  //       aspectRatioSumWithoutLast: currentAspectRatioSum - currentRow[currentRow.length - 1].newAspectRatio,
  //       totalWidth: currentRow.reduce((sum, img) => {
  //         return sum + img.renderedWidth;
  //       }, 0),
  //       rowHeight: aimingRowHeight,
  //     } as any);
  //     currentRow = [];
  //     currentAspectRatioSum = 0;
  //   };

  //   if (images.length - 1 === imageIndex) {
  //     // last row
  //     addImageToRow();
  //     fninishRow();
  //     break;
  //   }

  //   const newAspectRatioSum = currentAspectRatioSum + currImageAspectRatio;
  //   const newDiff = idealAspectRatioSum - newAspectRatioSum;
  //   const currDif = idealAspectRatioSum - currentAspectRatioSum;

  //   const newImageWouldDecraseDiff = Math.abs(newDiff) < Math.abs(currDif);

  //   const rowIsNotFilled = currentAspectRatioSum + currImageAspectRatio < idealAspectRatioSum;

  //   if ((rowIsNotFilled || newImageWouldDecraseDiff) && currentRow.length < config.maxImagesPerRow) {
  //     addImageToRow();
  //   } else {
  //     fninishRow();
  //     addImageToRow();
  //     // todo maybe check if the item first better in the current or the next row
  //   }
  // }

  // const normalizeLastRows = (rows) => {
  //   const shiftImages = (fromRowIndex, toRowIndex) => {
  //     // We loop over all rows starting from the one with the highest aspect ratio sum
  //     for (let i = fromRowIndex; i < toRowIndex; i++) {
  //       // We shift the last image of the current row to the next row
  //       const lastImage = rows[i].images.pop();
  //       rows[i + 1].images.unshift(lastImage!);

  //       // Recalculate aspect ratio sums for affected rows
  //       rows[i].aspectRatioSum = rows[i].images.reduce((sum, img) => sum + img.newAspectRatio, 0);
  //       rows[i + 1].aspectRatioSum = rows[i + 1].images.reduce((sum, img) => sum + img.newAspectRatio, 0);
  //     }
  //   };

  //   // we find the one with the lowest aspect ratio sum
  //   let rowWithLowestAspectRatioSumIndex = 0;
  //   rows.forEach((row, index) => {
  //     if (row.aspectRatioSum! < rows[rowWithLowestAspectRatioSumIndex].aspectRatioSum!) {
  //       rowWithLowestAspectRatioSumIndex = index;
  //     }
  //   });

  //   // last row has the lowest aspect ratio sum
  //   if (rowWithLowestAspectRatioSumIndex === rows.length - 1) {
  //     const secondLastRow = rows[rowWithLowestAspectRatioSumIndex - 1];
  //     const lastImageAspectRatio = secondLastRow.images[secondLastRow.images.length - 1].newAspectRatio;

  //     const newLastRowAspectRatioSum = lastImageAspectRatio + rows[rowWithLowestAspectRatioSumIndex].aspectRatioSum!;
  //     const newSecondLastRowAspectRatio = secondLastRow.aspectRatioSum! - lastImageAspectRatio;

  //     if (newLastRowAspectRatioSum < newSecondLastRowAspectRatio) {
  //       // only if the after the update the the row no overcome the one from before
  //       shiftImages(rowWithLowestAspectRatioSumIndex - 1, rowWithLowestAspectRatioSumIndex);
  //     }
  //   }
  // };

  // normalizeLastRows(rows);
  // normalizeLastRows(rows);

  // return rows;