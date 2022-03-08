import React, { FC, forwardRef } from "react";
import { SMainMenuItemWrapper } from "./styles/SMainMenuItemWrapper";

interface IMainMenuItem {
  children?: any;
  ref?: any;
}

export const MainMenuItemWrapper: FC<IMainMenuItem> = forwardRef(({ children }, ref) => {
  return (
    <>
      <SMainMenuItemWrapper ref={ref}>
        {children}
      </SMainMenuItemWrapper>
    </>
  );
});