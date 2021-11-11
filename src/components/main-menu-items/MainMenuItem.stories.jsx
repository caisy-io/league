import React from "react";
import { MainMenuItem } from "./MainMenuItem";
import { IconLink } from "../..";

// Default MainMenuItem Demo
export default {
  title: "Components/MainMenuItem",
  component: MainMenuItemDemo,
  argTypes: {
    label: {
      description: "Changes the label, if left empty, wont show anything",
      control: { type: "text" },
    },
    active: {
      description: "Shows the item is active",
      control: { type: "boolean" },
    },
  },
};

function MainMenuItemDemo({ content, ...args }) {
  return (
    <MainMenuItem {...args}>
      <IconLink />
    </MainMenuItem>
  );
}

const Template = (args) => <MainMenuItemDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  active: false,
};
