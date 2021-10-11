import React from "react";
import { Img } from "../../base-components/img/Img";
import { SAvatar } from "./styles/SAvatar";

interface IAvatar {
  imageUrl?: string;
  size?: number;
}

export const Avatar: React.FC<IAvatar> = ({ imageUrl, ...props }) => {
  return (
    <SAvatar size={props.size}>
      <>{!imageUrl && <> {props.children}</>}</>
      {imageUrl && <Img lazyload={false} src={imageUrl!} resolution={32}></Img>}
    </SAvatar>
  );
};
