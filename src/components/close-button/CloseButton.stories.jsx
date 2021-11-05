import React from "react";
import { CloseButton } from './CloseButton';

export default {
  title: `Components/CloseButton`,
  component: CloseButtonDemo,
  argTypes: {
    type: {
      description: "Changes the overall design of the search bar operand",
      options: ["default", "hover", "active"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    invisible: {
      description: "Toggles visibility of close button",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

function CloseButtonDemo({ content, ...args }) {
  return <CloseButton {...args}>
    {content}
  </CloseButton>
}

const Template = (args) => < CloseButtonDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "default",
  invisible: "false"
};