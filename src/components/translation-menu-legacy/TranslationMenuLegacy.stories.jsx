import React, { useState } from "react";
import { TranslationMenuLegacy } from "../translation-menu";
import { TextArea } from "../input";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function TranslationMenuDemo() {
  const [state, setState] = useState({
    expanded: true,
    locales: [
      { id: "en", name: "English", default: true, active: true },
      { id: "de", name: "Deutsch", active: true },
      { id: "es", name: "Spanisch", active: true },
      { id: "fr", name: "French", active: false },
      { id: "ru", name: "Russisch", active: true },
    ],
  });

  return (
    <DndProvider
      backend={HTML5Backend}
      style={{
        width: 300,
        margin: 80,
        padding: 80,
      }}
    >
      <TranslationMenuLegacy initialState={state} onChange={setState} />
      <div
        style={{
          width: 300,
          margin: "80px 0",
        }}
      >
        <TextArea
          minRows={3}
          maxRows={10}
          value={JSON.stringify(state)}
          onChange={(e) => {
            try {
              const x = JSON.parse(e.target.value);
              setState(x);
            } catch {}
          }}
        ></TextArea>
        <pre>{JSON.stringify(state, null, 4)}</pre>
      </div>
    </DndProvider>
  );
}

export default {
  title: "Components/Legacy/TranslationMenuLegacy",
  component: TranslationMenuDemo,
};
const Template = (args) => <TranslationMenuDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};
