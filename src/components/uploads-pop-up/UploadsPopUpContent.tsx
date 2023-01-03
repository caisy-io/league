import React, { FC } from "react";
import { SUploadsPopUpContent } from "./styles/SUploadsPopUpContent";
import { Scrollbar } from "../scrollbar";

export const UploadsPopUpContent: FC<{ children?: React.ReactNode }> = ({ children }) => (
  <SUploadsPopUpContent>
    <Scrollbar>{children}</Scrollbar>
  </SUploadsPopUpContent>
);
