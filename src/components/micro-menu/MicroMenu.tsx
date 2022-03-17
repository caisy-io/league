import React, { ReactNode } from "react";
import { Scrollbar } from "../scrollbar";
import { SMicroMenu } from "./styles/SMicroMenu";
import { SMicroMenuOption } from "./styles/SMicroMenuOption";

export type IMicroMenuOptions = {
  key: string;
  value: string;
};

export interface IMicroMenu {
  menuHeight?: string;
  options: IMicroMenuOptions[];
  renderItem?: (option) => ReactNode;
  onOptionClick?: (option) => void;
}

export const MicroMenu: React.FC<IMicroMenu> = ({ menuHeight, options, onOptionClick, renderItem }) => {
  return (
    <SMicroMenu menuHeight={menuHeight}>
      <Scrollbar>
        {options.map((option) => (
          <SMicroMenuOption
            renderItem={!!renderItem}
            key={option.key}
            onClick={() => {
              onOptionClick?.(option);
            }}
          >
            {renderItem?.(option) || option.value}
          </SMicroMenuOption>
        ))}
      </Scrollbar>
    </SMicroMenu>
  );
};
