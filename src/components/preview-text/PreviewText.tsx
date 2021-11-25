import React from "react";
import { SPreviewText } from "./styles/SPreviewText";
export interface IPreviewText {
  size: number;
}

export const PreviewText: React.FC<IPreviewText> = ({ ...props }) => {
  return (
    <SPreviewText size={props.size}>
      {props.children}
    </SPreviewText>
  );
};
