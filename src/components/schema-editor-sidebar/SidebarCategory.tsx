import React from 'react';
import { SidebarTitle } from '../sidebar-title';
import { SSidebarCategoryWrapper } from './styles/SSidebarCategoryWrapper';

export const SidebarCategory = ({ title, icon, children }) => {
  return (
    <SSidebarCategoryWrapper>
      <SidebarTitle icon={icon}>{title}</SidebarTitle>
      {children}
    </SSidebarCategoryWrapper>
  )
}
