import React, { useState } from "react";
import { TopNavDefault } from "./TopNavDefault";
import { TopNavDefaultTitle } from "./TopNavDefaultTitle";
import { TopNavDefaultDivider } from "./TopNavDefaultDivider";
import { Button } from "../button/Button";
import { Tab } from "../tab/Tab";
import { IconChevronDown, IconStarOutlined } from "../../icons";

const tabs = [
  { name: "Activated", id: 0 },
  { name: "Default", id: 1 },
  { name: "Default", id: 2 },
  { name: "Default", id: 3 },
  { name: "Default", id: 4 },
  { name: "Default", id: 5 },
  { name: "Default", id: 6 },
];

export default {
  title: `Components/Navigation/TopNavDefault`,
  component: TopNavDefaultDemo,
  argTypes: {},
};

function TopNavDefaultDemo({ withButton = false, withTabs = false, withIcon = false }) {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <TopNavDefault>
      <TopNavDefaultTitle>
        {withIcon && <IconStarOutlined size={24} />}
        Page name
      </TopNavDefaultTitle>
      {withTabs && (
        <>
          <TopNavDefaultDivider />
          <div style={{ display: "flex", gap: 8 }}>
            {tabs.map((tab) => (
              <Tab
                activated={selectedTab === tab.id}
                onClick={(value) => setSelectedTab(value as number)}
                key={tab.id}
                value={tab.id}
                size="small"
              >
                <IconStarOutlined size={16} />
                {tab.name}
              </Tab>
            ))}
          </div>
        </>
      )}
      {withButton && (
        <div style={{ marginLeft: "auto" }}>
          <Button type="primary" size="medium">
            DEFAULT
            <IconChevronDown size={16} />
          </Button>
        </div>
      )}
    </TopNavDefault>
  );
}

const SimpleTemplate = () => <TopNavDefaultDemo />;
export const Simple = SimpleTemplate.bind({});

const WithButtonTemplate = () => <TopNavDefaultDemo withButton />;
export const WithButton = WithButtonTemplate.bind({});

const WithTabsTemplate = () => <TopNavDefaultDemo withTabs />;
export const WithTabs = WithTabsTemplate.bind({});

const WithButtonAndTabsTemplate = () => <TopNavDefaultDemo withButton withTabs />;
export const WithButtonAndTabs = WithButtonAndTabsTemplate.bind({});

const WithIconTemplate = () => <TopNavDefaultDemo withIcon />;
export const WithIcon = WithIconTemplate.bind({});

const WithButtonAndIconTemplate = () => <TopNavDefaultDemo withButton withIcon />;
export const WithButtonAndIcon = WithButtonAndIconTemplate.bind({});

const WithTabsAndIconTemplate = () => <TopNavDefaultDemo withTabs withIcon />;
export const WithTabsAndIcon = WithTabsAndIconTemplate.bind({});

const WithButtonTabsAndIconTemplate = () => <TopNavDefaultDemo withButton withTabs withIcon />;
export const WithButtonTabsAndIcon = WithButtonTabsAndIconTemplate.bind({});
