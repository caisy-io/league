import React, { MouseEventHandler } from 'react';
import { SSearchDropdownSectionTableRow } from './styles/SSearchDropdownSectionTableHeaderRow';

interface ISearchDropdownSectionTableRow {
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  active?: boolean;
  children?
}

export const SearchDropdownSectionTableRow: React.FC<ISearchDropdownSectionTableRow> = ({ active, onClick, children }) => {
  return (
    <SSearchDropdownSectionTableRow active={active} onClick={onClick}>
      {children}
    </SSearchDropdownSectionTableRow>
  )
}
