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
  activeOption?: (option) => boolean;
}

export const MicroMenu: React.FC<IMicroMenu> = ({ menuHeight, options, onOptionClick, renderItem, activeOption }) => {
  return (
    <SMicroMenu menuHeight={menuHeight}>
      <Scrollbar>
        {options.map((option) => (
          <SMicroMenuOption
            renderItem={!!renderItem}
            key={option.key}
            activeOption={!!activeOption?.(option)}
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
