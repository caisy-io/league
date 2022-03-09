import classNames from "classnames";
import React from "react";
import { SViewItem } from "./styles/SViewItem";

interface IViewItem {
  children?;
  isChild?: boolean;
  active?: boolean;
}

export const ViewItem: React.FC<IViewItem> = ({ children, isChild, active }) => {
  const className = classNames({ isChild, active });
  return <SViewItem className={className}>{children}</SViewItem>;
};
