import React, { FC } from 'react';
import { SAssetImageCardSkeleton } from './styles/SAssetImageCardSkeleton';
import { SAssetImageRadioContainer } from './styles/SAssetImageRadioContainer';
import { SSkeleton } from '../skeleton';

export const AssetImageCardSkeleton: FC<{width: number, height: number}> = ({width, height}) => {
  console.log(` width`, width);
  return (
    <SAssetImageCardSkeleton>
      <SSkeleton width={`${width}px`} height={`${height - 40}px`} borderRadius={"0"} />
      <SAssetImageRadioContainer>
        <SSkeleton borderRadis={"40px"} 
        left={"-14px"} shimmerWidth={`${width}px`} 
        />
        <SSkeleton width="80px" left={"-42px"} shimmerWidth={`${width}px`} />
      </SAssetImageRadioContainer>
    </SAssetImageCardSkeleton>
  )
}
