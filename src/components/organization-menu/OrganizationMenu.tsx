import React from 'react';
import { SOrganizationMenu } from './styles/SOrganizationMenu';

interface IOrganizationMenuProps{

}

export const OrganizationMenu: React.FC<IOrganizationMenuProps> = ({...props}) => {
  
  return (
    <SOrganizationMenu>
      {props.children}
    </SOrganizationMenu>
  )
}
