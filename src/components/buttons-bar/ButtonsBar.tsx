import React, { FC } from "react";
import { SButtonsBar } from "./styles/SButtonsBar";

const ButtonsBar: FC = ({ children }) => (
  <SButtonsBar>
    {children}
  </SButtonsBar>
);

export default ButtonsBar;