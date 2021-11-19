import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Preview from "./Preview";
import { Avatar } from "../avatar";
import { IconStarOutlined }from "../../icons";

export default {
  title: "Components/Preview",
  component: Preview,
  argTypes: {
    size: {
      name: "size",
      description: "Size of the icon",
      control: { type: "number" },
      type: "number"
    },
    flag: {
      name: "flag",
      description: "Flag component",
      control: { type: "ReactNode" },
    },
    icon: {
      name: "size",
      description: "Size of the icon",
      control: { type: "ReactNode" },
    },
    image: {
      name: "size",
      description: "Size of the icon",
      control: { type: "ReactNode" },
    },
    text: {
      name: "size",
      description: "Size of the icon",
      control: { type: "ReactNode" },
    },
  },
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = (args) => <Preview {...args}/>;

export const Preview_text_16 = Template.bind({});
Preview_text_16.args = {
  text: "pdf",
  size: 16,
};

export const Preview_icon_16 = Template.bind({});
Preview_icon_16.args = {
  icon: <IconStarOutlined/>,
  size: 16,
};

export const Preview_image_20 = Template.bind({});
Preview_image_20.args = {
  image: <Avatar size={20} imageUrl="https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="/>,
  size: 20
};

export const Preview_icon_24 = Template.bind({});
Preview_icon_24.args = {
  icon: <IconStarOutlined/>,
  size: 24,
};

export const Preview_icon_28 = Template.bind({});
Preview_icon_28.args = {
  icon: <IconStarOutlined/>,
  size: 28,
};

export const Preview_text_32 = Template.bind({});
Preview_text_32.args = {
  text: "pdf",
  size: 32,
};

export const Preview_icon_36 = Template.bind({});
Preview_icon_36.args = {
  icon: <IconStarOutlined/>,
  size: 36,
};

export const Preview_image_40 = Template.bind({});
Preview_image_40.args = {
  image: <Avatar size={40} imageUrl="https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="/>,
  size: 40
};

export const Preview_image_48 = Template.bind({});
Preview_image_48.args = {
  image: <Avatar size={40} imageUrl="https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="/>,
  size: 48
};
export const Preview_icon_48 = Template.bind({});
Preview_icon_48.args = {
  icon: <IconStarOutlined/>,
  size: 48,
};





