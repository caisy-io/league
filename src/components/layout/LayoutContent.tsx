import React from "react";
import { SLayoutContent } from "./styles/SLayoutContent";
interface ILayoutContent {
  width?: string;
}

export const LayoutContent: React.FC<ILayoutContent & React.HTMLProps<HTMLDivElement>> = ({ children, ...props }) => {
  return <SLayoutContent {...props}>{children}</SLayoutContent>;
};
