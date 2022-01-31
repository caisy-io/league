import React, { FC } from "react"
import { SUploadsPopupContent } from "./styles/SUploadsPopupContent";
import { Scrollbar } from "../scrollbar";

export const UploadsPopupContent: FC = ({children}) => (

  <SUploadsPopupContent>
    <Scrollbar>
      {children}
    </Scrollbar>
  </SUploadsPopupContent>
);
