import React, { ReactNode } from "react";
import { LineTab } from "../line-tab";
import { IconDocuments } from "../../icons";
import { SBlockEditorSidebar } from "./styles/SBlockEditorSidebar";
import { SBlockEditorSidebarListItem } from "./styles/SBlockEditorSidebarListItem";
import { SBlockEditorSidebarStatus } from "./styles/SBlockEditorSidebarStatus";
import { SBlockEditorSidebarStatusBadge } from "./styles/SBlockEditorSidebarStatusBadge";
import { SBlockEditorSidebarTabs } from "./styles/SBlockEditorSidebarTabs";

interface IBlockEditorSidebarTab {
  tab: string | ReactNode | JSX.Element;
  component: JSX.Element;
}

interface IBlockEditorSidebar {
  status: string;
  tabs: IBlockEditorSidebarTab[];
  onTabClick: (tab: IBlockEditorSidebarTab) => void;
  selectedTab: IBlockEditorSidebarTab;
  currentStatusText?: string | ReactNode;
}

export const BlockEditorSidebar: React.FC<IBlockEditorSidebar> = ({
  status,
  tabs,
  onTabClick,
  selectedTab,
  currentStatusText,
}) => {
  return (
    <SBlockEditorSidebar>
      <SBlockEditorSidebarListItem>
        <SBlockEditorSidebarStatus>
          <IconDocuments size={16} />
          {currentStatusText || "CURRENT STATUS"}
          <SBlockEditorSidebarStatusBadge status={status.toUpperCase()}>{status}</SBlockEditorSidebarStatusBadge>
        </SBlockEditorSidebarStatus>
      </SBlockEditorSidebarListItem>
      <SBlockEditorSidebarListItem>
        <SBlockEditorSidebarTabs>
          {tabs.map((tab, i) => (
            <LineTab
              key={`tab-${i}-${tab.tab}`}
              activated={selectedTab?.tab === tab.tab}
              onClick={() => onTabClick(tab)}
            >
              {tab.tab}
            </LineTab>
          ))}
        </SBlockEditorSidebarTabs>
      </SBlockEditorSidebarListItem>

      {selectedTab?.component}
    </SBlockEditorSidebar>
  );
};
