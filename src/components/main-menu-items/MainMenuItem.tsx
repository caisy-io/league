import React from "react";
import { SMainMenuItem } from "./styles/SMainMenuItem";
import { SMainMenuItemIcon } from "./styles/SMainMenuItemIcon";
import { SMainMenuItemLabel } from "./styles/SMainMenuItemLabel";
import { SMainMenuItemWrapper } from "./styles/SMainMenuItemWrapper";

interface IMainMenuItem {
  onClick: () => void;
  activated?: boolean;
  label?: string;
  ref?: any;
}

export const MainMenuItem: React.FC<IMainMenuItem> = ({ ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.onClick();
  };
  return (
    <>
      <SMainMenuItemWrapper ref={props.ref}>
        <SMainMenuItem activated={props.activated} onClick={handleClick}>
          <SMainMenuItemIcon>{props.children}</SMainMenuItemIcon>
        </SMainMenuItem>
        {props.label && <SMainMenuItemLabel>{props.label}</SMainMenuItemLabel>}
      </SMainMenuItemWrapper>
    </>
  );
};
