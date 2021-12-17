import React, { ReactNode, useState } from 'react';
import { Checkbox } from '../checkbox/Checkbox';
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
  const [isActivated, setIsActivated] = useState(false);
  const handleChange = () => {
    setIsActivated(true)
  }
  return (
    <SAssetImageCard size={size}>
      <SAssetImage>{image}</SAssetImage>
      <SAssetImageRadioContainer>
        <Checkbox onChange={handleChange()}></Checkbox>
        <SAssetImageLabel activated={isActivated}>{labelText}</SAssetImageLabel>
      </SAssetImageRadioContainer>
    </SAssetImageCard>
  )
}
