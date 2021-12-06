import React from "react";
import { SLayoutLegacy } from "./styles/SLayoutLegacy";
interface ILayout {
  style?: any;
}

export const Layout: React.FC<ILayout> = ({ ...props }) => {
  return <SLayoutLegacy style={props.style}>{props.children}</SLayoutLegacy>;
};
