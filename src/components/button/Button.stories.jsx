import React from "react";
import { Button } from "./Button";
import { IconLink } from "../..";

// Default Button Demo
export default {
  title: "Components/Button",
  component: ButtonDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=5%3A335",
    },
  },
  argTypes: {
    type: {
      description: "Changes the overall design of the button",
      options: ["primary", "secondary", "tertiary", "danger", "neutral", "light", "link"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "primary",
        },
      },
    },
    content: {
      description: "Content of the button",
      control: { type: "text" },
    },
    size: {
      description: "Changes the size of the button",
      options: ["default", "small", "medium"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    activated: {
      description: "Changes the state of the button to Activated",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    round: {
      description: "Changes the corners of the button",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    disabled: {
      description: "Disables or enables the button",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

function ButtonDemo({ content, ...args }) {
  return <Button {...args}>{content}</Button>;
}

const Template = (args) => <ButtonDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "primary",
  content: "primary",
  size: "default",
  round: false,
  activated: false,
  disabled: false,
  sticked: false,
};

// With Icon
export const WithIcon = ({ content, ...args }) => (
  <Button {...args}>
    <IconLink />
    {content}
  </Button>
);

WithIcon.args = {
  type: "primary",
  content: "Link existing Document",
  size: "default",
  state: "default",
  round: false,
  disabled: false,
  activated: false,
  sticked: false,
};
