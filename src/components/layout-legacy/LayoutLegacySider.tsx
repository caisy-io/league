import React from "react";
import { SLayoutLegacySider } from "./styles/SLayoutLegacySider";

export const LayoutSider: React.FC = ({ ...props }) => {
  return <SLayoutLegacySider>{props.children}</SLayoutLegacySider>;
};
