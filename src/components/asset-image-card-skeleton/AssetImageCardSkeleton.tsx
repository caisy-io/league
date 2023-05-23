import React, { FC } from 'react';
import { SAssetImageCardSkeleton } from './styles/SAssetImageCardSkeleton';
import { SAssetImageRadioContainer } from './styles/SAssetImageRadioContainer';
import { SSkeleton } from '../skeleton';

export const AssetImageCardSkeleton: FC = () => {
  return (
    <SAssetImageCardSkeleton>
      <SSkeleton width="100%" height={"calc(100% - 40px)"} borderRadius={"0"} />
      <SAssetImageRadioContainer>
        <SSkeleton borderRadius="16px" />
        <SSkeleton width="80px" borderRadius="4px" />
      </SAssetImageRadioContainer>
    </SAssetImageCardSkeleton>
  )
}
