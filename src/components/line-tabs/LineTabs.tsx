import React, { ReactNode, useEffect, useState } from "react";
import { SLineTabs } from "./styles/SLineTabs";
import { SLineTabsLine } from "./styles/SLineTabsLine";

export interface ILineTabsProps {
  hover?: boolean;
  activated?: boolean;
  title?: string | undefined;
  onClick: () => void;
}

export const LineTabs: React.FC<ILineTabsProps> = ({ hover, activated, title, onClick, children }) => {
  return (
    <SLineTabs hover={hover} activated={activated} onClick={onClick}>
      {title}
      {children}
      <SLineTabsLine />
    </SLineTabs>
  );
};
