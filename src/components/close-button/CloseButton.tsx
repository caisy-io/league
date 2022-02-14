import React, { MouseEventHandler } from "react";
import { IconCross } from "../../icons/IconCross";
import { SCloseButton } from "./styles/SCloseButton";
import { SCloseButtonWrapper } from "./styles/SCloseButtonWrapper";

export interface ICloseButtonProps {
  onClose?: (e: MouseEventHandler<HTMLDivElement>) => void;
}

export const CloseButton: React.FC<ICloseButtonProps> = ({ onClose, children }) => {
  return (
    <SCloseButtonWrapper onClick={onClose}>
      {children}
      <SCloseButton>
        <IconCross variant="close" />
      </SCloseButton>
    </SCloseButtonWrapper>
  );
};
