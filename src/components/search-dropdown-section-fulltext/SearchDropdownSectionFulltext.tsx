import React, { MouseEventHandler } from 'react';
import { SSearchDropdownSectionFulltext } from './styles/SSearchDropdownSectionFulltext';

interface ISearchDropdownSectionFulltext{
  onClick?: (e: MouseEventHandler<HTMLDivElement>) => void;
  children?
}

export const SearchDropdownSectionFulltext: React.FC<ISearchDropdownSectionFulltext> = ({onClick, children}) => {
  return (
    <SSearchDropdownSectionFulltext onClick={onClick}>
      {children}
    </SSearchDropdownSectionFulltext>
  )
}
