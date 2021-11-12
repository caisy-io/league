import React from 'react';
import { SSearchBarOperatorBadgeSelect } from './styles/SSearchBarOperatorBadgeSelect';

export interface ISearchBarOperatorBadgeSelectProps {
  hover?: boolean;
  activated?: boolean;
}

export const SearchBarOperatorBadgeSelect: React.FC<ISearchBarOperatorBadgeSelectProps> = ({ ...props }) => {
  return (
    <SSearchBarOperatorBadgeSelect {...props}>
      {props.children}
    </SSearchBarOperatorBadgeSelect>
  )
}
