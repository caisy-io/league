import React from "react";
import { SLayoutMainNav } from "./styles/SLayoutMainNav";

interface ILayoutMainNav {
  style?: any;
  width?: number;
}

export const LayoutMainNav: React.FC<ILayoutMainNav> = ({ ...props }) => {
  return <SLayoutMainNav style={props.style} width={props.width}>{props.children}</SLayoutMainNav>;
};
