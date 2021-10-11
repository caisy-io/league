import React from "react";
import { SLayoutHeader } from "./styles/SLayoutHeader";

interface ILayoutHeader {
  width?: string;
  className?: string;
}

export const LayoutHeader: React.FC<ILayoutHeader> = ({ ...props }) => {
  return <SLayoutHeader className={props.className}>{props.children}</SLayoutHeader>;
};
