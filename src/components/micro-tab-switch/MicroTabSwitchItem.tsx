import React from 'react';
import {SMicroTabSwitchItem} from "./styles/SMicroTabSwitchItem";

export interface IMicroTabSwitchItem {
  active?: boolean;
  children: any;
  onClick?: () => void;
}

export const MicroTabSwitchItem: React.FC<IMicroTabSwitchItem> = ({children, active, onClick}) => {
  return (
    <SMicroTabSwitchItem active={active} onClick={onClick}>
      {children}
    </SMicroTabSwitchItem>
  )
}
