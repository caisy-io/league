import React, { ReactNode } from "react";
import { SComponentImage } from "./styles/SComponentImage";
import { SInnerRectangle } from "./styles/SInnerRectangle";

export type IComponentImageTypes = "open" | "grid" | "list-item";

interface IComponentImage {
  type?: IComponentImageTypes;
  image?: ReactNode;
}

export const ComponentImage: React.FC<IComponentImage> = ({ type, image }) => {
  return (
    <SComponentImage type={type}>
      <SInnerRectangle type={type}>{image}</SInnerRectangle>
    </SComponentImage>
  );
};
