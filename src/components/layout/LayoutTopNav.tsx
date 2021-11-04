import React from "react";
import { SLayoutTopNav } from "./styles/SLayoutTopNav";

interface ILayoutTopNav {
  height?: string;
  className?: string;
}

export const LayoutTopNav: React.FC<ILayoutTopNav> = ({ ...props }) => {
  return <SLayoutTopNav height={props.height} className={props.className}>{props.children}</SLayoutTopNav>;
};
