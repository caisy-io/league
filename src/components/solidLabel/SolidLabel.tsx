import React from "react";
import { SSolidLabel } from "./styles/SSolidLabel";

export type ISolidLabelType = "default" | "important" | "green" | "red" | "yellow" | "grey" | "greyOutline";

export interface IButtonProps {
  type?: ISolidLabelType;
}

export const SolidLabel: React.FC = (props) => {
  return (
    <SSolidLabel {...props}>
      {props.children}
    </SSolidLabel>
  );
};
