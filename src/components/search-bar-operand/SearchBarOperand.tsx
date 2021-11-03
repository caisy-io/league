import React from 'react';
import {SSearchBarOperand} from './styles/SSearchBarOperand';

interface ISearchBarOperand{

}

export const SearchBarOperand: React.FC<ISearchBarOperand> = ({...props}) => {
  console.log(`SearchBarOperand props: `, props);
  return (
    <SSearchBarOperand>
      {props.children}
    </SSearchBarOperand>
  )
}
