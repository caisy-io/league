import React, { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Toggle } from '../toggle';
import { SSidebarTitle } from './styles/SSidebarTitle';
import { SSidebarTitleLabel } from './styles/SSidebarTitleLabel';
import { SSidebarTitleWrapper } from './styles/SSidebarTitleWrapper';

export interface ISidebarTitleProps {
  icon?: ReactNode,
  toggle?: boolean,
  children?
}

const SToggle = styled(Toggle)`
  /* margin-left: 0.5rem; */
`;

export const SidebarTitle: FC<ISidebarTitleProps> = ({ icon, toggle, children }) => {
  const [value, onChange] = useState(true);
  return (
    <SSidebarTitle>
      <SSidebarTitleWrapper icon={icon} toggle={toggle}>
        {icon}
        <SSidebarTitleLabel>{children}</SSidebarTitleLabel>
      </SSidebarTitleWrapper>
      {toggle && <SToggle small value={value} onChange={() => onChange(!value)}></SToggle>}
    </SSidebarTitle >
  )
}
