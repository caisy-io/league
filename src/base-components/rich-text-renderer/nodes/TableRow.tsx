import React, { FC } from "react";

const TableRow: FC<{ children?: React.ReactNode }> = ({ children }) => <tr>{children}</tr>;

export default TableRow;
