import React from 'react';
import { SSearchBarOperand } from './styles/SSearchBarOperand';
import { SSearchBarOperandEntity } from './styles/SSearchBarOperandEntity';
export type ISearchBarOperandType = "default" | "hover" | "active";

export interface ISearchBarOperandProps {
  hover?: boolean;
  active?: boolean;
}

export const SearchBarOperand: React.FC<ISearchBarOperandProps> = ({ ...props }) => {
  console.log(`SearchBarOperand props: `, props);
  return (
    <SSearchBarOperand {...props}>
      {props.children}
    </SSearchBarOperand>
  )
}
