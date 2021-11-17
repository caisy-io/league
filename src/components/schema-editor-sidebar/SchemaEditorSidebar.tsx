import React from 'react';
import { SidebarCard } from '../sidebar-card';
import { Tabs } from '../tabs';
import { IconAssetsImage, IconLink, IconTypeface } from '../../icons';
import { SidebarTitle } from '../sidebar-title';
import { TabPanel } from '../tabs/Tabs';
import { SSchemaEditorSidebar } from './styles/SSchemaEditorSidebar';
import { SSidebarCategoryWrapper } from './styles/SSidebarCategoryWrapper';
import { SidebarCategoryWrapper } from './SidebarCategoryWrapper';

export const SchemaEditorSidebar: React.FC = () => {
  return (
    <SSchemaEditorSidebar>
      <Tabs initialValue={0}>
        <TabPanel title="All Fields" style={{ padding: "1.25rem 1rem" }}>
          <SidebarCategoryWrapper>
            <SidebarTitle icon={<IconLink></IconLink>}>Link Content</SidebarTitle>
            <SidebarCard icon={<IconAssetsImage></IconAssetsImage>} title="Asset" description="Image, video and other assets"></SidebarCard>
            <SidebarCard icon={<IconAssetsImage></IconAssetsImage>} title="Reference" description="Link and resolve documents & components"></SidebarCard>
          </SidebarCategoryWrapper>
          <SidebarCategoryWrapper>
            <SidebarTitle icon={<IconTypeface></IconTypeface>}>Strings</SidebarTitle>
            <SidebarCard icon={<IconTypeface></IconTypeface>} title="Single line string" description="Text field with no formatting"></SidebarCard>
          </SidebarCategoryWrapper>
        </TabPanel>
        <TabPanel title="Templates">This is the second panel</TabPanel>
        <TabPanel title="Details">This is the third panel</TabPanel>
      </Tabs>
    </SSchemaEditorSidebar>
  )
}
