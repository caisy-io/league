import React from "react";
import { IconAssetsImage, IconTypeface } from "../..";
import { IconLink } from "../../icons/IconLink";
import { SidebarCard } from "../sidebar-card";
import { Tabs } from '../tabs';
import { TabPanel } from '../tabs/Tabs';
import { SchemaEditorSidebar } from './SchemaEditorSidebar';
import { SidebarCategory } from "./SidebarCategory";

export default {
  title: `Components/Navigation/SchemaEditorSidebar`,
  component: SchemaEditorSidebarDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=13%3A1192",
    },
  },
};

function SchemaEditorSidebarDemo({ content, ...args }) {
  return <div style={{ width: "320px" }}>
    <SchemaEditorSidebar>
      <Tabs initialValue={0}>
        <TabPanel title="All Fields" style={{ padding: "1.25rem 1rem" }}>
          <SidebarCategory title="Link context" icon={<IconLink></IconLink>}>
            <SidebarCard title="Asset" description="Image, video and other assets" icon={<IconAssetsImage></IconAssetsImage>}></SidebarCard>
            <SidebarCard title="Reference" description="Link and resolve documents & components" icon={<IconLink></IconLink>}></SidebarCard>
          </SidebarCategory>
          <SidebarCategory title="Strings" icon={<IconTypeface></IconTypeface>}>
            <SidebarCard title="Single line string" description="Text field with no formatting" icon={<IconTypeface></IconTypeface>}></SidebarCard>
            <SidebarCard title="Multi line string" description="Text field with no formatting" icon={<IconTypeface></IconTypeface>}></SidebarCard>
          </SidebarCategory>
        </TabPanel>
      </Tabs>
    </SchemaEditorSidebar>
  </div>
}

const Template = (args) => < SchemaEditorSidebarDemo {...args} />;

export const Default = Template.bind({});

