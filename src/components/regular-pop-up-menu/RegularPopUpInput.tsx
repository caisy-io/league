import React, { FC } from "react";
import { SPopUpInput } from "./styles/SPopUpInput";

export const RegularPopUpInput: FC = ({children}) => (
  <SPopUpInput>
    {children}
  </SPopUpInput>
);
