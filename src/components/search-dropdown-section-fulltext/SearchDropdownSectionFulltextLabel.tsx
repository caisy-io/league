import React from 'react';
import { SSearchDropdownSectionFulltextTopLabel } from './styles/SSearchDropdownSectionFulltextTopLabel';

interface ISearchDropdownSectionFulltextLabel {
  children?
}

export const SearchDropdownSectionFulltextLabel: React.FC<ISearchDropdownSectionFulltextLabel> = ({ children }) => {
  return (
    <SSearchDropdownSectionFulltextTopLabel>
      {children}
    </SSearchDropdownSectionFulltextTopLabel>
  )
}
