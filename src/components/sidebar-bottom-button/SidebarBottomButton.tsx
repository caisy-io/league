import React, { MouseEventHandler } from "react";
import { SSidebarBottomButton } from "./styles/SSidebarBottomButton";

interface ISidebarBottomButton {
  active?: boolean;
  onClick?: (e: MouseEventHandler<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

export const SidebarBottomButton: React.FC<ISidebarBottomButton> = ({ onClick, active, children }) => {
  return (
    <SSidebarBottomButton active={active} onClick={onClick}>
      {children}
    </SSidebarBottomButton>
  );
};
