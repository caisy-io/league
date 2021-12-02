import React, { ReactNode, FC, useState, useRef } from "react";
import { STooltip } from "./styles/STooltip";
import { STooltipWrapper } from "./styles/STooltipWrapper";
import { Popover, TPlacement } from "../../components/popover";

type TTooltipColor = "white" | "black";

export interface ITooltip {
  content: ReactNode | (() => ReactNode);
  placement?: TPlacement | undefined;
  color?: TTooltipColor;
}

export const Tooltip: FC<ITooltip> = ({ content, placement, color, children }) => {
  // console.log(`Tooltip props: `, props);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  let closeTooltipTimeout;
  let tooltipDelayTimeout;
  const closeTooltip = () => {
    closeTooltipTimeout = setTimeout(() => {
      setClosing(false);
      setOpen(false);
    }, 100);
  };

  const closeTooltipDelay = () => {
    tooltipDelayTimeout = setTimeout(() => {
      setClosing(true);
      closeTooltip();
    }, 50);
  };

  const handleMouseLeave = () => {
    closeTooltipDelay();
  };

  const handleMouseEnter = () => {
    setOpen(true);
    setClosing(false);
    clearTimeout(tooltipDelayTimeout);
    clearTimeout(closeTooltipTimeout);
  };

  const ref = useRef(null);

  const getBackgroundColor = () => {
    switch (color) {
      case "black":
        return "var(--ui-overlay-02)";
      case "white":
      default:
        return "var(--ui-01)";
    }
  };

  const getColor = () => {
    switch (color) {
      case "black":
        return "var(--text-02)";
      case "white":
      default:
        return "var(--text-01)";
    }
  };

  return (
    <STooltipWrapper ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {open && (
        <Popover trianglecolor={getBackgroundColor()} placement={placement || "top"} reference={ref}>
          <STooltip closing={closing} color={getColor()} backgroundColor={getBackgroundColor()}>
            {content}
          </STooltip>
        </Popover>
      )}
    </STooltipWrapper>
  );
};
