import React, { FC } from "react";
import { STopNavDefault } from "./styles/STopNavDefault";

interface ITopNavDefault {}

export const TopNavDefault: FC<ITopNavDefault> = ({ children }) => {
  return <STopNavDefault>{children}</STopNavDefault>;
};
