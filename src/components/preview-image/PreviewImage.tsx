import React from "react";
import { Img } from "../../base-components/img/Img";
import { SPreviewImage } from "./styles/SPreviewImage";
export interface IPreviewImage {
  imageUrl?: string;
  size?: number;
}

export const PreviewImage: React.FC<IPreviewImage> = ({ imageUrl, ...props }) => {
  return (
    <SPreviewImage size={props.size}>
      <>{!imageUrl && <> {props.children}</>}</>
      {imageUrl && <Img lazyload={false} src={imageUrl!} resolution={32}></Img>}
    </SPreviewImage>
  );
};
