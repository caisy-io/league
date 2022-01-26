import React from 'react';
import { IconListPlaceholder } from '../../icons/IconListPlaceholder';
import {SListPlaceholder } from './styles/SListPlaceholder';

interface IListPlaceholder{
  children?
}

export const ListPlaceholder: React.FC<IListPlaceholder> = ({children}) => {
  return (
    <SListPlaceholder>
      <IconListPlaceholder/>
    </SListPlaceholder>
  )
}
