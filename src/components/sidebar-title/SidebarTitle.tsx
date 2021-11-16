import React from 'react';
import { SSidebarTitle } from './styles/SSidebarTitle';

interface ISidebarTitle {
  toggle?: boolean;
  icon?: React.ReactNode;
}

export const SidebarTitle: React.FC<ISidebarTitle> = ({ ...props }) => {
  console.log(`SidebarTitle props: `, props);
  return (
    <SSidebarTitle>
      {props.icon}
      {props.children}
    </SSidebarTitle>
  )
}
