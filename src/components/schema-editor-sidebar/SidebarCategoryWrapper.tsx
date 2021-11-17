import React from 'react';
import { SSidebarCategoryWrapper } from './styles/SSidebarCategoryWrapper';

export const SidebarCategoryWrapper: React.FC= ({...props}) => {
  return (
    <SSidebarCategoryWrapper>
      {props.children}
    </SSidebarCategoryWrapper>
  )
}
