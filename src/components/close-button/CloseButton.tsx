import React, { MouseEventHandler } from "react";
import { IconCross } from "../../icons/IconCross";
import { SCloseButton } from "./styles/SCloseButton";
import { SCloseButtonWrapper } from "./styles/SCloseButtonWrapper";

export interface ICloseButtonProps {
  onClose?: (e: MouseEventHandler<HTMLDivElement>) => void;
  children?: React.ReactNode;
}

export const CloseButton: React.FC<ICloseButtonProps> = ({ onClose, children }) => {
  return (
    <SCloseButtonWrapper>
      {children}
      <SCloseButton onClick={onClose}>
        <IconCross variant="close" />
      </SCloseButton>
    </SCloseButtonWrapper>
  );
};
