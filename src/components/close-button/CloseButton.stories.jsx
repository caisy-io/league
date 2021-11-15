import React from "react";
import { CloseButton } from './CloseButton';

export default {
  title: `Components/CloseButton`,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=1094%3A18210",
    },
  },
  component: CloseButtonDemo,
  argTypes: {
    state: {
      description: "Changes the overall design of the close button",
      options: ["default", "hover", "pressed"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    }
  },
};

function CloseButtonDemo({ content, ...args }) {
  return <CloseButton pressed={args.state == "pressed"} hover={args.state == "hover"}>
    {content}
  </CloseButton>
}

const Template = (args) => < CloseButtonDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: "default"
};