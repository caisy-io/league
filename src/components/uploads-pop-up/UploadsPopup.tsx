import React, { FC } from "react";
import { SUploadsPopup } from "./styles/SUploadsPopup";
import { SUploadsPopupHeader, ButtonsWrapper, IconWrapper, BadgeWrapper } from "./styles/SUploadsPopupHeader"
import { PrimaryModalHeader } from "../primary-modal-header"
import { FlatActionButton } from "../flat-action-button";
import { IconClose, IconUpload } from "../../icons";
import { Badge } from "../badge";
import { EBadgePosition } from "../badge/EBadgePosition";


interface IUploadsPopUp {
  poupTitle: string;
  onClose?: () => any;
}

const UploadsPopUp: FC<IUploadsPopUp> = ({children, poupTitle, onClose}) => (
  <SUploadsPopup>
    <SUploadsPopupHeader>
      <PrimaryModalHeader withCloseIcon={true} breadcrumbs={[{title: poupTitle, icon: <IconUpload size={24}/> }]} onClose={onClose} >
        <BadgeWrapper>
          <Badge type="regular" value="1" size="small" position={EBadgePosition.Center}/>
        </BadgeWrapper>
        <ButtonsWrapper>
          <FlatActionButton type="grey">Clear</FlatActionButton>
          <IconWrapper onClick={onClose}><IconClose size={24}/></IconWrapper>
        </ButtonsWrapper>
      </PrimaryModalHeader>
    </SUploadsPopupHeader>

    {children}
  </SUploadsPopup>
);

export default UploadsPopUp;
