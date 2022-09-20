import React, { useMemo } from "react";
import { CSSProp } from "styled-components";
import { SPopover } from "./styles/SPopover";
import Stackable from "../stackable";
import { vbefore, vcenter, vafter, hbefore, hcenter, hafter } from "../poppable/Poppable.placements";
import { ClickOutside } from "../../utils";

enum EPlacements {
  Top = "top",
  Bottom = "bottom",
  Right = "right",
  Left = "left",
  TopLeft = "topLeft",
  TopRight = "topRight",
  BottomLeft = "bottomLeft",
  BottomRight = "bottomRight",
  LeftTop = "leftTop",
  LeftBottom = "leftBottom",
  RightTop = "rightTop",
  RightBottom = "rightBottom",
  BottomAlignedRight = "bottomAlignedRight",
}

export type TPlacement =
  | "top"
  | "bottom"
  | "right"
  | "left"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "leftTop"
  | "leftBottom"
  | "rightTop"
  | "rightBottom"
  | "bottomAlignedRight";

const getPlacement = (placement: TPlacement | undefined): number => {
  switch (placement) {
    case EPlacements.Top:
      return 0;
    case EPlacements.Bottom:
      return 1;
    case EPlacements.Left:
      return 2;
    case EPlacements.Right:
      return 3;
    case EPlacements.TopLeft:
      return 4;
    case EPlacements.TopRight:
      return 5;
    case EPlacements.BottomLeft:
      return 6;
    case EPlacements.BottomRight:
      return 7;
    case EPlacements.LeftTop:
      return 8;
    case EPlacements.LeftBottom:
      return 9;
    case EPlacements.RightTop:
      return 10;
    case EPlacements.RightBottom:
      return 11;
    case EPlacements.BottomAlignedRight:
      return 12;
    default:
      return 1;
  }
};
interface IPopover {
  placement: TPlacement;
  reference: React.MutableRefObject<null>;
  triangleExtraCSS?: CSSProp;
  trianglecolor?: string;
  disableTriangle?: boolean;
  onClickOutside?: () => void;
  container?: React.MutableRefObject<null>;
  zIndex?: number;
  styleOverwrite?: React.CSSProperties;
  display?: boolean;
}

const getPlacements = (disableTriangle: boolean | undefined, reference: React.MutableRefObject<null>) => (rbr, tbr) => {
  const GAP = disableTriangle ? 8 : 18;

  const offsetWidth = (reference.current as any)?.offsetWidth || 0;
  const offsetHeight = (reference.current as any)?.offsetHeight || 0;

  return [
    { ...vbefore(rbr, tbr, -GAP), ...hcenter(rbr, tbr) }, // Top center
    { ...vafter(rbr, tbr, GAP), ...hcenter(rbr, tbr) }, // Bottom center
    { ...vcenter(rbr, tbr), ...hbefore(rbr, tbr, -GAP) }, // Center left
    { ...vcenter(rbr, tbr), ...hafter(rbr, tbr, GAP) }, // Center right
    { ...vbefore(rbr, tbr, -GAP), left: hbefore(rbr, tbr, -GAP).left + offsetWidth }, // Top left
    { ...vbefore(rbr, tbr, -GAP), left: hafter(rbr, tbr, GAP).left - offsetWidth }, // Top right
    { ...vafter(rbr, tbr, GAP), left: hbefore(rbr, tbr, -GAP).left + offsetWidth }, // Bottom left
    { ...vafter(rbr, tbr, GAP), left: hafter(rbr, tbr, GAP).left - offsetWidth }, // Bottom right
    { top: vcenter(rbr, tbr).top - offsetHeight, ...hbefore(rbr, tbr, -GAP) }, // Left Top
    { top: vcenter(rbr, tbr).top + offsetHeight, ...hbefore(rbr, tbr, -GAP) }, // Left Bottom
    { top: vcenter(rbr, tbr).top - offsetHeight, ...hafter(rbr, tbr, GAP) }, // Right Top
    { top: vcenter(rbr, tbr).top + offsetHeight, ...hafter(rbr, tbr, GAP) }, // Right Bottom
    { ...hafter(rbr, tbr, -80), ...vafter(rbr, tbr, 16) }, // Bottom aligned right
  ];
};

export const Popover: React.FC<IPopover> = ({
  reference,
  container,
  children,
  disableTriangle,
  placement,
  onClickOutside,
  zIndex,
  styleOverwrite,
  display,
}) => {
  const getPlacementsMemo = useMemo(() => getPlacements(disableTriangle, reference), []);
  return (
    <>
      <ClickOutside onClickOutside={onClickOutside || (() => {})}>
        <Stackable zIndex={zIndex}>
          <SPopover
            default={reference?.current ? getPlacement(placement) : 0}
            getPlacements={getPlacementsMemo}
            reference={reference}
            container={container}
            style={styleOverwrite}
          >
            {(display === undefined || display) && (
              <>
                {typeof children === "function" ? children() : children}
              </>
            )}
          </SPopover>
        </Stackable>
      </ClickOutside>
    </>
  );
};
