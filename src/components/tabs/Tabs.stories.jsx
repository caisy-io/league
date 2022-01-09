import React, { useState, useEffect } from "react";
import { Tabs, TabPanel } from "./Tabs";
import { IconAlarmClock, IconBookmark } from "../../icons";

  function TabsShowcase({ content, selected, ...args }) {
    const [currentTab, setCurrentTab] = useState(1);
  
    useEffect(() => {
      setCurrentTab(selected);
    }, [selected]);
  
    return (
      <Tabs
        loading={false}
        initialValue={currentTab}
        onChange={(newValue) => {
          if (newValue != currentTab) {
            setCurrentTab(newValue);
          }
        }}
      >
        <TabPanel title={"Past"}>tab 1</TabPanel>
        <TabPanel title={"Current"}>tab 2</TabPanel>
        <TabPanel title={"Upcoming"}>tab 3</TabPanel>
      </Tabs>
    );
  }
  

export default {
  title: "Components/Navigation/Tabs",
  component: TabsShowcase,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=812%3A11729",
    },
  },
};

const Template = (args) => <TabsShowcase {...args} />;

export const Default = Template.bind({});
Default.args = {};



function TabDemoWithIcon({ content, selected, ...args }) {
  const [currentTab, setCurrentTab] = useState(1);
  
  useEffect(() => {
    setCurrentTab(selected);
  }, [selected]);

  return (
    <Tabs
      loading={false}
      initialValue={currentTab}
      onChange={(newValue) => {
        if (newValue != currentTab) {
          setCurrentTab(newValue);
        }
      }}
    >
      <TabPanel title={"Past"} icon={<IconAlarmClock size={20}/>} >tab 1</TabPanel>
      <TabPanel title={"Current"} icon={<IconBookmark  size={20}/>}  >tab 2</TabPanel>
      <TabPanel title={"Upcoming"}>tab 3</TabPanel>
    </Tabs>
  );
}

const TemplateWithIcon = (args) => <TabDemoWithIcon {...args} />;

export const WithIcon = TemplateWithIcon.bind({});
WithIcon.args = {
  size: "Default",
  selected: "none",
};