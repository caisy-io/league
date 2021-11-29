import React from "react";
import { SLayoutTopNav } from "./styles/SLayoutTopNav";

interface ILayoutTopNav {
  height?: string;
  styleOverwrite?: any;
}

export const LayoutTopNav: React.FC<ILayoutTopNav> = ({
  children,
  styleOverwrite,
}) => {
  return <SLayoutTopNav styleOverwrite={styleOverwrite}>{children}</SLayoutTopNav>;
};
