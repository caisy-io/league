import React from "react";
import { UploadMenuItem } from "./UploadMenuItem";
const Template = (args) => <UploadMenuItem {...args} >
  {args.children ? args.children : null}
</UploadMenuItem>;

// Default MainMenuItem Demo
export default {
  title: "Components/Navigation/UploadMenuItem",
  component: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=1054%3A16321",
    },
  },
  argTypes: {
    state: {
      description: "Changes the state of the Item",
      control: { type: "select" },
      options: ["default", "dragging", "loading", "success", "hover", "activated"],
    },
    percentageLoaded: {
      description: "Shows percentage",
      control: { type: "number" },
    },
    itemCount: {
      description: "itemCount",
      control: { type: "number" },
    },
  },
};


export const Default = Template.bind({});
Default.args = {
  state: "default",
  percentageLoaded: 0,
};
