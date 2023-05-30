import React, { ReactNode } from "react";
import { LineTab } from "../line-tab";
import { SBlockEditorSidebar } from "./styles/SBlockEditorSidebar";
import { SBlockEditorSidebarListItem } from "./styles/SBlockEditorSidebarListItem";
import { SBlockEditorSidebarStatus } from "./styles/SBlockEditorSidebarStatus";
import { SBlockEditorSidebarStatusBadge } from "./styles/SBlockEditorSidebarStatusBadge";
import { SBlockEditorSidebarTabs } from "./styles/SBlockEditorSidebarTabs";
import { SBlockEditorSidebarStatusIndicator } from "./styles/SBlockEditorSidebarStatusIndicator";
import { SBlockEditorSidebarStatusIndicatorSaving } from "./styles/SBlockEditorSidebarStatusIndicatorSaving";

interface IBlockEditorSidebarTab {
  key: string;
  tab: string | ReactNode | JSX.Element;
  component: JSX.Element;
}

interface IBlockEditorSidebar {
  status: string | ReactNode;
  statusId: string;
  tabs: IBlockEditorSidebarTab[];
  onTabClick: (tab: IBlockEditorSidebarTab) => void;
  selectedTab: IBlockEditorSidebarTab;
  currentStatusText?: string | ReactNode;
  savingText?: string | ReactNode;
}

export const BlockEditorSidebar: React.FC<IBlockEditorSidebar> = ({
  statusId,
  status,
  tabs,
  onTabClick,
  selectedTab,
  currentStatusText,
  savingText,
}) => {
  return (
    <SBlockEditorSidebar>
      <SBlockEditorSidebarListItem>
        <SBlockEditorSidebarStatus>
          <SBlockEditorSidebarStatusIndicator>
            {currentStatusText || "CURRENT STATUS"}
            {savingText && (
              <SBlockEditorSidebarStatusIndicatorSaving>{savingText}</SBlockEditorSidebarStatusIndicatorSaving>
            )}
          </SBlockEditorSidebarStatusIndicator>
          <SBlockEditorSidebarStatusBadge statusId={statusId}>{status}</SBlockEditorSidebarStatusBadge>
        </SBlockEditorSidebarStatus>
      </SBlockEditorSidebarListItem>
      <SBlockEditorSidebarListItem>
        <SBlockEditorSidebarTabs>
          {tabs.map((tab, i) => (
            <LineTab
              key={`tab-${i}-${tab.tab}`}
              activated={selectedTab?.key === tab.key}
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
