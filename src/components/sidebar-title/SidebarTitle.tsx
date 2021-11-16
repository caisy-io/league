import React from 'react';
import { SFlex } from '../../base-components/flex/styles/SFlex';
import { Switch } from '../../components/switch';
import { SSidebarTitle } from './styles/SSidebarTitle';
import { SSidebarTitleLabel } from './styles/SSidebarTitleLabel';

interface ISidebarTitle {
  toggleComponent?: React.ReactNode;
  icon?: React.ReactNode;
}

export const SidebarTitle: React.FC<ISidebarTitle> = ({ ...props }) => {
  return (
    <SSidebarTitle>
      <SFlex>
        {props.icon}
        <SSidebarTitleLabel>{props.children}</SSidebarTitleLabel>
      </SFlex>
    </SSidebarTitle >
  )
}
