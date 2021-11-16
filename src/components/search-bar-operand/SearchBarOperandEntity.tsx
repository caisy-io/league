import React from 'react';
import {SSearchBarOperandEntity} from './styles/SSearchBarOperandEntity';
interface ISearchBarOperand{
  activated?: boolean;
}

export const SearchBarOperandEntity: React.FC<ISearchBarOperand> = ({...props}) => {
  return (
    <SSearchBarOperandEntity {...props}>
      {props.children}
    </SSearchBarOperandEntity>
  )
}
