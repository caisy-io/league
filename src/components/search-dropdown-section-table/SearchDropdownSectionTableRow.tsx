import React from 'react';
import { SSearchDropdownSectionTableRow } from './styles/SSearchDropdownSectionTableHeaderRow';

interface ISearchDropdownSectionTableRow {
  children?
}

export const SearchDropdownSectionTableRow: React.FC<ISearchDropdownSectionTableRow> = ({ children }) => {
  return (
    <SSearchDropdownSectionTableRow>
      {children}
    </SSearchDropdownSectionTableRow>
  )
}
