import React from "react";
import { SLayoutLegacySider } from "./styles/SLayoutLegacySider";

interface ILayoutSider {}

export const LayoutSider: React.FC<ILayoutSider> = ({ ...props }) => {
  return <SLayoutLegacySider>{props.children}</SLayoutLegacySider>;
};
