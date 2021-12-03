import React from "react";
import { OrganizationMenu } from './OrganizationMenu';
import { SettingsList } from './SettingsList';
import { SelectionWrapper } from './SelectionWrapper';
import { OrganizationMenuListItem } from '../organization-menu-list-item';
import { Button } from '../button';
import { Badge } from '../badge';
import { EBadgePosition } from '../badge';
import { MenuListItem } from '../menu-list-item/MenuListItem';
import { IconCog } from '../../icons/IconCog';
import { IconTeam } from '../../icons/IconTeam';
import { IconWorkflow } from '../../icons/IconWorkflow';

export default {
  title: `Components/OrganizationMenu`,
  component: OrganizationMenuDemo,
  argTypes: {
    // example argument type
    activated: {
      description: "Changes the state of the component to Activated",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

function OrganizationMenuDemo({ content, ...args }) {
  return <OrganizationMenu>
    <OrganizationMenuListItem title="Default" label="Organization"></OrganizationMenuListItem>
    <Button type="tertiary">Organization settings</Button>
    
    <SelectionWrapper>
      <OrganizationMenuListItem itemSize="medium" value="3"><Badge value="1" position={EBadgePosition.Center} type={'regular'} size="small"></Badge></OrganizationMenuListItem>
      
    </SelectionWrapper>

    <SettingsList listTitle="Project settings">
      <MenuListItem size="small">
        <div> <IconCog /> <span >General settings</span></div>
      </MenuListItem>
      <MenuListItem size="small">
        <div> <IconWorkflow /> <span >Workflows</span></div>
      </MenuListItem>
      <MenuListItem size="small">
        <div> <IconTeam /> <span >Team members</span></div>
      </MenuListItem>
    </SettingsList>
  </OrganizationMenu >
}

const Template = (args) => < OrganizationMenuDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};
