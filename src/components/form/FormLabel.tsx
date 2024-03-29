import React from "react";
import { SFormLabel } from "./styles/SFormLabel";

interface IFormLabel {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const FormLabel: React.FC<IFormLabel> = ({ ...props }) => {
  return <SFormLabel style={props.style}>{props.children}</SFormLabel>;
};
