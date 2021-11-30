import React, {FC} from "react";
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

export const Badge: FC<IBadgeProps> = ({ children, value, position, type, size }) => {

  return (
    <SBadge>
      <SBadgeIcon value={value} position={position} type={type} size={size}>
        <SBadgeIconContent  type={type} size={size}>{type !== "color" && value}</SBadgeIconContent>
      </SBadgeIcon>
      {children}
    </SBadge>
  );
};
