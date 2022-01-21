import React, { FC, AllHTMLAttributes } from "react";
import { SListItem } from "./styles/SListItem";

interface IListItem {
  activated?: boolean;
}

export const ListItem: FC<IListItem & AllHTMLAttributes<HTMLElement>> = ({ children, activated, ...props }) => {
  return (
    <SListItem activated={activated} {...props}>
      {children}
    </SListItem>
  );
};
