import React from "react";
import { SLayoutMainNav } from "./styles/SLayoutMainNav";

interface ILayoutMainNav {
  style?: any;
}

export const LayoutMainNav: React.FC<ILayoutMainNav> = ({ ...props }) => {
  return <SLayoutMainNav style={props.style}>{props.children}</SLayoutMainNav>;
};
