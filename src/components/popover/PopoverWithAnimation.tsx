import React, { FC, useEffect, useState } from "react";
import { IPopover, Popover } from "./Popover";
import { PopoverBase } from "./PopoverBase";
import { SPopoverWithAnimation } from "./styles/SPopoverWithAnimation";

const useDelayUnmount = (isMounted: boolean, delayTime: number) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);

  return shouldRender;
};

export const PopoverWithAnimation: FC<IPopover> = ({ display, children, ...props }) => {
  const shouldRender = useDelayUnmount(display, 150);

  return (
    <>
      {shouldRender ? (
        <PopoverBase display={shouldRender} {...props}>
          <SPopoverWithAnimation placement={props.placement} state={display ? "in" : "out"}>
            <>{typeof children === "function" ? children() : children}</>
          </SPopoverWithAnimation>
        </PopoverBase>
      ) : null}
    </>
  );
};
