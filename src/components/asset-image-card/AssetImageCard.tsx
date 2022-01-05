import React, { ReactNode } from 'react';
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
  onChange: (e: Event) => void,
}

export const AssetImageCard: React.FC<IAssetImageCard> = ({ labelText, size, image, activated, onChange }) => {

  return (
    <SAssetImageCard size={size} activated={activated}>
      <SAssetImage>{image}</SAssetImage>
      <SAssetImageRadioContainer>
        <Checkbox onChange={onChange} checked={activated}></Checkbox>
        <SAssetImageLabel activated={activated}>{labelText}</SAssetImageLabel>
      </SAssetImageRadioContainer>
    </SAssetImageCard>
  )
}
