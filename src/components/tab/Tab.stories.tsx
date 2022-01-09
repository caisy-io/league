import React, { useEffect, useState } from "react";
import { Tab } from "./Tab";
import { Tabs, TabPanel } from "../tabs/Tabs";
import { IconStarOutlined } from "../../icons";

const iconSize = {
  micro: 16,
  small: 16,
  medium: 20,
  default: 24,
};

// Default Tab Demo
export default {
  title: `Components/Navigation/Tabs/Tab`,
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
      options: ["micro", "small", "medium", "default"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "Default",
        },
      },
    },
    selected: {
      options: ["1", "2", "none"],
      control: { type: "select" },
    },
  },
};

function TabDemo({ selected, ...args }) {
  const [currSelected, setSelected] = useState("none");

  const handleSelect = (value) => {
    setSelected(value);
  };

  useEffect(() => {
    setSelected(selected);
  }, [selected]);

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Tab value="1" onClick={handleSelect} activated={currSelected === "1"} {...args}>
        Tab 1
      </Tab>
      <Tab value="2" onClick={handleSelect} activated={currSelected === "2"} {...args}>
        Tab 2
      </Tab>
    </div>
  );
}

const Template = (args) => <TabDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "Default",
  selected: "none",
};

function TabDemoWithIcon({ content, selected, ...args }) {
  const [currSelected, setSelected] = useState("none");

  const handleSelect = (value) => {
    setSelected(value);
  };

  useEffect(() => {
    setSelected(selected);
  }, [selected]);

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Tab
        value="1"
        onClick={handleSelect}
        activated={currSelected === "1"}
        icon={<IconStarOutlined size={iconSize[args.size]} />}
        {...args}
      >
        Tab 1
      </Tab>
      <Tab
        value="2"
        onClick={handleSelect}
        activated={currSelected === "2"}
        icon={<IconStarOutlined size={iconSize[args.size]} />}
        {...args}
      >
        Tab 2
      </Tab>
    </div>
  );
}

const TemplateWithIcon = (args) => <TabDemoWithIcon {...args} />;

export const WithIcon = TemplateWithIcon.bind({});
WithIcon.args = {
  size: "Default",
  selected: "none",
};
