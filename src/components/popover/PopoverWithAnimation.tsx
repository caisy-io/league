import React, { FC, useEffect, useState } from "react";
import { IPopover, Popover } from "./Popover";
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

  console.log(shouldRender, display);

  return (
    <>
      {shouldRender ? (
        <Popover display={shouldRender} {...props}>
          <SPopoverWithAnimation state={display ? "in" : "out"}>{children}</SPopoverWithAnimation>
        </Popover>
      ) : null}
    </>
  );
};
