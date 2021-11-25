import React from "react";
import { SLayoutLegacyContent } from "./styles/SLayoutLegacyContent";

export const LayoutContent = ({ ...props }) => {
  return <SLayoutLegacyContent>{props.children}</SLayoutLegacyContent>;
};
