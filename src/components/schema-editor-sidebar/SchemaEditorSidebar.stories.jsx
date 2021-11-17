import React from "react";
import { SchemaEditorSidebar } from './SchemaEditorSidebar';

export default {
  title: `Components/SchemaEditorSidebar`,
  component: SchemaEditorSidebarDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=13%3A1192",
    },
  },
};

function SchemaEditorSidebarDemo({ content, ...args }) {
  return <div style={{ width: "320px" }}>
    <SchemaEditorSidebar>
      {content}
    </SchemaEditorSidebar>
  </div>
}

const Template = (args) => < SchemaEditorSidebarDemo {...args} />;

export const Default = Template.bind({});

