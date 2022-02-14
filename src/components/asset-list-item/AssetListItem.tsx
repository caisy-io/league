import React from 'react';
import { SAssetListItem } from './styles/SAssetListItem';

export interface IAssetListItemProps {
  error?: boolean,
  children?
}

export const AssetListItem: React.FC<IAssetListItemProps> = ({ error,  children }) => {
  return (
    <SAssetListItem error={error}>
      {children}
    </SAssetListItem>
  )
}
