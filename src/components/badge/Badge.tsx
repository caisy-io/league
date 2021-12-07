import React, { FC, forwardRef } from "react";
import { ISizes } from "../../interfaces/";
import { EBadgePosition } from "./EBadgePosition";
import { SBadge } from "./styles/SBadge";
import { SBadgeIcon } from "./styles/SBadgeIcon";
import { SBadgeIconContent } from "./styles/SBadgeIconContent";

export type IBadgeType = "regular" | "important" | "white" | "dark" | "color";

export interface IBadgeProps {
  value: string;
  position: EBadgePosition;
  type: IBadgeType;
  size?: ISizes;
  children?
  ref?
}

export const Badge: FC<IBadgeProps> = forwardRef(({ children, value, position, type, size }: IBadgeProps, ref: any) => {
  return (
    <SBadge ref={ref}>
      <SBadgeIcon value={value} position={position} type={type} size={size}>
        <SBadgeIconContent type={type} size={size}>
          {type !== "color" && value}
        </SBadgeIconContent>
      </SBadgeIcon>
      {children}
    </SBadge>
  );
});
