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
      description: "Changes the overall design of the search bar operand",
      options: ["default", "hover", "activated"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    value: {
      description: "Content of the search bar operand",
      control: { type: "text" },
    },
  },
};

function BadgeDemo({ content, ...args }) {
  return <Badge value={1} ><Button><IconStarOutlined /></Button></Badge>
}

const Template = (args) => < BadgeDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: "regular",
  value: "1",
};

