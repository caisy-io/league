import React from "react";
import styled from "styled-components";
import {SFlex} from "../../base-components/flex/styles/SFlex";
import {IconChevronDown} from "../../icons/IconChevronDown";
import {Preview} from "../preview";
import {IPreview} from "../preview/Preview";
import {SNotificationsGroupSelectListItem} from "./styles/SNotificationsGroupSelectListItem";
import {SNotificationsGroupSelectListItemTitle} from "./styles/SNotificationsGroupSelectListItemTitle";

export type IListItemSize = "large" | "medium" | "small";

export interface INotificationsGroupSelectListItemProps {
  title?: string | undefined;
  activated?: boolean;
  previewProps?: IPreview;
  onClick?: (e: Event) => void;
  disableArrow?: boolean
}

const SFlexListItem = styled(SFlex)`
  width: 90%;
  gap: 0.75rem;
  height: 100%;
`;

export const NotificationsGroupSelectListItem: React.FC<INotificationsGroupSelectListItemProps> = ({
                                                                                                     title,
                                                                                                     activated,
                                                                                                     previewProps,
                                                                                                     onClick,
                                                                                                     disableArrow = false
                                                                                                   }) => {
  return (
    <SNotificationsGroupSelectListItem onClick={onClick} activated={activated}>
      <SFlexListItem>
        <Preview size={28} {...previewProps}/>
        <SNotificationsGroupSelectListItemTitle>{title}</SNotificationsGroupSelectListItemTitle>
      </SFlexListItem>
      {!disableArrow && (
        <IconChevronDown/>
      )}
    </SNotificationsGroupSelectListItem>
  );
};
