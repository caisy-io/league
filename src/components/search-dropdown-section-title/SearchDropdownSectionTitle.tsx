import React from 'react';
import {SSearchDropdownSectionTitle } from './styles/SSearchDropdownSectionTitle';

interface ISearchDropdownSectionTitle{
  children?
}

export const SearchDropdownSectionTitle: React.FC<ISearchDropdownSectionTitle> = ({children}) => {
  return (
    <SSearchDropdownSectionTitle>
      {children}
    </SSearchDropdownSectionTitle>
  )
}
