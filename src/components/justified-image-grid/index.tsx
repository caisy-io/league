import React from 'react';
import { FixedSizeList as List } from 'react-window';

// Define the type for images
type Image = {
  height: number;
  width: number;
} | null;

// Constants
const TOTAL_WIDTH_OF_VIEW = 1400;
const MIN_WIDTH_OF_IMAGE = 260;
const MAX_WIDTH_OF_IMAGE = 600;
const PADDING_BETWEEN_IMAGES = 12;
const MAX_IMAGES_PER_ROW = 5;
const MIN_IMAGES_PER_ROW = 4;

// Calculate the number of images per row and the width of each image.
const calculateRowConfig = (images: Image[]): { imagesPerRow: number, imageWidth: number }[] => {
  // This function will calculate the number of images per row and the width of each image.
  // It will try to maximize the number of images per row, but it will also ensure that
  // the total width does not exceed TOTAL_WIDTH_OF_VIEW and that each image is at least
  // MIN_WIDTH_OF_IMAGE wide.
  const rowConfigs: { imagesPerRow: number, imageWidth: number }[] = [];
  let i = 0;
  while (i < images.length) {
    for (let imagesPerRow = MAX_IMAGES_PER_ROW; imagesPerRow >= MIN_IMAGES_PER_ROW; imagesPerRow--) {
      const imageWidth = (TOTAL_WIDTH_OF_VIEW - PADDING_BETWEEN_IMAGES * (imagesPerRow - 1)) / imagesPerRow;
      if (imageWidth >= MIN_WIDTH_OF_IMAGE && imageWidth <= MAX_WIDTH_OF_IMAGE) {
        rowConfigs.push({ imagesPerRow, imageWidth });
        i += imagesPerRow;
        break;
      }
    }
  }
  return rowConfigs;
};

// Component
const MyList: React.FC<{ images: Image[], rowHeight: number }> = ({ images, rowHeight }) => {
  const rowConfigs = calculateRowConfig(images);
  
  const Row: React.FC<{ index: number, style: React.CSSProperties }> = ({ index, style }) => {
    // Starting index of images for this row
    const start = index * rowConfigs[index].imagesPerRow;
    // Images for this row
    const rowImages = images.slice(start, start + rowConfigs[index].imagesPerRow);
    
    return (
      <div style={style}>
        {rowImages.map((image, i) => {
          if (image === null) return null;
          const aspectRatio = image.width / image.height;
          const width = rowConfigs[index].imageWidth;
          const height = width / aspectRatio;
          return (
            <img
              key={i}
              src={`your_image_source/${i}`}
              alt="image"
              style={{ width, height, marginRight: i < rowImages.length - 1 ? PADDING_BETWEEN_IMAGES : 0 }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <List
      height={500} // For instance.
      itemCount={rowConfigs.length}
      itemSize={rowHeight}
      width={TOTAL_WIDTH_OF_VIEW}
    >
      {Row}
    </List>
  );
};

export default MyList;
