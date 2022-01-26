import React from 'react';
import {SListItemContent } from './styles/SListItemContent';

interface IListItemContent{
  children?
}

export const ListItemContent: React.FC<IListItemContent> = ({children}) => {
  return (
    <SListItemContent>
      {children}
    </SListItemContent>
  )
}
