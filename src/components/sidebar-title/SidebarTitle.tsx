import React from 'react';
import { SSidebarTitle } from './styles/SSidebarTitle';
import { SSidebarTitleLabel } from './styles/SSidebarTitleLabel';
import { SSidebarTitleWrapper } from './styles/SSidebarTitleWrapper';

export interface ISidebarTitleProps {
  toggleComponent?: React.ReactNode;
  icon?: React.ReactNode;
}

export const SidebarTitle: React.FC<ISidebarTitleProps> = ({ ...props }) => {
  return (
    <SSidebarTitle>
      <SSidebarTitleWrapper {...props}>
        {props.icon}
        <SSidebarTitleLabel >{props.children}</SSidebarTitleLabel>
      </SSidebarTitleWrapper>
      {props.toggleComponent}
    </SSidebarTitle >
  )
}
