import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Badge, EBadgePosition } from '../badge';
import { SFlex } from '../../base-components/flex/styles/SFlex';
import { Preview } from '../preview';
import { IPreview } from '../preview/Preview';
import { SFlexBadgeWrapper } from './styles/SFlexBadgeWrapper';
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

interface ISFlex {
  badgeWitdh: number;
}

const SFlexListItem = styled(SFlex) <ISFlex>`
  gap: 0.75rem;
  height: 100%;
  width: ${(props) => `calc(100% - ${props.width}px - 0.5rem)`};
`;

export const OrganizationSelectListItem: FC<IOrganizationSelectListItemProps> = ({ title, label, itemSize, previewProps, badgeText }) => {
  const badgeRef = useRef<HTMLElement>(null);

  const [width, setWidth] = React.useState(0);

  // calculate width of the badge
  useEffect(() => {
    const badgeWidth = badgeRef.current ? badgeRef.current.offsetWidth : 0;
    setWidth(badgeWidth);
  }, [badgeText, badgeRef.current]);

  return (
    <SOrganizationSelectListItem itemSize={itemSize}>
      <SFlexListItem badgeText={badgeText} width={width}>
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
      {badgeText && <SFlexBadgeWrapper>
        <Badge ref={badgeRef} value={badgeText} type="regular" size="small" position={EBadgePosition.Center}/>
      </SFlexBadgeWrapper>
      }
    </SOrganizationSelectListItem>
  )
}