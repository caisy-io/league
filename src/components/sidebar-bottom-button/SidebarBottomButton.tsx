import React from 'react';
import {SSidebarBottomButton } from './styles/SSidebarBottomButton';

interface ISidebarBottomButton{
  active?: boolean;
}

export const SidebarBottomButton: React.FC<ISidebarBottomButton> = ({active, children}) => {
  return (
    <SSidebarBottomButton active={active}>
      {children}
    </SSidebarBottomButton>
  )
}
