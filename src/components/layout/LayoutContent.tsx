import React from "react";
import { SLayoutContent } from "./styles/SLayoutContent";
interface ILayoutContent {
  style?: any;
  width?: string;
}

export const LayoutContent: React.FC<ILayoutContent>  = ({children, ...props }) => {
  return <SLayoutContent { ...props }>{children}</SLayoutContent>;
};
