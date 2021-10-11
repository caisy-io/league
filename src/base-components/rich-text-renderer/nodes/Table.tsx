import React, { FC } from "react";

const Table: FC = ({ children }) => (
  <table>
    <tbody>{children}</tbody>
  </table>
);

export default Table;
