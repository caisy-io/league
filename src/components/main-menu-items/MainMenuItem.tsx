import React from "react";
import { Badge, BadgePosition } from "..";
import { SMainMenuItem } from "./styles/SMainMenuItem";
import { SMainMenuItemIcon } from "./styles/SMainMenuItemIcon";
import { SMainMenuItemLabel } from "./styles/SMainMenuItemLabel";
import { SMainMenuItemWrapper } from "./styles/SMainMenuItemWrapper";

interface IMainMenuItem {
  onClick: () => void;
  active?: boolean;
  label?: string;
  withBadge?: boolean;
  badgeContent?: string;
}

export const MainMenuItem: React.FC<IMainMenuItem> = ({ ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.onClick();
  };
  return (
    <>
      <SMainMenuItemWrapper>
        {props.withBadge && props.badgeContent && (
          <Badge value={props.badgeContent} position={BadgePosition.TopRight} />
        )}
        <SMainMenuItem active={props.active} onClick={handleClick}>
          <SMainMenuItemIcon>{props.children}</SMainMenuItemIcon>
        </SMainMenuItem>
        {props.label && <SMainMenuItemLabel>{props.label}</SMainMenuItemLabel>}
      </SMainMenuItemWrapper>
    </>
  );
};
