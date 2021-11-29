import React from "react";
import { SLayoutMainNav } from "./styles/SLayoutMainNav";

interface ILayoutMainNav {
  style?: any;
  width?: number;
}

export const LayoutMainNav: React.FC<ILayoutMainNav> = ({ children, ...props }) => {
  return <SLayoutMainNav {...props}>{children}</SLayoutMainNav>;
};
