import React from "react";
import { Badge } from "../badge";
import { Button } from "../button";
import { IconStarOutlined } from "../../icons/IconStarOutlined"

export default {
  title: `Components/Badge`,
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
          summary: "default",
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
          summary: "micro",
        },
      },
    },
  },
};

function BadgeDemo({ content, ...args }) {
  return <Badge size={args.size} value={args.value} type={args.type}><Button><IconStarOutlined />Button</Button></Badge>
}

const Template = (args) => < BadgeDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: "regular",
  value: "1",
};

// With entity
export const PositionCenter = ({ content, ...args }) => (
  <Button><IconStarOutlined />Button<Badge size={args.size} value={args.value} type={args.type} position="center"></Badge></Button>
);

PositionCenter.args = {
  state: "default",
  content: "Default",
};

