import React, { MouseEventHandler } from 'react';
import { SSearchDropdownSectionTableRow } from './styles/SSearchDropdownSectionTableHeaderRow';

interface ISearchDropdownSectionTableRow {
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  children?
}

export const SearchDropdownSectionTableRow: React.FC<ISearchDropdownSectionTableRow> = ({ onClick, children }) => {
  return (
    <SSearchDropdownSectionTableRow onClick={onClick}>
      {children}
    </SSearchDropdownSectionTableRow>
  )
}
