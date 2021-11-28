import React from "react";
import { SLayoutTopNav } from "./styles/SLayoutTopNav";

interface ILayoutTopNav {
  height?: string;
}

export const LayoutTopNav: React.FC<ILayoutTopNav & React.HTMLProps<HTMLDivElement>> = ({  children, ...props }) => {
  return <SLayoutTopNav {...props}>{children}</SLayoutTopNav>;
};
