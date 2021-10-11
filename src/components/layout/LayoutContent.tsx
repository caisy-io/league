import React from "react";
import { SLayoutContent } from "./styles/SLayoutContent";

export const LayoutContent = ({ ...props }) => {
  return <SLayoutContent>{props.children}</SLayoutContent>;
};
