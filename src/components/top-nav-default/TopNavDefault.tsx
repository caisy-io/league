import React, { FC } from "react";
import { STopNavDefault } from "./styles/STopNavDefault";
import { STopNavDefaultContent } from "./styles/STopNavDefaultContent";

interface ITopNavDefault {}

export const TopNavDefault: FC<ITopNavDefault> = ({ children }) => {
  return (
    <STopNavDefault>
      <STopNavDefaultContent>{children}</STopNavDefaultContent>
    </STopNavDefault>
  );
};
