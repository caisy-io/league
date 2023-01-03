import React, { FC } from "react";
import { STopNavDefaultTitle } from "./styles/STopNavDefaultTitle";

export const TopNavDefaultTitle: FC<{ children?: React.ReactNode }> = ({ children }) => (
  <STopNavDefaultTitle>{children}</STopNavDefaultTitle>
);
