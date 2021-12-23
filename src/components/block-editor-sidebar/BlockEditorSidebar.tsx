import React from "react";
import { LineTabs } from "..";
import { IconDocuments } from "../..";
import { SBlockEditorSidebar } from "./styles/SBlockEditorSidebar";
import { SBlockEditorSidebarListItem } from "./styles/SBlockEditorSidebarListItem";
import { SBlockEditorSidebarStatus } from "./styles/SBlockEditorSidebarStatus";
import { SBlockEditorSidebarStatusBadge } from "./styles/SBlockEditorSidebarStatusBadge";
import { SBlockEditorSidebarTabs } from "./styles/SBlockEditorSidebarTabs";

interface IBlockEditorSidebarTab {
  tab: string;
  component: JSX.Element;
}

interface IBlockEditorSidebar {
  status: string;
  tabs: IBlockEditorSidebarTab[];
  onTabClick: (tab: IBlockEditorSidebarTab) => void;
  selectedTab: IBlockEditorSidebarTab;
}

export const BlockEditorSidebar: React.FC<IBlockEditorSidebar> = ({ status, tabs, onTabClick, selectedTab }) => {
  return (
    <SBlockEditorSidebar>
      <SBlockEditorSidebarListItem>
        <SBlockEditorSidebarStatus>
          <IconDocuments size={16} /> CURRENT STATUS
          <SBlockEditorSidebarStatusBadge>{status}</SBlockEditorSidebarStatusBadge>
        </SBlockEditorSidebarStatus>
      </SBlockEditorSidebarListItem>
      <SBlockEditorSidebarListItem>
        <SBlockEditorSidebarTabs>
          {tabs.map((tab) => (
            <LineTabs activated={selectedTab?.tab === tab.tab} onClick={() => onTabClick(tab)}>
              {tab.tab}
            </LineTabs>
          ))}
        </SBlockEditorSidebarTabs>
      </SBlockEditorSidebarListItem>

      {selectedTab?.component}
    </SBlockEditorSidebar>
  );
};
