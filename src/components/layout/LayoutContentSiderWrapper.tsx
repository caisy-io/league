import React from "react";
import { SLayoutContentSiderWrapper } from "./styles/SLAyoutContentSiderWrapper";

export const LayoutContentSiderWrapper = ({ ...props }) => {
  return <SLayoutContentSiderWrapper>{props.children}</SLayoutContentSiderWrapper>;
};
