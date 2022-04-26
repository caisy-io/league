import React, { useCallback } from "react";
import { CSSProp } from "styled-components";
import { SPopover } from "./styles/SPopover";
import Stackable from "../stackable";
import { vbefore, vcenter, vafter, hbefore, hcenter, hafter } from "../poppable/Poppable.placements";
import { Triangle } from "../poppable";
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
}

export const Popover: React.FC<IPopover> = ({
  reference,
  children,
  disableTriangle,
  placement,
  onClickOutside,
  trianglecolor,
  container,
  zIndex,
  triangleExtraCSS,
  styleOverwrite,
}) => {
  // if (!reference || !reference.current) {
  //   return null;
  // }

  const placements = useCallback((rbr, tbr) => {
    const GAP = disableTriangle ? 8 : 18;

    return [
      { ...vbefore(rbr, tbr, -GAP), ...hcenter(rbr, tbr) }, // Top center
      { ...vafter(rbr, tbr, GAP), ...hcenter(rbr, tbr) }, // Bottom center
      { ...vcenter(rbr, tbr), ...hbefore(rbr, tbr, -GAP) }, // Center left
      { ...vcenter(rbr, tbr), ...hafter(rbr, tbr, GAP) }, // Center right
      { ...vbefore(rbr, tbr, -GAP), left: hbefore(rbr, tbr, -GAP).left + (reference.current as any).offsetWidth }, // Top left
      { ...vbefore(rbr, tbr, -GAP), left: hafter(rbr, tbr, GAP).left - (reference.current as any).offsetWidth }, // Top right
      { ...vafter(rbr, tbr, GAP), left: hbefore(rbr, tbr, -GAP).left + (reference.current as any).offsetWidth }, // Bottom left
      { ...vafter(rbr, tbr, GAP), left: hafter(rbr, tbr, GAP).left - (reference.current as any).offsetWidth }, // Bottom right
      { top: vcenter(rbr, tbr).top - (reference.current as any).offsetHeight, ...hbefore(rbr, tbr, -GAP) }, // Left Top
      { top: vcenter(rbr, tbr).top + (reference.current as any).offsetHeight, ...hbefore(rbr, tbr, -GAP) }, // Left Bottom
      { top: vcenter(rbr, tbr).top - (reference.current as any).offsetHeight, ...hafter(rbr, tbr, GAP) }, // Right Top
      { top: vcenter(rbr, tbr).top + (reference.current as any).offsetHeight, ...hafter(rbr, tbr, GAP) }, // Right Bottom
      { ...hafter(rbr, tbr, -80), ...vafter(rbr, tbr, 16) }, // Bottom aligned right
    ];
  }, []);
  return (
    <ClickOutside onClickOutside={onClickOutside || (() => {})}>
      {reference && (
        <Stackable zIndex={zIndex}>
          <SPopover
            default={getPlacement(placement)}
            placements={placements}
            reference={reference}
            trianglecolor={trianglecolor}
            triangleExtraCSS={triangleExtraCSS}
            container={container}
            style={styleOverwrite}
          >
            <>
              {!disableTriangle ? <Triangle size={9} /> : null}
              {children}
            </>
          </SPopover>
        </Stackable>
      )}
    </ClickOutside>
  );
};
