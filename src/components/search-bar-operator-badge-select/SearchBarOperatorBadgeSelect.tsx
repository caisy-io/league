import React from "react";
import { SSearchBarOperatorBadgeSelect } from "./styles/SSearchBarOperatorBadgeSelect";

export interface ISearchBarOperatorBadgeSelectProps {
  hover?: boolean;
  activated?: boolean;
  onSelect?: () => void;
}

export const SearchBarOperatorBadgeSelect: React.FC<ISearchBarOperatorBadgeSelectProps> = ({ onSelect, ...props }) => {
  return (
    <SSearchBarOperatorBadgeSelect onClick={onSelect} {...props}>
      {props.children}
    </SSearchBarOperatorBadgeSelect>
  );
};
