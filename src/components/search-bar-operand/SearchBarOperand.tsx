import React from 'react';
import { SSearchBarOperand } from './styles/SSearchBarOperand';
import { SSearchBarOperandLabel } from './styles/SSearchBarOperandLabel';

export interface ISearchBarOperandProps {
  hover?: boolean;
  activated?: boolean;
  label?: string | undefined;
}

export const SearchBarOperand: React.FC<ISearchBarOperandProps> = ({ ...props }) => {
  return (
    <SSearchBarOperand {...props}>
      {props.children}
      <SSearchBarOperandLabel {...props}>{props.label}</SSearchBarOperandLabel>
    </SSearchBarOperand>
  )
}
