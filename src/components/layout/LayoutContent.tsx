import React from "react";
import { SLayoutContent } from "./styles/SLayoutContent";
interface ILayoutContent {
  width?: string;
  styleOverwrite?: any;
}

export const LayoutContent: React.FC<ILayoutContent> = ({ children, styleOverwrite }) => {
  return <SLayoutContent styleOverwrite={styleOverwrite}>{children}</SLayoutContent>;
};
