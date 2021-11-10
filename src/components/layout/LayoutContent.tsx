import React from "react";
import { SLayoutContent } from "./styles/SLayoutContent";
interface ILayoutContent {
  style?: any;
  width?: string;
}

export const LayoutContent: React.FC<ILayoutContent>  = ({ ...props }) => {
  return <SLayoutContent style={props.style} width={props.width}>{props.children}</SLayoutContent>;
};
