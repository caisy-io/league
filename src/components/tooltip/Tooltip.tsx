import React, { ReactNode, FC, useState, useRef, useEffect } from "react";
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
  children?: React.ReactNode;
}

export const Tooltip: FC<ITooltip> = ({ content, placement, color, children, delay = 0 }) => {
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

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setShow(true);
  }, [typeof window]);

  const tooltipRef = useRef<HTMLDivElement>();

  const setTooltipStyling = (opacity: string, pointerEvents: string, delay: string) => {
    if (tooltipRef.current) {
      tooltipRef.current.style.opacity = opacity;
      tooltipRef.current.style.pointerEvents = pointerEvents;
      tooltipRef.current.style.transitionDelay = delay;
    }
  };

  const handleMouseEnter = () => {
    setTooltipStyling("1", "auto", `${delay}ms`);
  };

  const handleMouseLeave = () => {
    setTooltipStyling("0", "none", "0ms");
  };

  return (
    <>
      <STooltipWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={ref}>
        {children}
      </STooltipWrapper>
      <Popover
        display={show}
        styleOverwrite={{ pointerEvents: "none" }}
        disableTriangle
        trianglecolor={getBackgroundColor()}
        placement={placement || "top"}
        reference={ref}
      >
        <STooltip
          delay={delay}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={tooltipRef}
          color={color}
        >
          {content}
        </STooltip>
      </Popover>
    </>
  );
};
