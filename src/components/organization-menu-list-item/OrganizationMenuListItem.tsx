import React from 'react';
import styled from 'styled-components';
import { SFlex } from '../../base-components/flex/styles/SFlex';
import { IconChevron } from '../../icons/IconChevron';
import { Badge, EBadgePosition } from '../badge';
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
  badgeValue: string,
}

const SFlexListItem = styled(SFlex)`
  width: 90%;
  gap: 0.75rem;
`;



export const OrganizationMenuListItem: React.FC<IOrganizationMenuListItemProps> = ({ ...props }) => {
  return (
    <SOrganizationMenuListItem {...props}>
      <SFlexListItem {...props}>
        {props.itemSize == "large" ? (
          <PreviewImage size={48} imageUrl={props.imageUrl}
          ></PreviewImage>
        ) : (
          <PreviewImage size={36} imageUrl={props.imageUrl}
          ></PreviewImage>
        )}
        <SOrganizationMenuListItemTextWrapper>
          <SOrganizationMenuListItemLabel {...props}>{props.label}</SOrganizationMenuListItemLabel>
          <SOrganizationMenuListItemTitle {...props}>{props.title}</SOrganizationMenuListItemTitle>
        </SOrganizationMenuListItemTextWrapper>
      </SFlexListItem>
      <SOrganizationMenuListItemIconWrapper {...props}>
        {props.itemSize !== "large" && <Badge value={props.badgeValue} position={EBadgePosition.Center} type={'regular'} size="small"></Badge>}
        <IconChevron></IconChevron>
      </SOrganizationMenuListItemIconWrapper>
    </SOrganizationMenuListItem>
  )
}
