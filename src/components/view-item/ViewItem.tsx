import React from "react";
import { SViewItem } from "./styles/SViewItem";

interface IViewItem {
  children?;
  isChild?: boolean;
  active?: boolean;
}

export const ViewItem: React.FC<IViewItem> = ({ children, isChild, active }) => {
  return (
    <SViewItem isChild={isChild} active={active}>
      {children}
    </SViewItem>
  );
};
