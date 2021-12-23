import React, { FC } from "react";
import { SListItem } from "./styles/SListItem";

interface IListItem {
  activated?: boolean;
  onClick?: () => void;
}

export const ListItem: FC<IListItem> = ({ children, activated, onClick }) => {
  return (
    <SListItem onClick={onClick} activated={activated}>
      {children}
    </SListItem>
  );
};
