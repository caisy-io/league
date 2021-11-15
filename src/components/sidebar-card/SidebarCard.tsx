import React from 'react';
import { IconDragable } from '../..';
import { SFlex } from '../../base-components/flex/styles/SFlex';
import { SSidebarCard } from './styles/SSidebarCard';
import { SSidebarcardIconWrapper } from './styles/SSidebarCardIconWrapper';
import { SSidebarCardSubtitle } from './styles/SSidebarCardSubtitle';
import { SSidebarCardTitle } from './styles/SSidebarCardTitle';

export interface ISidebarCardProps {
  hover?: boolean,
  drag?: boolean,
  title?: string | undefined,
  description?: string | undefined,
  icon: React.ReactNode,
}

export const SidebarCard: React.FC<ISidebarCardProps> = ({ ...props }) => {
  return (
    <SSidebarCard {...props}>
      <SFlex>
        {props.icon}
        <div>
          <SSidebarCardTitle> {props.title}</SSidebarCardTitle>
          <SSidebarCardSubtitle>  {props.description}</SSidebarCardSubtitle>
        </div>
      </SFlex>
      <SSidebarcardIconWrapper {...props}>
        {props.children}
        <IconDragable></IconDragable>
      </SSidebarcardIconWrapper>
    </SSidebarCard>
  )
}
