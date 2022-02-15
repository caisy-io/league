import React, { useState } from "react";
import {IconStarOutlined} from "../../icons";
import { Button } from "../button";
import { LineTabs, LineTabPanel } from "./LineTabs";

export default {
  title: "Components/Navigation/LineTabs",
  component: LineTabs,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=13%3A1192",
    },
  },
};

const Template = (args) => {
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
              onChange={(newValue) => setCurrentTab(newValue)}
          >
            <LineTabPanel title="Tab 1" icon={<IconStarOutlined/>}>
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

export const Default = Template.bind({});
Default.args = {};
