import React from "react";
import { SearchBarOperatorBadgeSelect } from "../search-bar-operator-badge-select";
import { SSelectSearchOperatorPopup } from "./styles/SSelectSearchOperatorPopup";

interface ISelectSearchOperatorPopup {
  operators: string[];
}

export const SelectSearchOperatorPopup: React.FC<ISelectSearchOperatorPopup> = ({ ...props }) => {
  return (
    <SSelectSearchOperatorPopup>
      {props.operators.map((operator) => (
        <SearchBarOperatorBadgeSelect>{operator}</SearchBarOperatorBadgeSelect>
      ))}
    </SSelectSearchOperatorPopup>
  );
};
