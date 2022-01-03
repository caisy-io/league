import React from "react";
import { LineTabs } from './LineTabs';
import { IconStarOutlined } from '../../icons';

export default {
  title: `Components/Navigation/LineTabs`,
  component: LineTabsDemo,
  argTypes: {
    state: {
      description: "Changes the overall design of the search bar operand",
      options: ["default", "hover", "activated"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    content: {
      description: "Content of the line tab",
      control: { type: "text" },
    },
  },
};

function LineTabsDemo({ content, ...args }) {
  return <LineTabs {...args} title={content} activated={args.state == "activated" } hover={args.state == "hover" }>
  </LineTabs>
}

const Template = (args) => < LineTabsDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: "default",
  content: "Default",
};

// With entity
export const WithLeftIcon = ({ content, ...args }) => (
  <LineTabs {...args} title={content} activated={args.state == "activated" } hover={args.state == "hover" }>
    <IconStarOutlined></IconStarOutlined>
  </LineTabs>
);

WithLeftIcon.args = {
  state: "default",
  content: "Default",
};