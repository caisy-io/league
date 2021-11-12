import React, { ReactNode } from "react";
import { STooltip } from "./styles/STooltip";
import { STooltipWrapper } from "./styles/STooltipWrapper";
import { Popover, TPlacement } from "../popover/Popover";

type TTooltipColor = "white" | "black";

export interface ITooltip {
  content: ReactNode | (() => ReactNode);
  supressArrow?: boolean | undefined;
  placement?: TPlacement | undefined;
  color?: TTooltipColor;
}

export const Tooltip: React.FC<ITooltip> = ({ ...props }) => {
  // console.log(`Tooltip props: `, props);
  const [open, setOpen] = React.useState(false);
  const [closing, setClosing] = React.useState(false);
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

  const ref = React.useRef(null);

  const getBackgroundColor = () => {
    switch (props.color) {
      case "black":
        return "var(--ui-overlay-02)";
      case "white":
      default:
        return "var(--ui-02)";
    }
  };

  const getColor = () => {
    switch (props.color) {
      case "black":
        return "var(--text-02)";
      case "white":
      default:
        return "var(--text-01)";
    }
  };

  return (
    <STooltipWrapper ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {props.children}
      {open && (
        <Popover trianglecolor={getBackgroundColor()} placement={props.placement || "top"} reference={ref}>
          <STooltip closing={closing} color={getColor()} backgroundColor={getBackgroundColor()}>
            {props.content}
          </STooltip>
        </Popover>
      )}
    </STooltipWrapper>
  );
};
