import React, { FC } from "react";
import { SUploadsPopUpButtonsWrapper } from "./styles/SUploadsPopUpButtonsWrapper"

export const UloadsPopupButtons: FC = ({ children }) => (
  <SUploadsPopUpButtonsWrapper>
    {children}
  </SUploadsPopUpButtonsWrapper>
)