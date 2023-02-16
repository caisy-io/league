import React from "react";
import { CSSProp } from "styled-components";
import { PopoverBase } from "./PopoverBase";
import { PopoverWithAnimation } from "./PopoverWithAnimation";

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
export interface IPopover {
  placement: TPlacement;
  reference: React.MutableRefObject<null>;
  triangleExtraCSS?: CSSProp;
  trianglecolor?: string;
  disableTriangle?: boolean;
  onClickOutside?: () => void;
  container?: React.MutableRefObject<null>;
  zIndex?: number;
  styleOverwrite?: React.CSSProperties;
  display: boolean;
  children?: React.ReactNode | (() => React.ReactNode);
  disableAnimation?: boolean;
}

export const Popover: React.FC<IPopover> = ({ ...props }) => {
  if (props.disableAnimation) return <PopoverBase {...props} />;

  return <PopoverWithAnimation {...props} />;
};
