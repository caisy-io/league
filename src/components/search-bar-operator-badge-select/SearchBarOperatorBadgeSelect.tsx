import React from 'react';
import { SSearchBarOperatorBadgeSelect } from './styles/SSearchBarOperatorBadgeSelect';

export interface ISearchBarOperatorBadgeSelectProps {
  hover?: boolean;
  active?: boolean;
}

export const SearchBarOperatorBadgeSelect: React.FC<ISearchBarOperatorBadgeSelectProps> = ({ ...props }) => {
  console.log(`SearchBarOperatorBadgeSelect props: `, props);
  return (
    <SSearchBarOperatorBadgeSelect {...props}>
      {props.children}
    </SSearchBarOperatorBadgeSelect>
  )
}
