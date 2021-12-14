import React from "react";
import { SSolidLabel } from "./styles/SSolidLabel";

export type ISolidLabelType = "default" | "important" | "green" | "red" | "yellow" | "grey" | "greyOutline";

export interface ISolidLabelProps {
  type?: ISolidLabelType;
  style?: object;
  onClick?: () => void;
}

export const SolidLabel: React.FC<ISolidLabelProps> = (props) => {
  return <SSolidLabel {...props}>{props.children}</SSolidLabel>;
};
