import React, { FC, MouseEventHandler } from "react";
import { SSearchBarOperatorBadgeSelect } from "./styles/SSearchBarOperatorBadgeSelect";

export interface ISearchBarOperatorBadgeSelectProps {
  activated?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export const SearchBarOperatorBadgeSelect: FC<ISearchBarOperatorBadgeSelectProps> = ({
  onClick,
  activated,
  children
}) => {
  return (
    <SSearchBarOperatorBadgeSelect onClick={onClick} activated={activated}>
      {children}
    </SSearchBarOperatorBadgeSelect>
  );
};
