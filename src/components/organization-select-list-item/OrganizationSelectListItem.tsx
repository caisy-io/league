import React from 'react';
import styled from 'styled-components';
import { SFlex } from '../../base-components/flex/styles/SFlex';
import { PreviewImage } from '../preview-image/PreviewImage';
import { SOrganizationSelectListItem } from './styles/SOrganizationSelectListItem';
import { SOrganizationSelectListItemLabel } from './styles/SOrganizationSelectListItemLabel';
import { SOrganizationSelectListItemTextWrapper } from './styles/SOrganizationSelectListItemTextWrapper';
import { SOrganizationSelectListItemTitle } from './styles/SOrganizationSelectListItemTitle';

export type IListItemSize = "large" | "medium";

export interface IOrganizationSelectListItemProps {
  title?: string | undefined,
  label?: string | undefined,
  imageUrl?: string | undefined,
  itemSize?: IListItemSize,
  children?
}

const SFlexListItem = styled(SFlex)`
  width: 100%;
  gap: 0.75rem;
  height: 100%;
  ${(props) => props.children ? "width: 85%;" : ''};
`;

export const OrganizationSelectListItem: React.FC<IOrganizationSelectListItemProps> = ({ ...props }) => {
  return (
    <SOrganizationSelectListItem {...props}>
      <SFlexListItem {...props}>
        {props.itemSize == "large" ? (
          <PreviewImage size={48} imageUrl={props.imageUrl}
          ></PreviewImage>
        ) : (
          <PreviewImage size={36} imageUrl={props.imageUrl}
          ></PreviewImage>
        )}
        <SOrganizationSelectListItemTextWrapper>
          <SOrganizationSelectListItemTitle {...props}>{props.title}</SOrganizationSelectListItemTitle>
          <SOrganizationSelectListItemLabel {...props}>{props.label}</SOrganizationSelectListItemLabel>
        </SOrganizationSelectListItemTextWrapper>
      </SFlexListItem>
      {props.children}
    </SOrganizationSelectListItem>
  )
}
