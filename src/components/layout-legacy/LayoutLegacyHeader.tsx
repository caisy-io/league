import React from "react";
import { SLayoutLegacyHeader } from "./styles/SLayoutLegacyHeader";

interface ILayoutHeader {
  width?: string;
  className?: string;
}

export const LayoutHeader: React.FC<ILayoutHeader> = ({ ...props }) => {
  return <SLayoutLegacyHeader className={props.className}>{props.children}</SLayoutLegacyHeader>;
};
