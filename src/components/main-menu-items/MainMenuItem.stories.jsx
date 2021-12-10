import React from "react";
import { MainMenuItem } from "./MainMenuItem";
import { IconLink } from "../..";
import { Badge, EBadgePosition } from "..";

// Default MainMenuItem Demo
export default {
  title: "Components/Navigation/MainMenuItem",
  component: MainMenuItemDemo,
  argTypes: {
    label: {
      description: "Changes the label, if left empty, wont show anything",
      control: { type: "text" },
    },
    activated: {
      description: "Shows the item is activated",
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
  activated: false,
};

// With Badge
export const WithBadge = ({ content, ...args }) => (
  <Badge position={EBadgePosition.TopRight} value={args.badgeContent}>
    <MainMenuItem {...args}>
      <IconLink />
    </MainMenuItem>
  </Badge>
);

WithBadge.args = {
  label: "Label",
  activated: false,
  badgeContent: 2,
};
