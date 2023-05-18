export type IJustifiedImageGrid = {
  images: Image[];
  scrollToIndex?: number;
  rowHeight: number;
  totalCount?: number;
  loadNextPage: () => Promise<void> ;
  config?: IJustifiedImageGridConfigOverwrite;
};

export type Image = {
  width: number;
  height: number;
  src: string;
};

export type ResizedImage = Image & {
  renderedWidth: number;
  renderedHeight: number;
  originalAspectRatio: number;
  newAspectRatio: number;
};

export type IRow = {
  images: ResizedImage[];
  rowHeight: number;
  __loading?: number
  aspectRatioSum?: number
  totalWidth?: number
};

export type IJustifiedImageGridConfig = {
  imageLabelHeight: number;
  maxImagesPerRow: number;
  maxWidthOfImage: number;
  minImagesPerRow: number;
  minWidthOfImage: number;
  paddingBetweenImages: number;
  paddingBetweenRows: number;
  maxRowHeight: number;
  minRowHeight: number;
  totalWidthOfView: number;
  avgRowHeight: number;
  avgImageWidth: number;
  groupSize: number;
}

export type IJustifiedImageGridConfigOverwrite = {
  imageLabelHeight?: number;
  maxImagesPerRow?: number;
  maxWidthOfImage?: number;
  minImagesPerRow?: number;
  minWidthOfImage?: number;
  paddingBetweenImages?: number;
  paddingBetweenRows?: number;
  maxRowHeight?: number;
  minRowHeight?: number;
  totalWidthOfView?: number;
  avgRowHeight?: number;
  avgImageWidth?: number;
  groupSize?: number;
}