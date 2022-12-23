import React, { FC } from "react";

const Table: FC<{ children?: React.ReactNode }> = ({ children }) => (
  <table>
    <tbody>{children}</tbody>
  </table>
);

export default Table;
