import React from 'react';
import styled from 'styled-components';
import { SFlex } from '../../base-components/flex/styles/SFlex';
import { IconChevron } from '../../icons/IconChevron';
import { PreviewImage } from '../preview-image/PreviewImage';
import { SOrganizationMenuListItem } from './styles/SOrganizationMenuListItem';
import { SOrganizationMenuListItemLabel } from './styles/SOrganizationMenuListItemLabel';
import { SOrganizationMenuListItemIconWrapper } from './styles/SOrganizationMenuListItemIconWrapper';
import { SOrganizationMenuListItemTextWrapper } from './styles/SOrganizationMenuListItemTextWrapper';
import { SOrganizationMenuListItemTitle } from './styles/SOrganizationMenuListItemTitle';
import { Badge, EBadgePosition } from '../badge';

export type IListItemSize = "large" | "medium" | "small";

export interface IOrganizationMenuListItemProps {
  title?: String | undefined,
  label?: String | undefined,
  itemSize?: IListItemSize,
}

const SFlexListItem = styled(SFlex)`
  width: 90%;
  ${(props) => props.recent || props.error ? "width: 80%" : ''};
`;

const SPreviewImageListItem = styled(PreviewImage)`
  margin: 4px;
`;

export const OrganizationMenuListItem: React.FC<IOrganizationMenuListItemProps> = ({ ...props }) => {
  return (
    <SOrganizationMenuListItem {...props}>
      <SFlexListItem {...props}>
        <SPreviewImageListItem size="48" imageUrl="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80"
        ></SPreviewImageListItem>
        <SOrganizationMenuListItemTextWrapper>
          <SOrganizationMenuListItemLabel {...props}>{props.label}</SOrganizationMenuListItemLabel>
          <SOrganizationMenuListItemTitle {...props}>{props.title}</SOrganizationMenuListItemTitle>
        </SOrganizationMenuListItemTextWrapper>
      </SFlexListItem>
      <SOrganizationMenuListItemIconWrapper {...props}>
        <Badge value={'1'} position={EBadgePosition.Center} type={'regular'} size="small"></Badge>
        <IconChevron></IconChevron>
      </SOrganizationMenuListItemIconWrapper>
    </SOrganizationMenuListItem>
  )
}
