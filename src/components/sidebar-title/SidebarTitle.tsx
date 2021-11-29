import React, { ReactNode, useState } from 'react';
import { SSidebarTitle } from './styles/SSidebarTitle';
import { SSidebarTitleLabel } from './styles/SSidebarTitleLabel';
import { SSidebarTitleWrapper } from './styles/SSidebarTitleWrapper';
import { Toggle } from '../toggle';

export interface ISidebarTitleProps {
  icon?: ReactNode;
  toggle?: boolean;
}

export const SidebarTitle: React.FC<ISidebarTitleProps> = ({ ...props }) => {
  const [value, onChange] = useState(true);
  return (
    <SSidebarTitle>
      <SSidebarTitleWrapper {...props}>
        {props.icon}
        <SSidebarTitleLabel {...props}>{props.children}</SSidebarTitleLabel>
      </SSidebarTitleWrapper>
      {props.toggle && <Toggle small value={value} onChange={() => onChange(!value)}></Toggle>}
    </SSidebarTitle >
  )
}
