import React, { useEffect, useMemo, useState } from "react";
import { CSSProp } from "styled-components";
import { SPopover } from "./styles/SPopover";
import { vbefore, vcenter, vafter, hbefore, hcenter, hafter } from "../poppable/Poppable.placements";
import { ClickOutside } from "../../utils";
import { IPopover } from "./Popover";

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

const getPlacements = (disableTriangle: boolean | undefined, reference: React.MutableRefObject<null>) => (rbr, tbr) => {
  const GAP = disableTriangle ? 8 : 18;

  const offsetWidth = (reference.current as any)?.offsetWidth || 0;
  const offsetHeight = (reference.current as any)?.offsetHeight || 0;

  return [
    { ...vbefore(rbr, tbr, -GAP), ...hcenter(rbr, tbr), name: "topCenter" }, // Top center
    { ...vafter(rbr, tbr, GAP), ...hcenter(rbr, tbr), name: "bottomCenter" }, // Bottom center
    { ...vcenter(rbr, tbr), ...hbefore(rbr, tbr, -GAP), name: "centerLeft" }, // Center left
    { ...vcenter(rbr, tbr), ...hafter(rbr, tbr, GAP), name: "centerRight" }, // Center right
    { ...vbefore(rbr, tbr, -GAP), left: hbefore(rbr, tbr, -GAP).left + offsetWidth, name: "topLeft" }, // Top left
    { ...vbefore(rbr, tbr, -GAP), left: hafter(rbr, tbr, GAP).left - offsetWidth, name: "topRight" }, // Top right
    { ...vafter(rbr, tbr, GAP), left: hbefore(rbr, tbr, -GAP).left + offsetWidth, name: "bottomLeft" }, // Bottom left
    { ...vafter(rbr, tbr, GAP), left: hafter(rbr, tbr, GAP).left - offsetWidth, name: "bottomRight" }, // Bottom right
    { top: vcenter(rbr, tbr).top - offsetHeight, ...hbefore(rbr, tbr, -GAP), name: "leftTop" }, // Left Top
    { top: vcenter(rbr, tbr).top + offsetHeight, ...hbefore(rbr, tbr, -GAP), name: "leftBottom" }, // Left Bottom
    { top: vcenter(rbr, tbr).top - offsetHeight, ...hafter(rbr, tbr, GAP), name: "rightTop" }, // Right Top
    { top: vcenter(rbr, tbr).top + offsetHeight, ...hafter(rbr, tbr, GAP), name: "rightBottom" }, // Right Bottom
    { ...hafter(rbr, tbr, -80), ...vafter(rbr, tbr, 16), name: "bottomAlignedRight" }, // Bottom aligned right
  ];
};

export const PopoverBase: React.FC<IPopover> = ({
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
  if (!display) return null;

  const getPlacementsMemo = useMemo(() => getPlacements(disableTriangle, reference), []);

  return (
    <>
      <ClickOutside onClickOutside={onClickOutside || (() => {})}>
        <SPopover
          zIndex={zIndex}
          default={reference?.current ? getPlacement(placement) : 0}
          getPlacements={getPlacementsMemo}
          reference={reference}
          container={container}
          style={styleOverwrite}
        >
          {display && <>{typeof children === "function" ? children() : children}</>}
        </SPopover>
      </ClickOutside>
    </>
  );
};
