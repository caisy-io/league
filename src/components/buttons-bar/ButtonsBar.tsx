import React, { FC } from "react";
import { SButtonsBar } from "./styles/SButtonsBar";

export const ButtonsBar: FC = ({ children }) => (
  <SButtonsBar>
    {children}
  </SButtonsBar>
);