import React, { FC } from 'react';
import styled from 'styled-components';
import { Badge, EBadgePosition } from '..';
import { SFlex } from '../../base-components/flex/styles/SFlex';
import Preview from '../preview';
import { PreviewImage } from '../preview-image/PreviewImage';
import { IPreview } from '../preview/Preview';
import { SOrganizationSelectListItem } from './styles/SOrganizationSelectListItem';
import { SOrganizationSelectListItemLabel } from './styles/SOrganizationSelectListItemLabel';
import { SOrganizationSelectListItemTextWrapper } from './styles/SOrganizationSelectListItemTextWrapper';
import { SOrganizationSelectListItemTitle } from './styles/SOrganizationSelectListItemTitle';

export type IListItemSize = "large" | "medium";

export interface IOrganizationSelectListItemProps {
  title?: string | undefined,
  label?: string | undefined,
  imageUrl?: string | undefined,
  badgeText?: string | undefined,
  itemSize?: IListItemSize,
  previewProps?: IPreview
}

const SFlexListItem = styled(SFlex)`
  width: 100%;
  gap: 0.75rem;
  height: 100%;
  ${(props) => props.badgeText ? "width: 80%" : ''};

`;

const SBadge = styled(Badge)`
  max-width: 4rem;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const OrganizationSelectListItem: FC<IOrganizationSelectListItemProps> = ({ title, label, itemSize, previewProps, badgeText}) => {
  return (
    <SOrganizationSelectListItem itemSize={itemSize}>
      <SFlexListItem badgeText={badgeText}>
        {itemSize == "large" ? (
          <Preview size={48} {...previewProps}></Preview>
        ) : (
          <Preview size={36} {...previewProps}></Preview>
        )}
        <SOrganizationSelectListItemTextWrapper>
          <SOrganizationSelectListItemTitle itemSize={itemSize}>{title}</SOrganizationSelectListItemTitle>
          <SOrganizationSelectListItemLabel itemSize={itemSize}>{label}</SOrganizationSelectListItemLabel>
        </SOrganizationSelectListItemTextWrapper>
      </SFlexListItem>
      {badgeText && <SBadge value={badgeText} type="regular" size="small" position={EBadgePosition.Center}></SBadge>
      }
    </SOrganizationSelectListItem>
  )
}
