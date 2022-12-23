import React, { FC } from "react";
import { SUploadsPopUpButtonsWrapper } from "./styles/SUploadsPopUpButtonsWrapper";

export const UploadsPopUpButtons: FC<{ children?: React.ReactNode }> = ({ children }) => (
  <SUploadsPopUpButtonsWrapper>{children}</SUploadsPopUpButtonsWrapper>
);
