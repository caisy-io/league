import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ILanguageFlagToggleListItemLocale } from "../language-flag-toggle-list-item/LanguageFlagToggleListItem";
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
  const [opened, setOpened] = useState(true);
  const [locales, setLocales] = useState<ILanguageFlagToggleListItemLocale[]>([
    { id: "de", name: "Deutsch", active: true },
    { id: "es", name: "Spanish", active: true },
    { id: "fr", name: "French", active: false },
    { id: "ru", name: "Russisch", active: true },
  ]);

  return (
    <BlockEditorSidebarListItem>
      <DndProvider backend={HTML5Backend}>
        <TranslationMenu locales={locales} opened={opened} onLocalesChange={setLocales} onToggleOpened={setOpened} />
      </DndProvider>
    </BlockEditorSidebarListItem>
  );
};

function BlockEditorSidebarDemo({ status, ...args }) {
  const [activeTab, setActiveTab] = useState(null);

  const [tabs, setTabs] = useState(
    args.tabs.map((tab) => ({
      tab,
      component: tab === "Configuration" ? <TranslationsComponent /> : null,
    })),
  );

  useEffect(() => {
    setTabs(
      args.tabs.map((tab) => ({
        tab,
        component: tab === "Configuration" ? <TranslationsComponent /> : null,
      })),
    );
  }, [args.tabs]);

  return (
    <div style={{ width: 305, height: "100vh" }}>
      <BlockEditorSidebar selectedTab={activeTab} onTabClick={setActiveTab} tabs={tabs} status={status} />
    </div>
  );
}

const Template = (args) => <BlockEditorSidebarDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: "Draft",
  tabs: ["Configuration", "Details"],
};
