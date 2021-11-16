import React from "react";
import { SPopover } from "./styles/SPopover";
import Stackable from "../stackable";
import { ClickOutside } from "../../utils/hooks/useClickOutside";
import { vbefore, vcenter, vafter, hbefore, hcenter, hafter } from "../poppable/Poppable.placements";

enum EPlacements {
  Top = "top",
  Bottom = "bottom",
  Right = "right",
  Left = "left",
}

export type TPlacement = "top" | "bottom" | "right" | "left";

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
    default:
      return 1;
  }
};

interface IPopover {
  placement: TPlacement;
  reference: React.MutableRefObject<null>;
  trianglecolor?: string;
  disableTriangle?: boolean;
  onClickOutside?: () => void;
  container?: React.MutableRefObject<null>;
  zIndex?: number;
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
}) => {
  const placements = React.useCallback((rbr, tbr) => {
    const GAP = disableTriangle ? 8 : 18;
    return [
      { ...vbefore(rbr, tbr, -GAP), ...hcenter(rbr, tbr) }, // Top
      { ...vafter(rbr, tbr, GAP), ...hcenter(rbr, tbr) }, // Bottom
      { ...vcenter(rbr, tbr), ...hbefore(rbr, tbr, -GAP) }, // Left
      { ...vcenter(rbr, tbr), ...hafter(rbr, tbr, GAP) }, // Right
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
            container={container}
          >
            <>
              {!disableTriangle ? <SPopover.Triangle size={10} /> : null}
              {children}
            </>
          </SPopover>
        </Stackable>
      )}
    </ClickOutside>
  );
};
