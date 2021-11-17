import React from "react";
import { SchemaEditorSidebar } from './SchemaEditorSidebar';

export default {
  title: `Components/SchemaEditorSidebar`,
  component: SchemaEditorSidebarDemo,
  argTypes: {
    // example argument type
    activated: {
      description: "Changes the state of the component to Activated",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

function SchemaEditorSidebarDemo({ content, ...args }) {
  return <div style={{width: "320px"}}>
    <SchemaEditorSidebar>
      {content}
    </SchemaEditorSidebar>
  </div>
}

const Template = (args) => < SchemaEditorSidebarDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};
