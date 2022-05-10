import React from "react";
import { SFlatActionButton } from "./styles/SFlatActionButton";

export type IFlatActionButtonType = "white" | "blue" | "success" | "danger" | "grey" | "default" | "grey outline";

interface IFlatActionButton {
  type: IFlatActionButtonType;
  onClick?: () => void;
  disabled?: boolean;
}

export const FlatActionButton: React.FC<IFlatActionButton> = ({ type, onClick, children, disabled = false }) => {
  return (
    <SFlatActionButton
      type={type}
      onClick={(e) => {
        onClick && e.stopPropagation();
        onClick?.();
      }}
      disabled={disabled}
    >
      {children}
    </SFlatActionButton>
  );
};
