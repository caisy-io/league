import React from 'react';
import { SMenuListItem } from './styles/SMenuListItem';

export type IMenuListItemSize = "small" | "medium";

export interface IMenuListItemProps {
  size?: IMenuListItemSize,
  disabled?: boolean,
  activated?: boolean,
}

export const MenuListItem: React.FC<IMenuListItemProps> = ({ size, disabled, children, activated }) => {
  return (
    <SMenuListItem activated={activated} size={size} disabled={disabled}>
      {children}
    </SMenuListItem>
  )
}
