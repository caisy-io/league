import React from "react";
import { SLayoutMainNav } from "./styles/SLayoutMainNav";

interface ILayoutMainNav {
  width?: number;
  styleOverwrite?: any;
  children?: React.ReactNode;
}

export const LayoutMainNav: React.FC<ILayoutMainNav> = ({ children, styleOverwrite }) => {
  return <SLayoutMainNav styleOverwrite={styleOverwrite}>{children}</SLayoutMainNav>;
};
