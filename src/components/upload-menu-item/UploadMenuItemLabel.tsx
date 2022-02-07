import React from "react";
import { SUploadMenuItemLabel } from "./styles/SUploadMenuItemLabel";


type TUploadMenuItemStatus = "default" | "dragging" | "loading" | "success" | "hover" | "activated";

interface IUploadMenuItem {
  state?: TUploadMenuItemStatus;
  percentageLoaded?: number;
  itemCount?: number;
  children?
}

export const UploadMenuItemLabel: React.FC<IUploadMenuItem> = ({ state, percentageLoaded, itemCount, children }) => {
  return (
    <SUploadMenuItemLabel state={state}>
      {children}
    </SUploadMenuItemLabel>
  );
};
