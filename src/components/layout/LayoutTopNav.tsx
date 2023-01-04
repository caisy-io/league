import React from "react";
import { SLayoutTopNav } from "./styles/SLayoutTopNav";

interface ILayoutTopNav {
  height?: string;
  styleOverwrite?: any;
  children?: React.ReactNode
}

export const LayoutTopNav: React.FC<ILayoutTopNav> = ({
  children,
  styleOverwrite,
}) => {
  return <SLayoutTopNav styleOverwrite={styleOverwrite}>{children}</SLayoutTopNav>;
};
