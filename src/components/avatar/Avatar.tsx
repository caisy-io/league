import React from "react";
import { Img } from "../../base-components/img/Img";
import { SAvatar } from "./styles/SAvatar";
export interface IAvatar {
  imageUrl?: string;
  size?:  16 | 20 | 24 | 28 | 32 | 40;
}

export const Avatar: React.FC<IAvatar> = ({ imageUrl, ...props }) => {
  return (
    <SAvatar size={props.size}>
      <>{!imageUrl && <> {props.children}</>}</>
      {imageUrl && <Img lazyload={false} src={imageUrl!} resolution={32}></Img>}
    </SAvatar>
  );
};
