import React from "react";
import { SViewItem } from "./styles/SViewItem";

interface IViewItem {
  children?;
  isChild?: boolean;
  active?: boolean;
  hover?: boolean;
}

export const ViewItem: React.FC<IViewItem> = ({ children, isChild, active, hover }) => {
  return (
    <SViewItem isChild={isChild} active={active} hover={hover}>
      {children}
    </SViewItem>
  );
};
