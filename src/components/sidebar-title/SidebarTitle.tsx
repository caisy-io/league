import React, { ReactNode, useState, FC } from 'react';
import { SSidebarTitle } from './styles/SSidebarTitle';
import { SSidebarTitleLabel } from './styles/SSidebarTitleLabel';
import { SSidebarTitleWrapper } from './styles/SSidebarTitleWrapper';
import { Toggle } from '../toggle';

export interface ISidebarTitleProps {
  icon?: ReactNode,
  toggle?: boolean,
  children?
}

export const SidebarTitle: FC<ISidebarTitleProps> = ({icon, toggle, children}) => {
  const [value, onChange] = useState(true);
  return (
    <SSidebarTitle>
      <SSidebarTitleWrapper icon={icon} toggle={toggle}>
        {icon}
        <SSidebarTitleLabel icon={icon} toggle={toggle}>{children}</SSidebarTitleLabel>
      </SSidebarTitleWrapper>
      {toggle && <Toggle small value={value} onChange={() => onChange(!value)}></Toggle>}
    </SSidebarTitle >
  )
}
