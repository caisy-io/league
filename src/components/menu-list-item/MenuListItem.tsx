import React from 'react';
import { SMenuListItem } from './styles/SMenuListItem';

export type IMenuListItemSize = "small" | "medium";

export interface IMenuListItemProps {
  size?: IMenuListItemSize,
  disabled?: boolean,
  children?
}

export const MenuListItem: React.FC<IMenuListItemProps> = ({ size, disabled, children }) => {
  return (
    <SMenuListItem size={size} disabled={disabled}>
      {children}
    </SMenuListItem>
  )
}
