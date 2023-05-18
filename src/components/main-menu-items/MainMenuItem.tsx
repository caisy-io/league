import React, { forwardRef } from "react";
import { SMainMenuItem } from "./styles/SMainMenuItem";
import { SMainMenuItemIcon } from "./styles/SMainMenuItemIcon";
import { SMainMenuItemLabel } from "./styles/SMainMenuItemLabel";
import { SMainMenuItemWrapper } from "./styles/SMainMenuItemWrapper";
import { SMainMenuItemText } from "./styles/SMainMenuItemText";

interface IMainMenuItem {
  onClick?: () => void;
  activated?: boolean;
  label?: string;
  children?: React.ReactNode;
  expanded?: boolean;
  itemText?: string;
}

export const MainMenuItem: React.FC<IMainMenuItem> = forwardRef(({ ...props }, ref) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.onClick!();
  };

  return (
    <>
      <SMainMenuItemWrapper ref={ref} expanded={props.expanded}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <SMainMenuItem activated={props.activated} onClick={props.onClick && handleClick}>
            <SMainMenuItemIcon>{props.children}</SMainMenuItemIcon>
          </SMainMenuItem>
          {props.expanded && <SMainMenuItemText>{props.itemText}</SMainMenuItemText>}
        </div>
        {props.label && <SMainMenuItemLabel>{props.label}</SMainMenuItemLabel>}
      </SMainMenuItemWrapper>
    </>
  );
});
