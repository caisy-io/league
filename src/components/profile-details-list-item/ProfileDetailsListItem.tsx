import React from "react";
import { Preview } from "../preview";

import { SProfileDetailsListItem } from "./styles/SProfileDetailsListItem";
import { SProfileDetailsListItemTitle } from "./styles/SProfileDetailsListItemTitle";
import { SProfileDetailsListItemLabel } from "./styles/SProfileDetailsListItemLabel";
import { SProfileDetailsListItemPreviewWrapper } from "./styles/SProfileDetailsListItemPreviewWrapper";
import { SProfileDetailsListItemPreviewStatus } from "./styles/SProfileDetailsListItemPreviewStatus";

import { IPreview } from "../preview/Preview";

export enum IProfileDetailsListItemStatus {
  online = "online",
  offline = "offline",
}

interface IProfileDetailsListItem {
  title?: string;
  label?: string;
  previewProps?: IPreview;
  status?: IProfileDetailsListItemStatus;
  onClick: () => void;
}

export const ProfileDetailsListItem: React.FC<IProfileDetailsListItem> = ({ title, label, previewProps, status, onClick }) => {
  return (
    <SProfileDetailsListItem onClick={onClick}>
      <SProfileDetailsListItemPreviewWrapper>
        <Preview size={48} {...previewProps} />
        {status && <SProfileDetailsListItemPreviewStatus status={status} />}
      </SProfileDetailsListItemPreviewWrapper>
      <div>
        {title && <SProfileDetailsListItemTitle>{title}</SProfileDetailsListItemTitle>}
        {label && <SProfileDetailsListItemLabel>{label}</SProfileDetailsListItemLabel>}
      </div>
    </SProfileDetailsListItem>
  );
};
