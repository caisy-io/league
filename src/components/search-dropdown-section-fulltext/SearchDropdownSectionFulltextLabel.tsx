import React from 'react';
import { SSearchDropdownSectionFulltextTopLabel } from './styles/SSearchDropdownSectionFulltextTopLabel';

interface ISearchDropdownSectionFulltextLabel {
  children?: React.ReactNode
}

export const SearchDropdownSectionFulltextLabel: React.FC<ISearchDropdownSectionFulltextLabel> = ({ children }) => {
  return (
    <SSearchDropdownSectionFulltextTopLabel>
      {children}
    </SSearchDropdownSectionFulltextTopLabel>
  )
}
