import React from 'react';
import { SLineTab } from './styles/SLineTab';

export interface ILineTabProps {
  hover?: boolean;
  activated?: boolean;
  title?: string | undefined;
  onClick: () => void;
}

export const LineTab: React.FC<ILineTabProps> = ({ ...props }) => {
  return (
    <SLineTab {...props}>
      {props.title}
      {props.children}
    </SLineTab>
  )
}
