import React from 'react';
import { ISearchBarOperandProps } from './SearchBarOperand';
import {SSearchBarOperandEntity} from './styles/SSearchBarOperandEntity';

export const SearchBarOperandEntity: React.FC<ISearchBarOperandProps> = ({...props}) => {
  return (
    <SSearchBarOperandEntity {...props}>
      {props.children}
    </SSearchBarOperandEntity>
  )
}
