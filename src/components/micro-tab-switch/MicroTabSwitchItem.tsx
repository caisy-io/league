import React from "react";
import { SMicroTabSwitchItem } from "./styles/SMicroTabSwitchItem";

export interface IMicroTabSwitchItem {
  active?: boolean;
  disabled?: boolean;
  children: any;
  onClick?: () => void;
}

export const MicroTabSwitchItem: React.FC<IMicroTabSwitchItem> = ({ children, active, onClick, disabled }) => {
  return (
    <SMicroTabSwitchItem active={active} onClick={onClick} disabled={disabled}>
      {children}
    </SMicroTabSwitchItem>
  );
};
