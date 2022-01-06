import React, { FC } from "react";
import { STableHeader } from "./styles/STableHeader";

export const TableHeader: FC = ({ children }) => {
  return <STableHeader>{children}</STableHeader>;
};
