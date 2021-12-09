PrimaryModalHeader;
import React, { useState } from "react";
import { PrimaryModalHeader } from "./PrimaryModalHeader";
import { IconStarAdd, IconStarOutlined } from "../..";
import { Divider, Tab } from "..";

// Default PrimaryModalHeader Demo
export default {
  title: "Components/Navigation/PrimaryModalHeader",
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
  const [selectedTab, setSelectedTab] = React.useState(null);

  const handleLabelClick = (value) => {
    window.alert(`Clicked on Label ${value}`);
  };

  const [breadcrumbs, setBreadcrumbs] = useState([
    {
      title: "Label 1",
      icon: <IconStarOutlined />,
      value: 1,
      onClick: (value) => handleLabelClick(value),
    },
    {
      title: "Label 2",
      icon: <IconStarAdd />,
      value: 2,
      onClick: (value) => handleLabelClick(value),
    },
  ]);

  return (
    <PrimaryModalHeader withCloseIcon={args.withCloseIcon} breadcrumbs={breadcrumbs} {...args}>
      <div style={{ height: 20, width: 1, backgroundColor: "#E8EFF3", margin: "0 24px" }} />
      <div style={{ display: "flex", gap: 8 }}>
        <Tab activated={selectedTab === 1} onClick={setSelectedTab} size="small" value={1}>
          Tab 1
        </Tab>
        <Tab activated={selectedTab === 2} onClick={setSelectedTab} size="small" value={2}>
          Tab 2
        </Tab>
      </div>
    </PrimaryModalHeader>
  );
}

const Template = (args) => <PrimaryModalHeaderDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  withCloseIcon: true,
};
