import React, { FC } from "react";
import { SUploadsPopup } from "./styles/SUploadsPopup";
import { ModalHeader, ModalHeaderTitle } from "../modal";
import { SUploadsPopupHeader } from "./styles/SUploadsPopupHeader"

interface IUploadsPopUp {
  title?: string;
  onClose?: () => any;
}

const UploadsPopUp: FC<IUploadsPopUp> = ({children, title, onClose}) => (
  <SUploadsPopup>
    
    <SUploadsPopupHeader>
      <ModalHeader onClose={onClose}>
        <ModalHeaderTitle>{title}</ModalHeaderTitle>
      </ModalHeader>
    </SUploadsPopupHeader>

    {children}
  </SUploadsPopup>
);

export default UploadsPopUp;
