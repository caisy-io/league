import React, { FC } from 'react';
import { SAssetImageCardSkeleton } from './styles/SAssetImageCardSkeleton';
import { SAssetImageRadioContainer } from './styles/SAssetImageRadioContainer';
import { SSkeleton } from '../skeleton';

export const AssetImageCardSkeleton: FC<{disableAnimation?: boolean}> = ({disableAnimation}) => {
  return (
    <SAssetImageCardSkeleton>
      <SSkeleton disableAnimation={disableAnimation}  width="100%" height={"calc(100% - 40px)"} borderRadius={"0"} />
      <SAssetImageRadioContainer>
        <SSkeleton disableAnimation={disableAnimation} borderRadius="16px" />
        <SSkeleton disableAnimation={disableAnimation} width="80px" borderRadius="4px" />
      </SAssetImageRadioContainer>
    </SAssetImageCardSkeleton>
  )
}
