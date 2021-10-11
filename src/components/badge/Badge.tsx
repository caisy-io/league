import React from "react";
import { SBadge } from "./styles/SBadge";
import { SBadgeIconContent } from "./styles/SBadgeIconContent";
import { SBadgeIcon } from "./styles/SBadgeIcon";

export enum BadgePosition {
  TopLeft,
  TopRight,
}

interface IBadge {
  value: string;
  position: BadgePosition;
  color?: string;
  backgroundColor?: string;
  disabled?: boolean;
}

export const Badge: React.FC<IBadge> = ({ ...props }) => {
  return (
    <SBadge>
      <SBadgeIcon
        disabled={props.disabled}
        position={props.position}
        color={props.color}
        backgroundColor={props.backgroundColor}
      >
        <SBadgeIconContent>{props.value}</SBadgeIconContent>
      </SBadgeIcon>
      {props.children}
    </SBadge>
  );
};
