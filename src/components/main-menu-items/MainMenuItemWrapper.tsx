import React, { FC, forwardRef } from "react";
import { SMainMenuItemWrapper } from "./styles/SMainMenuItemWrapper";

interface IMainMenuItem {
  children?: any;
  ref?: any;
}

export const MainMenuItem: FC<IMainMenuItem> = forwardRef(({ children }, ref) => {
  return (
    <>
      <SMainMenuItemWrapper ref={ref}>
        {children}
      </SMainMenuItemWrapper>
    </>
  );
});
