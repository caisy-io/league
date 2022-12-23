import React from "react";
import { SLayout } from "./styles/SLayout";
interface ILayout {
  style?: any;
  className?: any;
  styleOverwrite?: any;
  children?: React.ReactNode
}

export const Layout: React.FC<ILayout> = ({children,className, styleOverwrite }) => {
  return <SLayout className={className} styleOverwrite={styleOverwrite} >{children}</SLayout>;
};
