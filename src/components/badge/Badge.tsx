import React from "react";
import { EBadgePosition } from "./EBadgePosition";
import { SBadge } from "./styles/SBadge";
import { SBadgeIcon } from "./styles/SBadgeIcon";
import { SBadgeIconContent } from "./styles/SBadgeIconContent";

export type IBadgeType = "regular" | "important" | "white" | "dark" | "color";
export type IBadgeSizeType = "micro" | "small" | "medium";

export interface IBadgeProps {
  value: string;
  position: EBadgePosition;
  type: IBadgeType;
  size?: IBadgeSizeType;
}

export const Badge: React.FC<IBadgeProps> = ({ children, ...props }) => {

  return (
    <SBadge>
      <SBadgeIcon {...props}>
        <SBadgeIconContent  {...props}>{props.type !== "color" && props.value}</SBadgeIconContent>
      </SBadgeIcon>
      {children}
    </SBadge>
  );
};
