import React from "react";
import { SLayoutLegacyHeader } from "./styles/SLayoutLegacyHeader";

interface ILayoutHeader {
  width?: string;
  className?: string;
  children?: React.ReactNode;
}

export const LayoutHeader: React.FC<ILayoutHeader> = ({ ...props }) => {
  return <SLayoutLegacyHeader className={props.className}>{props.children}</SLayoutLegacyHeader>;
};
