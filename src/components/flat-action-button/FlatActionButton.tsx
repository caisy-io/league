import React from "react";
import { SFlatActionButton } from "./styles/SFlatActionButton";

export type IFlatActionButtonType = "white" | "blue" | "success" | "danger" | "grey" | "default" | "grey outline";

interface IFlatActionButton {
  type: IFlatActionButtonType;
  onClick?: () => void;
}

export const FlatActionButton: React.FC<IFlatActionButton> = ({ type, onClick, children }) => {
  return (
    <SFlatActionButton type={type} onClick={onClick}>
      {children}
    </SFlatActionButton>
  );
};
