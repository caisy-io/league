import React from 'react';
import { SSearchDropdownSectionTableHeader } from './styles/SSearchDropdownSectionTableHeader';

interface ISearchDropdownSectionTableHeader{
  children?
}

export const SearchDropdownSectionTableHeader: React.FC<ISearchDropdownSectionTableHeader> = ({children}) => {
  return (
    <SSearchDropdownSectionTableHeader>
      {children}
    </SSearchDropdownSectionTableHeader>
  )
}
