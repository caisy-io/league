import React, { FC } from 'react';
import styled from 'styled-components';
import { Badge, EBadgePosition } from '..';
import { SFlex } from '../../base-components/flex/styles/SFlex';
import { Img } from '../../base-components/img';
import { IconChevron } from '../../icons/IconChevron';
import Preview from '../preview';
import { IPreview } from '../preview/Preview';
import { SOrganizationMenuListItem } from './styles/SOrganizationMenuListItem';
import { SOrganizationMenuListItemIconWrapper } from './styles/SOrganizationMenuListItemIconWrapper';
import { SOrganizationMenuListItemLabel } from './styles/SOrganizationMenuListItemLabel';
import { SOrganizationMenuListItemTextWrapper } from './styles/SOrganizationMenuListItemTextWrapper';
import { SOrganizationMenuListItemTitle } from './styles/SOrganizationMenuListItemTitle';

export type IListItemSize = "large" | "medium" | "small";

export interface IOrganizationMenuListItemProps {
  title?: string | undefined,
  label?: string | undefined,
  badgeValue?: string | undefined,
  itemSize?: IListItemSize,
  previewProps?: IPreview,
  children?
}

const SFlexListItem = styled(SFlex)`
  width: 90%;
  gap: 0.75rem;
  height: 100%;
`;

export const OrganizationMenuListItem: FC<IOrganizationMenuListItemProps> = ({ title, label, badgeValue, itemSize, previewProps }) => {
  return (
    <SOrganizationMenuListItem itemSize={itemSize}>
      <SFlexListItem>
        {itemSize == "large" ? (
          <Preview size={48} {...previewProps}></Preview>
        ) : (
          <Preview size={36} {...previewProps}></Preview>
        )}
        <SOrganizationMenuListItemTextWrapper>
          <SOrganizationMenuListItemLabel itemSize={itemSize}>{label}</SOrganizationMenuListItemLabel>
          <SOrganizationMenuListItemTitle itemSize={itemSize}>{title}</SOrganizationMenuListItemTitle>
        </SOrganizationMenuListItemTextWrapper>
      </SFlexListItem>
      <SOrganizationMenuListItemIconWrapper >
        {badgeValue != undefined && <Badge value={badgeValue} position={EBadgePosition.Center} type={'regular'} size="small"></Badge>}
        <IconChevron></IconChevron>
      </SOrganizationMenuListItemIconWrapper>
    </SOrganizationMenuListItem>
  )
}
