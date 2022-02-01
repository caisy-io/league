import React from 'react';
import { SMenuListItem } from './styles/SMenuListItem';

export type IMenuListItemSize = "small" | "medium";

export interface IMenuListItemProps {
  size?: IMenuListItemSize,
  disabled?: boolean,
  onClick?: (e: Event) => void;
  children?
}

export const MenuListItem: React.FC<IMenuListItemProps> = ({ size, disabled, children, onClick }) => {
  return (
    <SMenuListItem size={size} disabled={disabled} onClick={onClick}>
      {children}
    </SMenuListItem>
  )
}
