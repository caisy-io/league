import React, { ReactNode } from 'react';
import { IconDragable, IconStarOutlined } from '../..';
import { SSidebarCardSubtitle } from './styles/SSidebarCardSubtitle';
import { SSidebarCardTitle } from './styles/SSidebarCardTitle';
import { SSidebarCard } from './styles/SSidebarCard';

interface ISidebarCardProps {
  hover?: boolean,
  drag?: boolean,
  headline: string | undefined,
  description: string | undefined,
  icon: React.ReactNode,
}

export const SidebarCard: React.FC<ISidebarCardProps> = ({ ...props }) => {
  console.log(`SidebarCard props: `, props);
  return (
    <SSidebarCard>
      <IconStarOutlined></IconStarOutlined>
      <div>
        <SSidebarCardTitle>Default {props.headline}</SSidebarCardTitle>
        <SSidebarCardSubtitle>Lorem ipsum {props.description}</SSidebarCardSubtitle>
      </div>
      {props.children}
      <IconDragable></IconDragable>
    </SSidebarCard>
  )
}
