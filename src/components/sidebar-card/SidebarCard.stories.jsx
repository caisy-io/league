import React from "react";
import { IconGearSettings, IconStarOutlined } from "../..";
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
    title: {
      description: "Title text of the sidebar card",
      control: { type: "text" },
    },
    description: {
      description: "Description text of the sidebar card",
      control: { type: "text" },
    },
  },
};

// Field card
function SidebarCardDemo({ content, ...args }) {
  return <div style={{ width: "261px" }}>
    <SidebarCard drag={args.state == "drag"} icon={<IconStarOutlined></IconStarOutlined>} hover={args.state == "hover"} title={args.title} description={args.description}>
      {content}
    </SidebarCard> </div>

}

const Template = (args) => < SidebarCardDemo {...args} />;

export const FieldCard = Template.bind({});
FieldCard.args = {
  state: "default",
  title: "Default",
  description: "Lorem ipsum"
};

// Template card
export const TemplateCard = ({ content, ...args }) => (
  <div style={{ width: "261px" }}>
    <SidebarCard drag={args.state == "drag"} hover={args.state == "hover"} title={args.title} description={args.description}>
      {content}
      <IconGearSettings></IconGearSettings>
    </SidebarCard>
  </div>
);

TemplateCard.args = {
  state: "default",
  title: "Default",
  description: "Lorem ipsum"
};
