import React from "react";
import { SFlatActionButton } from "./styles/SFlatActionButton";

export type IFlatActionButtonType = "white" | "blue" | "success" | "danger" | "grey" | "default" | "grey outline";

interface IFlatActionButton {
  type: IFlatActionButtonType;
}

export const FlatActionButton: React.FC<IFlatActionButton> = ({ ...props }) => {
  return <SFlatActionButton {...props}>{props.children}</SFlatActionButton>;
};
