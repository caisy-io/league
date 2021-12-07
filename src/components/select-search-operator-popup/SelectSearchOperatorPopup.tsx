import React from "react";
import { SearchBarOperatorBadgeSelect } from "../search-bar-operator-badge-select";
import { SSelectSearchOperatorPopup } from "./styles/SSelectSearchOperatorPopup";

interface ISelectSearchOperatorPopup {
  operators: string[];
  selected?: string;
  onSelect: (operator: string) => void;
}

export const SelectSearchOperatorPopup: React.FC<ISelectSearchOperatorPopup> = ({ ...props }) => {
  return (
    <SSelectSearchOperatorPopup>
      {props.operators.map((operator) => (
        <SearchBarOperatorBadgeSelect
          onSelect={() => props.onSelect(operator)}
          activated={props.selected?.toLowerCase() === operator.toLowerCase()}
        >
          {operator}
        </SearchBarOperatorBadgeSelect>
      ))}
    </SSelectSearchOperatorPopup>
  );
};
