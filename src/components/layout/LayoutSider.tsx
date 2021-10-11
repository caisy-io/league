import React from "react";
import { SLayoutSider } from "./styles/SLayoutSider";

interface ILayoutSider {}

export const LayoutSider: React.FC<ILayoutSider> = ({ ...props }) => {
  return <SLayoutSider>{props.children}</SLayoutSider>;
};
