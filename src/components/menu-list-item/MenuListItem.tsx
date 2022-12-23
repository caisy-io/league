import React from "react";
import { SMenuListItem } from "./styles/SMenuListItem";

export type IMenuListItemSize = "small" | "medium";

export interface IMenuListItemProps {
  size?: IMenuListItemSize;
  disabled?: boolean;
  activated?: boolean;
  onClick?: (e: Event) => void;
  children?: React.ReactNode;
  isLast?: boolean;
}

export const MenuListItem: React.FC<IMenuListItemProps> = ({
  size,
  disabled,
  children,
  activated,
  onClick,
  isLast,
}) => {
  return (
    <SMenuListItem size={size} disabled={disabled} onClick={onClick} activated={activated} isLast={isLast}>
      {children}
    </SMenuListItem>
  );
};
