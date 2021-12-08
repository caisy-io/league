import React from 'react';
import { SSearchBarOperand } from './styles/SSearchBarOperand';
import { SSearchBarOperandLabel } from './styles/SSearchBarOperandLabel';

export interface ISearchBarOperandProps {
  hover?: boolean;
  activated?: boolean;
  label?: string | undefined;
  children?
}

export const SearchBarOperand: React.FC<ISearchBarOperandProps> = ({ label, hover, activated, children }) => {
  return (
    <SSearchBarOperand hover={hover} activated={activated}>
      {children}
      <SSearchBarOperandLabel activated={activated}>{label}</SSearchBarOperandLabel>
    </SSearchBarOperand>
  )
}
