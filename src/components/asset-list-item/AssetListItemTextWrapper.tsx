import React from 'react';
import { SAssetListItemTextWrapper } from './styles/SAssetListItemTextWrapper';
import { SProgress } from './styles/SProgress';
import { SProgressBackground } from './styles/SProgressBackground';
import { SProgressBar } from './styles/SProgressBar';
import { SProgressBarContainer } from './styles/SProgressBarContainer';

export interface IAssetListItemTextWrapperProps {
  title?: String | undefined,
  description?: String | undefined,
  icon?: React.ReactNode,
  recent?: boolean,
  error?: boolean,
  progressValue: number | undefined,
  children?
}

export const AssetListItemTextWrapper: React.FC<IAssetListItemTextWrapperProps> = ({ progressValue, children }) => {
  return (
    <SAssetListItemTextWrapper>
      {children}
      <SProgressBarContainer progressValue={progressValue}>
        <span>{progressValue}%</span>
        <SProgressBar>
          <SProgressBackground />
          <SProgress progressValue={progressValue} />
        </SProgressBar>
      </SProgressBarContainer>
    </SAssetListItemTextWrapper>
  )
}
