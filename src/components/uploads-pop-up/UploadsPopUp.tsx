import React, { FC, ReactNode } from "react";
import { SUploadsPopUp } from "./styles/SUploadsPopUp";
import { SUploadsPopUpHeader, ButtonsWrapper, IconWrapper, BadgeWrapper } from "./styles/SUploadsPopUpHeader";
import { PrimaryModalHeader } from "../primary-modal-header";
import { FlatActionButton } from "../flat-action-button";
import { IconClose, IconUpload } from "../../icons";
import { Badge } from "../badge";
import { EBadgePosition } from "../badge";

interface IUploadsPopUp {
  poupTitle: string | ReactNode;
  onClose: () => any;
  badgeValue?: string | number;
  ClearText?: string | ReactNode;
  onClear?: () => void;
  children?: React.ReactNode;
}

export const UploadsPopUp: FC<IUploadsPopUp> = ({ children, poupTitle, badgeValue, onClose, onClear, ClearText }) => (
  <SUploadsPopUp>
    <SUploadsPopUpHeader>
      <PrimaryModalHeader breadcrumbs={[{ title: poupTitle, icon: <IconUpload size={24} /> }]}>
        <BadgeWrapper>
          {badgeValue && (
            <Badge type="regular" value={badgeValue.toString()} size="small" position={EBadgePosition.Center} />
          )}
        </BadgeWrapper>
        <ButtonsWrapper>
          <FlatActionButton type="grey" onClick={onClear}>
            {ClearText || "Clear"}
          </FlatActionButton>
          <IconWrapper onClick={onClose}>
            <IconClose size={24} />
          </IconWrapper>
        </ButtonsWrapper>
      </PrimaryModalHeader>
    </SUploadsPopUpHeader>
    {children}
  </SUploadsPopUp>
);
