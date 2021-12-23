import React, { FC } from "react";
import { STableRow } from "./styles/STableRow";

interface ITableRow {
  activated?: boolean;
  onClick?: (newActivated: boolean) => void;
}

export const TableRow: FC<ITableRow> = ({ children, activated, onClick }) => {
  return (
    <STableRow activated={activated} onClick={() => onClick?.(!activated)}>
      {children}
    </STableRow>
  );
};
