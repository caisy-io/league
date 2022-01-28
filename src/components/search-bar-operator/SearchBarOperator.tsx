import React, { MouseEventHandler } from 'react';
import { SSearchBarOperator } from './styles/SSearchBarOperator';
import { SSearchBarOperatorWrapper } from './styles/SSearchBarOperatorWrapper';

export interface ISearchBarOperatorProps {
  hover?: boolean;
  activated?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export const SearchBarOperator: React.FC<ISearchBarOperatorProps> = ({onClick,  ...props }) => {
  return (
    <SSearchBarOperatorWrapper { ...props } onClick={onClick}>
      <SSearchBarOperator { ...props }>
        {props.children}
      </SSearchBarOperator>
    </SSearchBarOperatorWrapper>
  )
}
