import React, { ReactNode, FC, useState, useRef } from "react";
import { CSSOpenAnimation, STooltip } from "./styles/STooltip";
import { STooltipWrapper } from "./styles/STooltipWrapper";
import { Popover, TPlacement } from "../../components/popover";

type TTooltipColor = "white" | "black";

export interface ITooltip {
  content: ReactNode | (() => ReactNode);
  placement?: TPlacement | undefined;
  color?: TTooltipColor;
  disableTriangle?: boolean;
  delay?: number;
}

export const Tooltip: FC<ITooltip> = ({ content, placement, color, children, disableTriangle, delay = 0 }) => {
  const [open, setOpen] = useState(false);

  let openDelayTimeout;

  const handleMouseLeave = () => {
    clearTimeout(openDelayTimeout);
    setOpen(false);
  };

  const handleMouseEnter = () => {
    clearTimeout(openDelayTimeout);
    openDelayTimeout = setTimeout(() => {
      setOpen(true);
    }, delay);
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

  return (
    <>
      <STooltipWrapper
        onClick={() => clearTimeout(openDelayTimeout)}
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        {open && (
          <Popover
            disableTriangle={disableTriangle}
            triangleExtraCSS={CSSOpenAnimation}
            trianglecolor={getBackgroundColor()}
            placement={placement || "top"}
            reference={ref}
          >
            <STooltip color={color}>{content}</STooltip>
          </Popover>
        )}
      </STooltipWrapper>
    </>
  );
};
