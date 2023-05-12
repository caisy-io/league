export type IJustifiedImageGrid = {
  images: Image[];
  groupSize: number;
  scrollToIndex?: number;
  rowHeight: number;
  totalCount?: number;
  loadNextPage: () => Promise<void> ;
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

export type Row = {
  images: ResizedImage[];
  rowHeight: number;
  __loading?: true
};
