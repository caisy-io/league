import React, { ReactNode } from 'react';
import { SolidLabel } from '../solidLabel';
import { SListStatusItem } from './styles/SListStatusItem';
import { SListStatusItemFlex } from './styles/SListStatusItemFlex';
import { SListStatusItemText } from './styles/SListStatusItemText';

interface IListStatusItem {
  itemIcon?: ReactNode,
  itemText?: string,
}

export const ListStatusItem: React.FC<IListStatusItem> = ({ itemIcon, itemText }) => {
  return (
    <SListStatusItem>
      <SListStatusItemFlex>
        {itemIcon}
        <SListStatusItemText>{itemText}</SListStatusItemText>
      </SListStatusItemFlex>
      <SolidLabel>Default</SolidLabel>
    </SListStatusItem>
  )
}
