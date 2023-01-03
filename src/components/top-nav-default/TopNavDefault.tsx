import React, { CSSProperties, FC } from "react";
import { STopNavDefault } from "./styles/STopNavDefault";
import { STopNavDefaultContent } from "./styles/STopNavDefaultContent";

interface ITopNavDefault {
  styleOverwrite?: CSSProperties;
  children?: React.ReactNode;
}

export const TopNavDefault: FC<ITopNavDefault> = ({ children, styleOverwrite }) => {
  return (
    <STopNavDefault styleOverwrite={styleOverwrite}>
      <STopNavDefaultContent>{children}</STopNavDefaultContent>
    </STopNavDefault>
  );
};
