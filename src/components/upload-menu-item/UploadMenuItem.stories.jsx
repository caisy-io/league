import React from "react";
import { UploadMenuItem } from "./UploadMenuItem";
import { IconLink } from "../..";

// Default MainMenuItem Demo
export default {
  title: "Components/UploadMenuItem",
  component: UploadMenuItemDemo,
  argTypes: {
    state: {
      description: "Changes the state of the Item",
      control: { type: "select" },
      options: ["default", "dragging", "loading", "success"],
    },
    percentageLoaded: {
      description: "Shows percentage",
      control: { type: "number" },
    },
  },
};

function UploadMenuItemDemo({ content, ...args }) {
  return <UploadMenuItem {...args} />;
}

const Template = (args) => <UploadMenuItemDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: "default",
  percentageLoaded: 0,
};
