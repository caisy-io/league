import React, { MouseEventHandler } from 'react';
import { SSearchBarOperand } from './styles/SSearchBarOperand';

export interface ISearchBarOperandProps {
  hover?: boolean;
  activated?: boolean;
  onClick?: (e: MouseEventHandler<HTMLDivElement>) => void;
  children?
}

export const SearchBarOperand: React.FC<ISearchBarOperandProps> = ({  onClick, hover, activated, children }) => {
  return (
    <SSearchBarOperand hover={hover} activated={activated} onClick={onClick}>
      {children}
    </SSearchBarOperand>
  )
}
