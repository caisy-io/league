import React from "react";
import { SLineTab } from "./styles/SLineTab";
import { SLineTabLine } from "./styles/SLineTabLine";
import { SLineTabErrorsCountBadge } from "./styles/SLineTabErrorsCountBadge";

interface ILineTabProps {
  hover?: boolean;
  activated?: boolean;
  hasError?: boolean;
  title?: string | undefined;
  onClick: () => void;
  children?: React.ReactNode;
  errorsCount?: number;
  styleOverwrite?: any;
}

export const LineTab: React.FC<ILineTabProps> = ({
  hover,
  activated,
  title,
  onClick,
  children,
  hasError = false,
  errorsCount = 0,
  styleOverwrite,
}) => {
  return (
    <SLineTab styleOverwrite={styleOverwrite} hover={hover} activated={activated} onClick={onClick} hasError={hasError}>
      {hasError && errorsCount > 0 && (
        <SLineTabErrorsCountBadge className="errors-count-badge">
          {errorsCount}
        </SLineTabErrorsCountBadge>
      )}
      {title}
      {children}
      <SLineTabLine />
    </SLineTab>
  );
};
