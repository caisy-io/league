import React from "react";
import { OrganizationMenu } from './OrganizationMenu';
import { SettingsList } from './SettingsList';
import { OrganizationMenuListItem } from '../organization-menu-list-item';
import { Button } from '../button';

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
    <SettingsList listTitle="Project settings">
      <MenuListItem>
        <div><IconCog></IconCog></div>
      </MenuListItem>
    </SettingsList>
  </OrganizationMenu >
}

const Template = (args) => < OrganizationMenuDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};
