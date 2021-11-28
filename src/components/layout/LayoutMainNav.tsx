import React from "react";
import { SLayoutMainNav } from "./styles/SLayoutMainNav";

interface ILayoutMainNav {
  width?: number;
}

export const LayoutMainNav: React.FC<ILayoutMainNav & React.HTMLProps<HTMLDivElement>> = ({ children, ...props }) => {
  return <SLayoutMainNav {...props}>{children}</SLayoutMainNav>;
};
