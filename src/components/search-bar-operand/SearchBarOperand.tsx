import React from 'react';
import { SSearchBarOperand } from './styles/SSearchBarOperand';

export interface ISearchBarOperandProps {
  hover?: boolean;
  activated?: boolean;
}

export const SearchBarOperand: React.FC<ISearchBarOperandProps> = ({ ...props }) => {
  return (
    <SSearchBarOperand {...props}>
      {props.children}
    </SSearchBarOperand>
  )
}
