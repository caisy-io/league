import React from "react";
import { LineTab } from './LineTab';
import { IconStarOutlined } from '../../icons';

export default {
  title: `Components/Navigation/LineTabs/LineTab`,
  component: LineTabDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=13%3A1192",
    },
  },
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

function LineTabDemo({ content, ...args }) {
  return <LineTab {...args} title={content} activated={args.state == "activated" } hover={args.state == "hover" }>
  </LineTab>
}

const Template = (args) => < LineTabDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: "default",
  content: "Default",
};

// With entity
export const WithLeftIcon = ({ content, ...args }) => (
  <LineTab {...args} title={content} activated={args.state == "activated" } hover={args.state == "hover" }>
    <IconStarOutlined></IconStarOutlined>
  </LineTab>
);

WithLeftIcon.args = {
  state: "default",
  content: "Default",
};