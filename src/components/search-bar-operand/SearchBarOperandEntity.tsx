import React from 'react';
import { ISearchBarOperandProps } from './SearchBarOperand';
import { SSearchBarOperandEntity } from './styles/SSearchBarOperandEntity';

export const SearchBarOperandEntity: React.FC<ISearchBarOperandProps> = ({ activated, children }) => {
  return (
    <SSearchBarOperandEntity activated={activated}>
      {children}
    </SSearchBarOperandEntity>
  )
}
