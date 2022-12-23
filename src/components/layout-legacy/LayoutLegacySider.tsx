import React from "react";
import { SLayoutLegacySider } from "./styles/SLayoutLegacySider";

export const LayoutSider: React.FC<{ children?: React.ReactNode }> = ({ ...props }) => {
  return <SLayoutLegacySider>{props.children}</SLayoutLegacySider>;
};
