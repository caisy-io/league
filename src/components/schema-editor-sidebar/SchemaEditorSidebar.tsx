import React from 'react';
import { SidebarCard } from '../sidebar-card';
import { Tabs } from '../tabs';
import { IconAssetsImage, IconLink, IconTypeface } from '../../icons';
import { SidebarTitle } from '../sidebar-title';
import { TabPanel } from '../tabs/Tabs';
import { SSchemaEditorSidebar } from './styles/SSchemaEditorSidebar';
import { SSidebarCategoryWrapper } from './styles/SSidebarCategoryWrapper';
import { SidebarCategory } from './SidebarCategory';

export const SchemaEditorSidebar: React.FC = ({ ...props }) => {
  return (
    <SSchemaEditorSidebar>
      <Tabs initialValue={0}>
        <TabPanel title="All Fields" style={{ padding: "1.25rem 1rem" }}>
          {props.children}
        </TabPanel>
        <TabPanel title="Templates">This is the second panel</TabPanel>
        <TabPanel title="Details">This is the third panel</TabPanel>
      </Tabs>
    </SSchemaEditorSidebar>
  )
}
