import React from 'react';
import {SSearchDropdownSectionTable } from './styles/SSearchDropdownSectionTable';

interface ISearchDropdownSectionTable{
  children?
}

export const SearchDropdownSectionTable: React.FC<ISearchDropdownSectionTable> = ({children}) => {
  return (
    <SSearchDropdownSectionTable>
      {children}
    </SSearchDropdownSectionTable>
  )
}
