import React from "react";
import { SUploadMenuItemLabel } from "./styles/SUploadMenuItemLabel";

type TUploadMenuItemStatus = "default" | "dragging" | "loading" | "success" | "hover" | "activated";

interface IUploadMenuItem {
  state?: TUploadMenuItemStatus;
  children?
}

export const UploadMenuItemLabel: React.FC<IUploadMenuItem> = ({ state, children }) => {
  return (
    <SUploadMenuItemLabel state={state}>
      {children}
    </SUploadMenuItemLabel>
  );
};
