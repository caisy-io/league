import React from "react";
import { SLayout } from "./styles/SLayout";
interface ILayout {
  style?: any;
}

export const Layout: React.FC<ILayout> = ({ ...props }) => {
  return <SLayout style={props.style}>{props.children}</SLayout>;
};
