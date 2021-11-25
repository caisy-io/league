import React, { ReactNode } from 'react';
import { SLineTabs } from './styles/SLineTabs';

export interface ILineTabsProps {
  hover?: boolean;
  activated?: boolean;
  title?: string | undefined;
  onClick: () => void;
}

export const LineTabs: React.FC<ILineTabsProps> = ({ ...props }) => {
  return (
    <SLineTabs {...props}>
      {props.title}
      {props.children}
    </SLineTabs>
  )
}
