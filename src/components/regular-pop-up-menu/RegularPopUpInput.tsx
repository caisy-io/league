import React, { FC } from "react";
import { SPopUpInput } from "./styles/SPopUpInput";

export const RegularPopUpInput: FC<{ children?: React.ReactNode }> = ({ children }) => (
  <SPopUpInput>{children}</SPopUpInput>
);
