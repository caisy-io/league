import React from "react";
import { SLayoutTopNav } from "./styles/SLayoutTopNav";

interface ILayoutTopNav {
  height?: string;
  className?: string;
}

export const LayoutTopNav: React.FC<ILayoutTopNav> = ({  children, ...props }) => {
  return <SLayoutTopNav {...props}>{children}</SLayoutTopNav>;
};
