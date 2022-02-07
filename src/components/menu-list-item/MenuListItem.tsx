import React from 'react';
import { SMenuListItem } from './styles/SMenuListItem';

export type IMenuListItemSize = "small" | "medium";

export interface IMenuListItemProps {
  size?: IMenuListItemSize,
  disabled?: boolean,
  activated?: boolean,
  onClick?: (e: Event) => void;
  children?
}

export const MenuListItem: React.FC<IMenuListItemProps> = ({ size, disabled, children,activated, onClick }) => {
  return (
    <SMenuListItem size={size} disabled={disabled} onClick={onClick} activated={activated}>
      {children}
    </SMenuListItem>
  )
}
