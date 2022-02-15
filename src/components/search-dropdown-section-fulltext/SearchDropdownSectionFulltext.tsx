import React, { MouseEventHandler } from 'react';
import { SSearchDropdownSectionFulltext } from './styles/SSearchDropdownSectionFulltext';

interface ISearchDropdownSectionFulltext{
  onClick?: (e: MouseEventHandler<HTMLDivElement>) => void;
  active?: boolean;
  children?
}

export const SearchDropdownSectionFulltext: React.FC<ISearchDropdownSectionFulltext> = ({active, onClick, children}) => {
  return (
    <SSearchDropdownSectionFulltext active={active} onClick={onClick}>
      {children}
    </SSearchDropdownSectionFulltext>
  )
}
