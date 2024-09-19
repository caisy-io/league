import React from "react";
import { SLineTab } from "./styles/SLineTab";
import { SLineTabLine } from "./styles/SLineTabLine";

interface ILineTabProps {
  hover?: boolean;
  activated?: boolean;
  hasError?: boolean;
  title?: string | undefined;
  onClick: () => void;
  children?: React.ReactNode;
  errorsCount?: number;
}

export const LineTab: React.FC<ILineTabProps> = ({
  hover,
  activated,
  title,
  onClick,
  children,
  hasError = false,
  errorsCount = 0,
}) => {
  console.log("errorsCount > 0", errorsCount > 0);
  return (
    <SLineTab hover={hover} activated={activated} onClick={onClick} hasError={hasError}>
      {hasError && errorsCount > 0 && <span>{errorsCount}</span>}
      {title}
      {children}
      <SLineTabLine />
    </SLineTab>
  );
};
