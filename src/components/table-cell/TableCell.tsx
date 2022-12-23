import React, { FC } from "react";
import { STableCell } from "./styles/STableCell";

interface ITableCell {
  activated?: boolean;
  onClick?: (newActivated: boolean) => void;
  children?: React.ReactNode;
}

export const TableCell: FC<ITableCell> = ({ children, activated, onClick }) => {
  return (
    <STableCell activated={activated} onClick={() => onClick?.(!activated)} data-role="table-cell">
      {children}
    </STableCell>
  );
};
