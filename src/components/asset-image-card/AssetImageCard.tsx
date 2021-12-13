import React from 'react';
import {SAssetImageCard } from './styles/SAssetImageCard';

interface IAssetImageCard{

}

export const AssetImageCard: React.FC<IAssetImageCard> = ({...props}) => {
  console.log(`AssetImageCard props: `, props);
  return (
    <SAssetImageCard>
      {props.children}
    </SAssetImageCard>
  )
}
