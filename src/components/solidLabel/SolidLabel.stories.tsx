import React from "react";
import { SolidLabel } from "./SolidLabel"

// Default Solid Label Demo
export default {
  title: "Components/SolidLabel",
  component: SolidLabelDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=5%3A335",
    },
  },
  argTypes: {
    type: {
      description: "Changes the overall design of the label",
      options: ["default", "important", "green", "red", "yellow", "grey", "greyOutline"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    content: {
        description: "Content of the label",
        control: { type: "text" },
    },
    }  
};

function SolidLabelDemo({ content, ...args }) {
  return (
    <div style={{backgroundColor: "lightgray", height: "100px", width: "100px"}}>
        <SolidLabel {...args}>{content}</SolidLabel>
    </div>
  );
}

const Template = (args) => <SolidLabelDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "default",
  content: "Text",
};
