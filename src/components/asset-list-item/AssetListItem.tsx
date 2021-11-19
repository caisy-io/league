import React from 'react';
import { IconCheckmark, IconWarning } from '../..';
import { SFlex } from '../../base-components/flex/styles/SFlex';
import { IconCross } from '../../icons/IconCross';
import { IconCheckmarkOutlined } from '../../icons/IconCheckmarkOutlined';
import { SAssetListItem } from './styles/SAssetListItem';
import { SAssetListItemDescription } from './styles/SAssetListItemDescription';
import { SAssetListItemIconWrapper } from './styles/SAssetListItemIconWrapper';
import { SAssetListItemTextWrapper } from './styles/SAssetListItemTextWrapper';
import { SAssetListItemTitle } from './styles/SAssetListItemTitle';
import { SImagePlaceholder } from './styles/SImagePlaceholder';
import { SProgressBar } from './styles/SProgressBar';

export interface IAssetListItemProps {
  title?: String | undefined,
  description?: String | undefined,
  icon?: React.ReactNode,
  recent?: boolean,
  error?: boolean,
  uploading?: boolean,
}

export const AssetListItem: React.FC<IAssetListItemProps> = ({ ...props }) => {
  return (
    <SAssetListItem {...props}>
      <SFlex style={{width: "100%"}}>
        <SImagePlaceholder {...props}>
          {props.icon}
        </SImagePlaceholder>
        <SAssetListItemTextWrapper>
          <SAssetListItemTitle {...props}>{props.title}</SAssetListItemTitle>
          <SAssetListItemDescription {...props}>{props.description}</SAssetListItemDescription>
          <SProgressBar {...props}>
            <span>30%</span>
            <progress value="30" max="100" />
          </SProgressBar>
        </SAssetListItemTextWrapper>
        <SAssetListItemIconWrapper {...props}>
          <IconCheckmarkOutlined></IconCheckmarkOutlined>
          <IconWarning></IconWarning>
        </SAssetListItemIconWrapper>
      </SFlex>
      <IconCross variant={'close'}></IconCross>
    </SAssetListItem>
  )
}
