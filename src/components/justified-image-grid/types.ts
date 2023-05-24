export type IJustifiedImageGridEvent = {
  rowIndex: number;
  columnIndex: number;
  id: string;
}

export type IJustifiedImageGrid = {
  images: Image[];
  totalCount?: number;
  loadNextPage: () => Promise<void> ;
  config: IJustifiedImageGridConfig;
  onImageSelection?: (event: IJustifiedImageGridEvent) => void;
  onImageClick?: (event: IJustifiedImageGridEvent) => void;
};

export type Image = {
  width: number;
  height: number;
  src: string;
  id: string;
  description?: string;
  blurHash?: string;
  title?: string;
  originType?: string;
  label?: string;
  selected?: boolean;
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
  __loading?: boolean
  aspectRatioSum?: number
  totalWidth?: number
};

export type IJustifiedImageGridConfig = {
  imageLabelHeight: number;
  maxImagesPerRow: number;
  minImagesPerRow: number;
  maxWidthOfImage: number;
  minWidthOfImage: number;
  paddingBetweenImages: number;
  paddingBetweenRows: number;
  maxRowHeight: number;
  minRowHeight: number;
  totalWidthOfView: number;
  avgRowHeight: number;
  avgImageWidth: number;
  groupSize: number;
  paddingAroundGrid: number;
  scrollViewHeight: number;
  resizeHeight: number;
  svgPadding: number;
  imageTitleFallback?: string;
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
  paddingAroundGrid?: number;
  scrollViewHeight?: number;
  resizeHeight?: number;
  svgPadding?: number;
  imageTitleFallback?: string;
}