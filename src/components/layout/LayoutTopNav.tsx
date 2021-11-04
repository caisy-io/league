import React from "react";
import { SLayoutTopNav } from "./styles/SLayoutTopNav";

interface ILayoutTopNav {
  width?: string;
  className?: string;
}

export const LayoutTopNav: React.FC<ILayoutTopNav> = ({ ...props }) => {
  return <SLayoutTopNav className={props.className}>{props.children}</SLayoutTopNav>;
};
