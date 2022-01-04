import React from "react";
import { SFlatActionButton } from "./styles/SFlatActionButton";

export type IFlatActionButtonType = "white" | "blue" | "success" | "danger" | "grey" | "default" | "grey outline";

interface IFlatActionButton {
  type: IFlatActionButtonType;
  onClick?: () => void;
  width?: string;
  height?: string;
  disabled?: boolean;
}

export const FlatActionButton: React.FC<IFlatActionButton> = ({
  type,
  width,
  height,
  onClick,
  disabled,
  children,
}) => {
  return (
    <SFlatActionButton disabled={disabled} type={type} width={width} height={height} onClick={onClick}>
      {children}
    </SFlatActionButton>
  );
};
