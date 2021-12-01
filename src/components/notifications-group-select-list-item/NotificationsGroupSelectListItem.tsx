import React from 'react';
import styled from 'styled-components';
import { SFlex } from '../../base-components/flex/styles/SFlex';
import { IconChevronDown } from '../../icons/IconChevronDown';
import { PreviewImage } from '../preview-image/PreviewImage';
import { SNotificationsGroupSelectListItem } from './styles/SNotificationsGroupSelectListItem';
import { SNotificationsGroupSelectListItemTitle } from './styles/SNotificationsGroupSelectListItemTitle';

export type IListItemSize = "large" | "medium" | "small";

export interface INotificationsGroupSelectListItemProps {
  title?: string | undefined,
  label?: string | undefined,
  imageUrl?: string | undefined,
  activated?: boolean
}

const SFlexListItem = styled(SFlex)`
  width: 90%;
  gap: 0.75rem;
  height: 100%;
`;

export const NotificationsGroupSelectListItem: React.FC<INotificationsGroupSelectListItemProps> = ({title, imageUrl, activated }) => {
  return (
    <SNotificationsGroupSelectListItem activated={activated}>
      <SFlexListItem>
        <PreviewImage size={28} imageUrl={imageUrl}
        ></PreviewImage>
        <SNotificationsGroupSelectListItemTitle>{title}</SNotificationsGroupSelectListItemTitle>
      </SFlexListItem>
      <IconChevronDown></IconChevronDown>
    </SNotificationsGroupSelectListItem>
  )
}