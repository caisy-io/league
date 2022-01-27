import React from 'react';
import { SSearchDropdownSectionFulltext } from './styles/SSearchDropdownSectionFulltext';

interface ISearchDropdownSectionFulltext{
  children?
}

export const SearchDropdownSectionFulltext: React.FC<ISearchDropdownSectionFulltext> = ({children}) => {
  return (
    <SSearchDropdownSectionFulltext>
      {children}
    </SSearchDropdownSectionFulltext>
  )
}
