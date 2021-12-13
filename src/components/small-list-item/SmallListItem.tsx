import React, { FC } from "react";
import { SSmallListItem } from "./styles/SSmallListItem";

interface ISmallListItem {
  activated?: boolean;
  onClick?: () => void;
}

export const SmallListItem: FC<ISmallListItem> = ({ children, activated, onClick }) => {
  return (
    <SSmallListItem onClick={onClick} activated={activated}>
      {children}
    </SSmallListItem>
  );
};
