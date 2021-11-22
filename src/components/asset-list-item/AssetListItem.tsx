import React from 'react';
import { IconWarning } from '../..';
import { SFlex } from '../../base-components/flex/styles/SFlex';
import { IconCheckmarkOutlined } from '../../icons/IconCheckmarkOutlined';
import { IconCross } from '../../icons/IconCross';
import { SAssetListItem } from './styles/SAssetListItem';
import { SAssetListItemDescription } from './styles/SAssetListItemDescription';
import { SAssetListItemIconWrapper } from './styles/SAssetListItemIconWrapper';
import { SAssetListItemTextWrapper } from './styles/SAssetListItemTextWrapper';
import { SAssetListItemTitle } from './styles/SAssetListItemTitle';
import { SImagePlaceholder } from './styles/SImagePlaceholder';
import { SProgress } from './styles/SProgress';
import { SProgressBackground } from './styles/SProgressBackground';
import { SProgressBar } from './styles/SProgressBar';
import { SProgressBarContainer } from './styles/SProgressBarContainer';

export interface IAssetListItemProps {
  title?: String | undefined,
  description?: String | undefined,
  icon?: React.ReactNode,
  recent?: boolean,
  error?: boolean,
  uploading?: boolean,
  progressValue: number,
}

export const AssetListItem: React.FC<IAssetListItemProps> = ({ ...props }) => {
  return (
    <SAssetListItem {...props}>
      <SFlex style={{ width: "100%" }}>
        <SImagePlaceholder {...props}>
          {props.icon}
        </SImagePlaceholder>
        <SAssetListItemTextWrapper>
          <SAssetListItemTitle {...props}>{props.title}</SAssetListItemTitle>
          <SAssetListItemDescription {...props}>{props.description}</SAssetListItemDescription>
          <SProgressBarContainer>
            <span>{props.progressValue}%</span>
            <SProgressBar>
              <SProgressBackground />
              <SProgress  {...props} />
            </SProgressBar>
          </SProgressBarContainer>
        </SAssetListItemTextWrapper>
      </SFlex>
      <SAssetListItemIconWrapper {...props}>
        <IconCheckmarkOutlined></IconCheckmarkOutlined>
        <IconWarning></IconWarning>
        <IconCross variant={'close'}></IconCross>
      </SAssetListItemIconWrapper>

    </SAssetListItem>
  )
}
