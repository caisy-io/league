import React, { useState } from "react";
import { TranslationMenu } from "../..";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ITranslationMenuLocale } from ".";

function TranslationMenuDemo() {
  const [opened, setOpened] = useState<boolean>(false);
  const [locales, setLocales] = useState<ITranslationMenuLocale[]>([
    { id: "en", name: "English", default: true, active: true },
    { id: "de", name: "Deutsch", active: true },
    { id: "es", name: "Spanish", active: true },
    { id: "fr", name: "French", active: false },
    { id: "ru", name: "Russisch", active: true },
  ]);

  return (
    <DndProvider backend={HTML5Backend}>
      <TranslationMenu locales={locales} onLocalesChange={setLocales} opened={opened} onToggleOpened={setOpened} />
      <div
        style={{
          width: 300,
          margin: "80px 0",
        }}
      >
        <pre>{JSON.stringify(locales, null, 4)}</pre>
      </div>
    </DndProvider>
  );
}

export default {
  title: "Components/TranslationMenu",
  component: TranslationMenuDemo,
};
const Template = (args) => <TranslationMenuDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};
