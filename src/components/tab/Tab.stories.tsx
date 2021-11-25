import React from "react";
import { Tab } from "./Tab";
import { IconStarOutlined } from "../..";

// Default Tab Demo
export default {
  title: "Components/Tab",
  component: TabDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=812%3A11729",
    },
  },
  argTypes: {
    size: {
      description: "Changes the size of the Tab component",
      options: ["Micro", "Small", "Medium", "Default"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "Default",
        },
      },
    },
  },
};

function TabDemo({ content, ...args }) {
  return <Tab {...args}>{content}</Tab>;
}

const Template = (args) => <TabDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "Default",
  activated: false,
  content: "Demo",
};

function TabDemoWithIcon({ content, ...args }) {
  return (
    <Tab icon={<IconStarOutlined />} {...args}>
      {content}
    </Tab>
  );
}

const TemplateWithIcon = (args) => <TabDemoWithIcon {...args} />;

export const WithIcon = TemplateWithIcon.bind({});
WithIcon.args = {
  size: "Default",
  activated: false,
  content: "Demo",
};
