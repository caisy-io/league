import React from "react";
import { OrganizationMenu } from './OrganizationMenu';

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
    {content}
  </OrganizationMenu>
}

const Template = (args) => < OrganizationMenuDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};
