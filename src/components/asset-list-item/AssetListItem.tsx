import React from 'react';
import { IconCross } from '../../icons/IconCross';
import { ImageContainer } from './ImageContainer';
import { SAssetListItem } from './styles/SAssetListItem';
import { SAssetListItemDescription } from './styles/SAssetListItemDescription';
import { SAssetListItemTitle } from './styles/SAssetListItemTitle';
import { SAssetListItemTextWrapper } from './styles/SAssetListItemTextWrapper';

interface IAssetListItem {
  title?: String | undefined;
  description?: String | undefined;
  image?: React.ReactNode;
}

export const AssetListItem: React.FC<IAssetListItem> = ({ ...props }) => {
  console.log(`AssetListItem props: `, props);
  return (
    <SAssetListItem>
      <ImageContainer></ImageContainer>
      <SAssetListItemTextWrapper>
        <SAssetListItemTitle>{props.title}</SAssetListItemTitle>
        <SAssetListItemDescription>{props.description}</SAssetListItemDescription>
      </SAssetListItemTextWrapper>
      {props.children}
      <IconCross variant={'close'}></IconCross>
    </SAssetListItem>
  )
}
