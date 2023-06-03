import { describe, expect, it } from "@jest/globals";
import { justifyRow } from "./generateRows";

function generateImages(numImages: number, minWidth: number, maxWidth: number, totalWidth: number): any[] {
  const images: any = [];
  for (let i = 0; i < numImages; i++) {
    const width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
    images.push({ renderedWidth: width });
  }

  // Adjust the width of the last image so that the total width of the images is exactly as required
  const currentTotalWidth = images.reduce((sum, img) => sum + img.renderedWidth, 0);
  images[numImages - 1].renderedWidth += totalWidth - currentTotalWidth;
  return images;
}

describe("justifyRow", () => {
  // Test cases are structured as arrays: [row, config, expectedResult]
  const testCases: [string, any, any, any][] = [
    [
      "2 images, total width above target",
      { images: generateImages(2, 300, 350, 700) },
      { totalWidthOfView: 500, paddingBetweenImages: 50 },
      true,
    ],
    [
      "2 images, total width below target",
      { images: generateImages(2, 200, 250, 400) },
      { totalWidthOfView: 500, paddingBetweenImages: 50 },
      true,
    ],
    [
      "2 images, total width already fits target",
      { images: generateImages(2, 200, 250, 400) },
      { totalWidthOfView: 400, paddingBetweenImages: 50 },
      true,
    ],
    [
      "7 images, total width above target",
      { images: generateImages(7, 100, 150, 900) },
      { totalWidthOfView: 800, paddingBetweenImages: 50 },
      true,
    ],
    [
      "7 images, total width below target",
      { images: generateImages(7, 100, 150, 700) },
      { totalWidthOfView: 800, paddingBetweenImages: 50 },
      true,
    ],
    [
      "7 images, total width already fits target",
      { images: generateImages(7, 100, 150, 800) },
      { totalWidthOfView: 800, paddingBetweenImages: 50 },
      true,
    ],
  ];

  testCases.forEach(([name, row, config, expectedResult]) => {
    it(`Test case ${name}`, () => {
      const result = justifyRow(row, config);
      const totalWidth =
        result.images.reduce((sum, img) => sum + img.renderedWidth, 0) +
        config.paddingBetweenImages * (result.images.length - 1);
      // Check if total width is equal to expected total width of view
      const testPassed = totalWidth === config.totalWidthOfView;
      // console.log(`Test case ${index + 1}: ${testPassed ? 'PASSED' : 'FAILED'}`);
      expect(testPassed).toEqual(expectedResult);
    });
  });
});
