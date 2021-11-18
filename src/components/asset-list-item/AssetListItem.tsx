import React from 'react';
import { IconClose } from '../..';
import {SAssetListItem } from './styles/SAssetListItem';

interface IAssetListItem{

}

export const AssetListItem: React.FC<IAssetListItem> = ({...props}) => {
  console.log(`AssetListItem props: `, props);
  return (
    <SAssetListItem>
      {props.children}
      <IconClose></IconClose>
    </SAssetListItem>
  )
}
