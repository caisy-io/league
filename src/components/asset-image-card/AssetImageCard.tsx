import React, { ReactNode } from 'react';
import { SAssetImage } from './styles/SAssetImage';
import { SAssetImageCard } from './styles/SAssetImageCard';
import { SAssetImageLabel } from './styles/SAssetImageLabel';
import { SAssetImageRadioContainer } from './styles/SAssetImageRadioContainer';

export type IAssetImageCardSizeType = "simple" | "small";

interface IAssetImageCard {
  image?: ReactNode;
  size?: IAssetImageCardSizeType;
  labelText?: string;
  activated?: boolean;
}

export const AssetImageCard: React.FC<IAssetImageCard> = ({ labelText, size, image, activated }) => {
  return (
    <SAssetImageCard size={size}>
      <SAssetImage>{image}</SAssetImage>
      <SAssetImageRadioContainer>
        <SAssetImageLabel activated={activated}>{labelText}</SAssetImageLabel>
      </SAssetImageRadioContainer>
    </SAssetImageCard>
  )
}
