import React from "react";
import { SSearchBarOperatorBadgeSelect } from "./styles/SSearchBarOperatorBadgeSelect";

export interface ISearchBarOperatorBadgeSelectProps {
  hover?: boolean;
  activated?: boolean;
  onSelect?: () => void;
}

export const SearchBarOperatorBadgeSelect: React.FC<ISearchBarOperatorBadgeSelectProps> = ({
  onSelect,
  hover,
  activated,
  ...props
}) => {
  return (
    <SSearchBarOperatorBadgeSelect onClick={onSelect} hover={hover} activated={activated}>
      {props.children}
    </SSearchBarOperatorBadgeSelect>
  );
};
