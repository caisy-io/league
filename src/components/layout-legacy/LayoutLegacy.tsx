import React from "react";
import { SLayoutLegacy } from "./styles/SLayoutLegacy";
interface ILayout {
  style?: any;
  children?: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ ...props }) => {
  return <SLayoutLegacy style={props.style}>{props.children}</SLayoutLegacy>;
};
