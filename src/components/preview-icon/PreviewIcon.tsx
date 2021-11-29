import React from "react";
import { SPreviewIcon } from "./styles/SPreviewIcon";

export interface IPreviewIcon {
  icon?: React.ReactNode;
  size: number;
}

export const PreviewIcon: React.FC<IPreviewIcon> = ({ icon, ...props }) => {
  return (
    <SPreviewIcon size={props.size}>
      {icon}
    </SPreviewIcon>
  );
};
