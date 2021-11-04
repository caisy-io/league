import React from 'react';
import {SSearchBarOperandEntity} from './styles/SSearchBarOperandEntity';
export type ISearchBarOperandType = "default" | "hover" | "activated";

interface ISearchBarOperand{
  type?: ISearchBarOperandType;
}

export const SearchBarOperandEntity: React.FC<ISearchBarOperand> = ({...props}) => {
  console.log(`SearchBarOperand props: `, props);
  return (
    <SSearchBarOperandEntity {...props}>
      {props.children}
    </SSearchBarOperandEntity>
  )
}
