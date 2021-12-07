PrimaryModalHeader;
import React from "react";
import { PrimaryModalHeader } from "./PrimaryModalHeader";
import { Tabs, TabPanel } from "../tabs/Tabs";

// Default PrimaryModalHeader Demo
export default {
  title: "Components/PrimaryModalHeader",
  component: PrimaryModalHeaderDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=277%3A5136",
    },
  },
  argTypes: {},
};

function PrimaryModalHeaderDemo({ ...args }) {
  return <PrimaryModalHeader {...args}>Demo</PrimaryModalHeader>;
}

const Template = (args) => <PrimaryModalHeaderDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};
