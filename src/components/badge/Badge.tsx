import React, { FC, forwardRef, useEffect, useRef } from "react";
import { ISizes } from "../../interfaces";
import { EBadgePosition } from "./EBadgePosition";
import { SBadge } from "./styles/SBadge";
import { SBadgeIcon } from "./styles/SBadgeIcon";
import { SBadgeIconContent } from "./styles/SBadgeIconContent";

export type IBadgeType = "regular" | "important" | "white" | "dark" | "color";

export interface IBadgeProps {
  value: string,
  position: EBadgePosition,
  type: IBadgeType,
  size?: ISizes,
  styleOverwrite?: string,
  children?,
  ref?
}

export const Badge: FC<IBadgeProps> = forwardRef(({ children, value, position, type, size, styleOverwrite }: IBadgeProps, ref: any) => {
  const badgeRef = useRef<HTMLElement>(null);
  const [width, setWidth] = React.useState(0);
  // calculate width of the badge
  useEffect(() => {
    const badgeWidth = badgeRef.current ? badgeRef.current.offsetWidth : 0;
    setWidth(badgeWidth);
  }, [value, badgeRef.current]);

  return (
    <SBadge ref={ref} styleOverwrite={styleOverwrite}>
      <SBadgeIcon ref={badgeRef} value={value} position={position} type={type} size={size} width={width}>
        <SBadgeIconContent type={type} size={size}>
          {type !== "color" && value}
        </SBadgeIconContent>
      </SBadgeIcon>
      {children}
    </SBadge>
  );
});
