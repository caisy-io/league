import React from 'react';
import { SSearchBarOperator } from './styles/SSearchBarOperator';
import { SSearchBarOperatorWrapper } from './styles/SSearchBarOperatorWrapper';

export interface ISearchBarOperatorProps {
  hover?: boolean;
  activated?: boolean;
}

export const SearchBarOperator: React.FC<ISearchBarOperatorProps> = ({ ...props }) => {
  return (
    <SSearchBarOperatorWrapper { ...props }>
      <SSearchBarOperator { ...props }>
        {props.children}
      </SSearchBarOperator>
    </SSearchBarOperatorWrapper>
  )
}
