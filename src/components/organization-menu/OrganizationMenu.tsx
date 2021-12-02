import React from 'react';
import { Button } from '..';
import { OrganizationMenuListItem } from '../organization-menu-list-item/OrganizationMenuListItem';
import {SOrganizationMenu } from './styles/SOrganizationMenu';

interface IOrganizationMenu{

}

export const OrganizationMenu: React.FC<IOrganizationMenu> = ({...props}) => {
  
  return (
    <SOrganizationMenu>
      {props.children}
    </SOrganizationMenu>
  )
}
