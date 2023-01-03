import React from 'react';
import {SSearchDropdownSectionTable } from './styles/SSearchDropdownSectionTable';

interface ISearchDropdownSectionTable{
  children?: React.ReactNode
}

export const SearchDropdownSectionTable: React.FC<ISearchDropdownSectionTable> = ({children}) => {
  return (
    <SSearchDropdownSectionTable>
      {children}
    </SSearchDropdownSectionTable>
  )
}
