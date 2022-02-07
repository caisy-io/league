import React from 'react';
import {SViewItem } from './styles/SViewItem';

interface IViewItem{
  children?
}

export const ViewItem: React.FC<IViewItem> = ({children}) => {
  return (
    <SViewItem>
      {children}
    </SViewItem>
  )
}
