import React from "react";
import { SLayoutContent } from "./styles/SLayoutContent";
interface ILayoutContent {
  style?: any;
}

export const LayoutContent: React.FC<ILayoutContent>  = ({ ...props }) => {
  return <SLayoutContent style={props.style}>{props.children}</SLayoutContent>;
};
