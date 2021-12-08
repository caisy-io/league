import React from 'react';
import { SOrganizationMenu } from './styles/SOrganizationMenu';

interface IOrganizationMenuProps{
  children?
}

export const OrganizationMenu: React.FC<IOrganizationMenuProps> = ({children}) => {
  
  return (
    <SOrganizationMenu>
      {children}
    </SOrganizationMenu>
  )
}
