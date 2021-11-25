import React, { useState } from "react";
import { Button } from "../..";
import { Tabs, TabPanel } from "./Tabs";
import { IconStarOutlined } from "../../icons/IconStarOutlined";

function TabsShowcase() {
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
        <Tabs
          initialValue={currentTab}
          onChange={(newValue) => {
            if (newValue != currentTab) {
              setCurrentTab(newValue);
            }
          }}
        >
          <TabPanel title="Tab 1" icon={<IconStarOutlined></IconStarOutlined>}>
            This is the first panelThis is the first panelThis is the first panelThis is the first panelThis is the
            first panel
          </TabPanel>
          <TabPanel title="Tab 2">This is the second panel</TabPanel>
          <TabPanel title="Tab 3">This is the third panel</TabPanel>
        </Tabs>
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
  title: "Components/Tabs",
  component: TabsShowcase,
};

const Template = (args) => <TabsShowcase {...args} />;

export const Default = Template.bind({});
Default.args = {};
