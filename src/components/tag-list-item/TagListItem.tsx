import React from "react";
import { SFlex } from "../../base-components/flex/styles/SFlex";
import { IconMoreMenuHorizontal } from "../../icons";
import { ClickOutside, useDimensions } from "../../utils";
import { Popover } from "../popover";

import { STagListItem } from "./styles/STagListItem";
import { STagListItemLabel } from "./styles/STagListItemLabel";
import { STagListItemOutlineLabelWrapper } from "./styles/STagListItemOutlineLabelWrapper";

export interface ITagListItem {
  disabled?: boolean;
  activated?: boolean;
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  outlineLabel?: React.ReactNode;
  flatActionButton?: React.ReactNode;
  onClick?: () => void;
  popover?: React.ReactNode;
}

export const TagListItem: React.FC<ITagListItem> = ({
  disabled,
  activated,
  label,
  leftIcon,
  rightIcon,
  outlineLabel,
  flatActionButton,
  onClick,
  popover,
  children,
}) => {
  return (
    <STagListItem disabled={disabled} activated={activated} onClick={onClick}>
      {children}
    </STagListItem>
  );
};
