import React from 'react';
import {SDropdownCard } from './styles/SDropdownCard';

interface IDropdownCard{
  children?
}

export const DropdownCard: React.FC<IDropdownCard> = ({children}) => {
  return (
    <SDropdownCard>
      {children}
    </SDropdownCard>
  )
}
