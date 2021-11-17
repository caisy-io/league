import React from 'react';
import { SidebarCard, Tabs } from '..';
import { IconAssetsImage, IconLink, IconTypeface } from '../..';
import { SidebarTitle } from '../sidebar-title';
import { TabPanel } from '../tabs/Tabs';
import { SSchemaEditorSidebar } from './styles/SSchemaEditorSidebar';
import { SSidebarCategoryWrapper } from './styles/SSidebarCategoryWrapper';

interface ISchemaEditorSidebar {

}

export const SchemaEditorSidebar: React.FC<ISchemaEditorSidebar> = ({ ...props }) => {
  console.log(`SchemaEditorSidebar props: `, props);
  return (
    <SSchemaEditorSidebar style={{ paddingTop: "1.25rem" }}>
      <Tabs initialValue={0}>
        <TabPanel title="All Fields" style={{ padding: "1.25rem 1rem" }}>
          <SSidebarCategoryWrapper>
            <SidebarTitle icon={<IconLink></IconLink>}>Link Content</SidebarTitle>
            <SidebarCard icon={<IconAssetsImage></IconAssetsImage>} title="Asset" description="Image, video and other assets"></SidebarCard>
            <SidebarCard icon={<IconAssetsImage></IconAssetsImage>} title="Reference" description="Link and resolve documents & components"></SidebarCard>
          </SSidebarCategoryWrapper>
          <SSidebarCategoryWrapper>
            <SidebarTitle icon={<IconTypeface></IconTypeface>}>Strings</SidebarTitle>
            <SidebarCard icon={<IconTypeface></IconTypeface>} title="Single line string" description="Text field with no formatting"></SidebarCard>
          </SSidebarCategoryWrapper>
        </TabPanel>
        <TabPanel title="Templates">This is the second panel</TabPanel>
        <TabPanel title="Details">This is the third panel</TabPanel>
      </Tabs>
      {props.children}
    </SSchemaEditorSidebar>
  )
}
