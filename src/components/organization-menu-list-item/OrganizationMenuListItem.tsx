import React, { FC } from 'react';
import styled from 'styled-components';
import { SFlex } from '../../base-components/flex/styles/SFlex';
import { IconChevron } from '../../icons/IconChevron';
import { PreviewImage } from '../preview-image/PreviewImage';
import { SOrganizationMenuListItem } from './styles/SOrganizationMenuListItem';
import { SOrganizationMenuListItemIconWrapper } from './styles/SOrganizationMenuListItemIconWrapper';
import { SOrganizationMenuListItemLabel } from './styles/SOrganizationMenuListItemLabel';
import { SOrganizationMenuListItemTextWrapper } from './styles/SOrganizationMenuListItemTextWrapper';
import { SOrganizationMenuListItemTitle } from './styles/SOrganizationMenuListItemTitle';

export type IListItemSize = "large" | "medium" | "small";

export interface IOrganizationMenuListItemProps {
  title?: string | undefined,
  label?: string | undefined,
  imageUrl?: string | undefined,
  itemSize?: IListItemSize,
  children?
}

const SFlexListItem = styled(SFlex)`
  width: 90%;
  gap: 0.75rem;
  height: 100%;
`;

export const OrganizationMenuListItem: FC<IOrganizationMenuListItemProps> = ({title, label, imageUrl, itemSize, children}) => {
  return (
    <SOrganizationMenuListItem itemSize={itemSize}>
      <SFlexListItem >
        {itemSize == "large" ? (
          <PreviewImage size={48} imageUrl={imageUrl}
          ></PreviewImage>
        ) : (
          <PreviewImage size={36} imageUrl={imageUrl}
          ></PreviewImage>
        )}
        <SOrganizationMenuListItemTextWrapper>
          <SOrganizationMenuListItemLabel itemSize={itemSize}>{label}</SOrganizationMenuListItemLabel>
          <SOrganizationMenuListItemTitle itemSize={itemSize}>{title}</SOrganizationMenuListItemTitle>
        </SOrganizationMenuListItemTextWrapper>
      </SFlexListItem>
      <SOrganizationMenuListItemIconWrapper >
        {children}
        <IconChevron></IconChevron>
      </SOrganizationMenuListItemIconWrapper>
    </SOrganizationMenuListItem>
  )
}
