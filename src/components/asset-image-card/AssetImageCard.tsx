import React, { ReactNode } from 'react';
import { SAssetImage } from './styles/SAssetImage';
import { SAssetImageCard } from './styles/SAssetImageCard';
import { SAssetImageRadioContainer } from './styles/SAssetImageRadioContainer';

interface IAssetImageCard {
  image?: ReactNode;
}

export const AssetImageCard: React.FC<IAssetImageCard> = ({ image }) => {
  return (
    <SAssetImageCard>
      <SAssetImage>{image}</SAssetImage>
      <SAssetImageRadioContainer></SAssetImageRadioContainer>
    </SAssetImageCard>
  )
}
