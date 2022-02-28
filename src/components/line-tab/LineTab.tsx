import React from "react";
import { SLineTab } from "./styles/SLineTab";
import { SLineTabLine } from "./styles/SLineTabLine";

interface ILineTabProps {
  hover?: boolean;
  activated?: boolean;
  title?: string | undefined;
  onClick: () => void;
}

export const LineTab: React.FC<ILineTabProps> = ({ hover, activated, title, onClick, children }) => {
  return (
    <SLineTab hover={hover} activated={activated} onClick={onClick}>
      {title}
      {children}
      <SLineTabLine />
    </SLineTab>
  );
};
