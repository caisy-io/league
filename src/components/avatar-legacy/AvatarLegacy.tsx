import React from "react";
import { Img } from "../../base-components/img/Img";
import { SAvatarLegacy } from "./styles/SAvatarLegacy";
export interface IAvatar {
  imageUrl?: string;
  size?: number;
}

export const AvatarLegacy: React.FC<IAvatar> = ({ imageUrl, ...props }) => {
  return (
    <SAvatarLegacy size={props.size}>
      <>{!imageUrl && <> {props.children}</>}</>
      {imageUrl && <Img lazyload={false} src={imageUrl!} resolution={32}></Img>}
    </SAvatarLegacy>
  );
};
