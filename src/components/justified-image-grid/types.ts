export type IJustifiedImageGrid = {
  images: Image[];
  rowHeight: number;
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
};
