import React, { useState } from "react";
import { Button } from "../button";
import { LineTabs, LineTabPanel } from "./LineTabs";
import { IconStarOutlined } from "../../icons/IconStarOutlined";

function LineTabsShowcase() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        padding: "32px 60px",
        flexWrap: "wrap",
        backgroundColor: "var(--ui-01)",
        boxShadow: "0 10px 30px 0 rgba(89, 106, 122, 0.11)",
        borderRadius: "5px",
      }}
    >
      <div style={{ width: "100%" }}>
        <LineTabs
          initialValue={currentTab}
          onChange={(newValue) => {
            if (newValue != currentTab) {
              setCurrentTab(newValue);
            }
          }}
        >
          <LineTabPanel title="Tab 1" icon={<IconStarOutlined></IconStarOutlined>}>
            This is the first panelThis is the first panelThis is the first panelThis is the first panelThis is the
            first panel
          </LineTabPanel>
          <LineTabPanel title="Tab 2">This is the second panel</LineTabPanel>
          <LineTabPanel title="Tab 3">This is the third panel</LineTabPanel>
        </LineTabs>
        <br />
        <p>Current tab: {currentTab}</p>
        <br />
        <Button size="small" onClick={() => setCurrentTab((currentTab + 1) % 3)}>
          Change to next tab
        </Button>
      </div>
    </div>
  );
}

export default {
  title: "Components/Navigation/LineTabs",
  component: LineTabsShowcase,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=13%3A1192",
    },
  },
};

const Template = (args) => <LineTabsShowcase {...args} />;

export const Default = Template.bind({});
Default.args = {};
