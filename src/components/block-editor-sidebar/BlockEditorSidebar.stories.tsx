import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Layout, LayoutSider } from "../layout";
import { SidebarTag } from "../sidebar-tag";
import { ILanguageToggleListItemLocale } from "../language-toggle-list-item";
import { TranslationMenu } from "../translation-menu";
import { BlockEditorSidebar } from "./BlockEditorSidebar";
import { BlockEditorSidebarListItem } from "./BlockEditorSidebarListItem";

// Default BlockEditorSidebar Demo
export default {
  title: "Components/Navigation/BlockEditorSidebar",
  component: BlockEditorSidebarDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=431%3A6997",
    },
  },
  argTypes: {},
};

const TranslationsComponent = () => {
  const [opened, setOpened] = useState(false);
  const [locales, setLocales] = useState<ILanguageToggleListItemLocale[]>([
    { id: "de", localeCode: "de-de", name: "Deutsch", active: true },
    { id: "es", localeCode: "es-sp", name: "Spanisch", active: true },
    { id: "fr", localeCode: "fr-fr", name: "French", active: false },
    { id: "ru", localeCode: "ru-ru", name: "Russisch", active: true },
  ]);

  return (
    <BlockEditorSidebarListItem>
      <DndProvider backend={HTML5Backend}>
        <TranslationMenu opened={opened} locales={locales} onToggleOpened={setOpened} onLocalesChange={setLocales} />
      </DndProvider>
    </BlockEditorSidebarListItem>
  );
};

function BlockEditorSidebarDemo({ status }) {
  const [activeTab, setActiveTab] = useState(null);
  const [opened, setOpened] = useState(true);

  const tabs = [
    {
      tab: "Configuration",
      component: <TranslationsComponent />,
    },
    {
      tab: "Details",
      component: <div>Details tab :)</div>,
    },
  ];

  return (
    <Layout styleOverwrite={{ height: "calc(100vh - 40px)", justifyContent: "flex-end" }}>
      <div style={{ position: "relative", order: 3 }}>
        <div style={{ display: "flex", height: "100%", width: opened ? 305 : 0 }}>
          <SidebarTag left={false} onOpenChanged={setOpened} />
          {opened && (
            <LayoutSider styleOverwrite={{ overflow: "unset" }}>
              <BlockEditorSidebar selectedTab={activeTab} onTabClick={setActiveTab} tabs={tabs} status={status} />
            </LayoutSider>
          )}
        </div>
      </div>
    </Layout>
  );
}

const Template = (args) => <BlockEditorSidebarDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: "Draft",
};
