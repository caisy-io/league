PrimaryModalHeader;
import React, { useEffect, useState } from "react";
import { PrimaryModalHeader } from "./PrimaryModalHeader";
import { IconClose, IconGithub, IconGitlab, IconStarOutlined } from "../..";
import { FlatActionButton, Tab } from "..";

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

  const [breadcrumbs, setBreadcrumbs] = useState(
    args.labels.map((label, index) => ({
      title: label,
      icon: args.labelsWithIcons ? <IconStarOutlined size={24} /> : null,
      value: index + 1,
      onClick: (value) => handleLabelClick(value),
      badgeContent: args.showBadge && index + 1 === args.labels.lenght ? "12" : undefined,
    })),
  );

  useEffect(() => {
    setBreadcrumbs(
      args.labels.map((label, index) => ({
        title: label,
        icon: args.labelsWithIcons ? <IconStarOutlined /> : null,
        value: index + 1,
        onClick: (value) => handleLabelClick(value),
        badgeContent: args.showBadge && index + 1 === args.labels.length ? "12" : undefined,
      })),
    );
  }, [args.labelsWithIcons, args.showBadge, args.labels]);

  return (
    <PrimaryModalHeader withCloseIcon={args.withCloseIcon} breadcrumbs={breadcrumbs} {...args}>
      {args.showTabs && (
        <>
          <div style={{ height: 20, width: 1, backgroundColor: "#E8EFF3", margin: "0 24px" }} />
          <div style={{ display: "flex", gap: 8 }}>
            <Tab activated={selectedTab === 1} onClick={setSelectedTab} size="small" value={1}>
              {args.tabsWithIcons && <IconGithub />}
              Tab 1
            </Tab>
            <Tab activated={selectedTab === 2} onClick={setSelectedTab} size="small" value={2}>
              {args.tabsWithIcons && <IconGitlab />}
              Tab 2
            </Tab>
          </div>
        </>
      )}
      <div style={{ marginLeft: "auto", display: "flex", gap: 12, alignItems: "center" }}>
        {args.showFlatActionButton && <FlatActionButton type="grey">Default</FlatActionButton>}
        {args.withCloseIcon && <IconClose size={24} />}
      </div>
    </PrimaryModalHeader>
  );
}

const Template = (args) => <PrimaryModalHeaderDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  withCloseIcon: true,
  labels: ["Label 1", "Label 2"],
  labelsWithIcons: true,
  tabsWithIcons: true,
  showBadge: false,
  showTabs: true,
  showFlatActionButton: true,
};
