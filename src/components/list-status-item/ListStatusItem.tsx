import React, { ReactNode } from 'react';
import { SolidLabel } from '../solid-label';
import { SListStatusItem } from './styles/SListStatusItem';
import { SListStatusItemFlex } from './styles/SListStatusItemFlex';
import { SListStatusItemText } from './styles/SListStatusItemText';

interface IListStatusItem {
  itemIcon?: ReactNode,
  listItemText?: string,
  labelText?: string,
}

export const ListStatusItem: React.FC<IListStatusItem> = ({ itemIcon, listItemText, labelText }) => {
  return (
    <SListStatusItem>
      <SListStatusItemFlex>
        {itemIcon}
        <SListStatusItemText>{listItemText}</SListStatusItemText>
      </SListStatusItemFlex>
      <SolidLabel type="grey">{labelText}</SolidLabel>
    </SListStatusItem>
  )
}
