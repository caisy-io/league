import React from "react";
import { MainMenuItem } from "./MainMenuItem";
import { IconStarOutlined } from "../../icons";
import { Badge, EBadgePosition } from "../badge";

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
      <IconStarOutlined size={20} />
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
  <Badge position={EBadgePosition.TopRight} value={args.badgeContent} size="small">
    <MainMenuItem {...args}>
      <IconStarOutlined size={20}/>
    </MainMenuItem>
  </Badge>
);

WithBadge.args = {
  label: "Label",
  activated: false,
  badgeContent: 2,
};
