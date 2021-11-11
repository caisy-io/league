import React from "react";
import { FlatActionButton } from "./FlatActionButton";
import { IconStarOutlined } from "../..";

// Default FlatActionButton Demo
export default {
  title: "Components/FlatActionButton",
  component: FlatActionButtonDemo,
  argTypes: {
    type: {
      description: "Changes the overall design of the button",
      options: ["white", "blue", "success", "danger", "grey", "grey outline", "default"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "default",
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

function FlatActionButtonDemo({ content, ...args }) {
  return <FlatActionButton {...args}>{content}</FlatActionButton>;
}

const Template = (args) => <FlatActionButtonDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "white",
  content: "This is a button",
  disabled: false,
};

export const WithIcon = ({ content, ...args }) => (
  <FlatActionButton {...args}>
    <IconStarOutlined />
    {content}
  </FlatActionButton>
);

WithIcon.args = {
  type: "white",
  content: "",
  disabled: false,
};
