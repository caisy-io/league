import React from "react";
import { SMainMenuItem } from "./styles/SMainMenuItem";
import { SMainMenuItemIcon } from "./styles/SMainMenuItemIcon";
import { SMainMenuItemLabel } from "./styles/SMainMenuItemLabel";
import { SMainMenuItemWrapper } from "./styles/SMainMenuItemWrapper";

interface IMainMenuItem {
  onClick: () => void;
  active?: boolean;
  label?: string;
}

export const MainMenuItem: React.FC<IMainMenuItem> = ({ ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.onClick();
  };
  return (
    <>
      <SMainMenuItemWrapper>
        <SMainMenuItem active={props.active} onClick={handleClick}>
          <SMainMenuItemIcon>{props.children}</SMainMenuItemIcon>
        </SMainMenuItem>
        {props.label && <SMainMenuItemLabel>{props.label}</SMainMenuItemLabel>}
      </SMainMenuItemWrapper>
    </>
  );
};
