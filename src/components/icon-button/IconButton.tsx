import React from "react";
import { ISizesSmallMedium } from "../../interfaces";
import { SIconButton } from "./styles/SIconButton";

interface IIconButton {
  size?: ISizesSmallMedium;
  type?: "primary" | "secondary" | "danger";
  activated?: boolean;
  onClick?: (newActivatedValue: boolean) => void;
}

export const IconButton: React.FC<IIconButton> = ({ children, size, type, activated, onClick }) => {
  return (
    <SIconButton onClick={() => onClick?.(!activated)} activated={activated} size={size} type={type}>
      {children}
    </SIconButton>
  );
};
