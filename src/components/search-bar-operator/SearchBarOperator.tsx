import React, { forwardRef, MouseEventHandler } from 'react';
import { SSearchBarOperator } from './styles/SSearchBarOperator';
import { SSearchBarOperatorWrapper } from './styles/SSearchBarOperatorWrapper';

export interface ISearchBarOperatorProps {
  hover?: boolean;
  activated?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  children?
}

export const SearchBarOperator = forwardRef<HTMLDivElement,ISearchBarOperatorProps>( ({onClick,  ...props }, ref) => {
  return (
    <SSearchBarOperatorWrapper { ...props } onClick={onClick} ref={ref}>
      <SSearchBarOperator { ...props }>
        {props.children}
      </SSearchBarOperator>
    </SSearchBarOperatorWrapper>
  )
});
