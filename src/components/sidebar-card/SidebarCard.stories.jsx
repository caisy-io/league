import React from "react";
import { IconGearSettings } from "../..";
import { Card } from '../card';
import { SidebarCard } from '../sidebar-card';

export default {
  title: `Components/SidebarCard`,
  component: SidebarCardDemo,
  argTypes: {
    state: {
      description: "Changes the overall design of the sidebar card",
      options: ["default", "hover", "drag"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
  },
};

function SidebarCardDemo({ content, ...args }) {
  return <Card>
    <SidebarCard drag={args.state == "drag"} hover={args.state == "hover"}>
      {content}
    </SidebarCard>
  </Card>
}

const Template = (args) => < SidebarCardDemo {...args} />;

export const FieldCard = Template.bind({});
FieldCard.args = {
  state: "default",
};

// With entity
export const TemplateCard = ({ content, ...args }) => (
  <Card>
    <SidebarCard drag={args.state == "drag"} hover={args.state == "hover"}>
      {content}
      <IconGearSettings></IconGearSettings>
    </SidebarCard>
  </Card>
);

TemplateCard.args = {
  state: "default",
};
