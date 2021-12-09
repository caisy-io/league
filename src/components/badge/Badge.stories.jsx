import React from "react";
import { Badge } from "../badge";
import { Button } from "../button";
import { IconStarOutlined } from "../../icons/IconStarOutlined"
import { EBadgePosition } from "./EBadgePosition";

export default {
  title: `Components/Badges & Labels/Badge`,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=18%3A469",
    },
  },
  component: BadgeDemo,
  argTypes: {
    type: {
      description: "Changes the overall design of the badge",
      options: ["regular", "important", "white", "dark", "color"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "regular",
        },
      },
    },
    value: {
      description: "Content of the badge",
      control: { type: "text" },
    },
    size: {
      description: "Changes the size of the badge",
      options: ["micro", "small", "medium"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "small",
        },
      },
    },
  },
};

function BadgeDemo({ content, ...args }) {
  return <Badge size={args.size} value={args.value} type={args.type} position={EBadgePosition.TopRight}><Button><IconStarOutlined />Button</Button></Badge>
}

const Template = (args) => < BadgeDemo {...args} />;

// Position top right
export const TopRight = Template.bind({});
TopRight.args = {
  type: "regular",
  value: "1",
  size: "small"
};

// Position top left
export const PositionLeft = ({ content, ...args }) => (
  <Badge size={args.size} value={args.value} type={args.type} position={EBadgePosition.TopLeft}><Button><IconStarOutlined />Button</Button></Badge>
);

PositionLeft.args = {
  type: "regular",
  value: "1",
  size: "small"
};

// Position center
export const PositionCenter = ({ content, ...args }) => (
  <Button><IconStarOutlined />Button<Badge size={args.size} value={args.value} type={args.type} position={EBadgePosition.Center}></Badge></Button>
);

PositionCenter.args = {
  type: "regular",
  value: "1",
  size: "small"
};

// Type color
export const Color = ({ content, ...args }) => (
  <Button><IconStarOutlined />Button<Badge size={args.size} value={args.value} type={args.type} position={EBadgePosition.Center}></Badge></Button>
);

Color.args = {
  type: "color",
  value: "#0047FF",
  size: "small"
};

