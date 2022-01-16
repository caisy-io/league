import React from "react";
import { SFlex } from "../../base-components/flex/styles/SFlex";

import { STagListItem } from "./styles/STagListItem";
import { STagListItemLabel } from "./styles/STagListItemLabel";
import { STagListItemOutlineLabelWrapper } from "./styles/STagListItemOutlineLabelWrapper";

export interface ITagListItem {
  disabled?: boolean;
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  outlineLabel?: React.ReactNode;
  flatActionButton?: React.ReactNode;
  onClick?: () => void;
}

export const TagListItem: React.FC<ITagListItem> = ({
  disabled,
  label,
  leftIcon,
  rightIcon,
  outlineLabel,
  flatActionButton,
  onClick,
}) => {
  return (
    <STagListItem disabled={disabled} onClick={onClick}>
      {label && <STagListItemLabel>{label}</STagListItemLabel>}
      <SFlex>
        {leftIcon}
        {outlineLabel && <STagListItemOutlineLabelWrapper>{outlineLabel}</STagListItemOutlineLabelWrapper>}
      </SFlex>
      {rightIcon}
      {flatActionButton}
    </STagListItem>
  );
};
