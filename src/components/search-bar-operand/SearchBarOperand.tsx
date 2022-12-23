import React, { MouseEventHandler } from "react";
import { CloseButton } from "../close-button";
import { SSearchBarOperand } from "./styles/SSearchBarOperand";
import { SSearchBarOperandWrapper } from "./styles/SSearchBarOperandWrapper";
export interface ISearchBarOperandProps {
  activated?: boolean;
  closeable?: boolean;
  onClose?: (e: MouseEventHandler<HTMLDivElement>) => void;
  onClick?: (e: MouseEventHandler<HTMLDivElement>) => void;
  styleOverwrite?: any;
  children?: React.ReactNode;
}

export const SearchBarOperand: React.FC<ISearchBarOperandProps> = ({
  onClick,
  onClose,
  activated,
  children,
  closeable = true,
  styleOverwrite,
}) => {
  return (
    <SSearchBarOperandWrapper styleOverwrite={styleOverwrite} activated={activated} closeable={closeable}>
      <CloseButton onClose={onClose}>
        <SSearchBarOperand activated={activated} onClick={onClick}>
          {children}
        </SSearchBarOperand>
      </CloseButton>
    </SSearchBarOperandWrapper>
  );
};
