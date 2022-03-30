import React, { ReactNode, FC, useState, useRef } from "react";
import { css } from "styled-components";
import { STooltip } from "./styles/STooltip";
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
  const [closing, setClosing] = useState(false);

  let closeTooltipTimeout;
  let tooltipDelayTimeout;
  let openDelayTimeout;
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
    clearTimeout(openDelayTimeout);
    closeTooltipDelay();
  };

  const handleMouseEnter = () => {
    clearTimeout(openDelayTimeout);
    clearTimeout(closeTooltipTimeout);
    openDelayTimeout = setTimeout(() => {
      setOpen(true);
      setClosing(false);
      clearTimeout(tooltipDelayTimeout);
      clearTimeout(closeTooltipTimeout);
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

  const openCloseAnimation = css`
    animation: ${closing ? "close" : "open"} 100ms ease-in-out;

    @keyframes open {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes close {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `;

  return (
    <>
      <STooltipWrapper
        onClick={() => clearTimeout(openDelayTimeout)}
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </STooltipWrapper>
      {open && (
        <Popover
          disableTriangle={disableTriangle}
          triangleExtraCSS={openCloseAnimation}
          trianglecolor={getBackgroundColor()}
          placement={placement || "top"}
          reference={ref}
        >
          <STooltip
            onMouseEnter={() => clearInterval(tooltipDelayTimeout)}
            onMouseLeave={closeTooltip}
            animation={openCloseAnimation}
            color={color}
          >
            {content}
          </STooltip>
        </Popover>
      )}
    </>
  );
};
