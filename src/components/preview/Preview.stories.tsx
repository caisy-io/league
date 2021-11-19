import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Preview from "./Preview";
import { Avatar } from "../avatar";
import { IconStarOutlined }from "../../icons";

export default {
  title: "Components/Preview",
  component: Preview,
  argTypes: {},
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = (args) => <Preview {...args}/>;

export const Preview_image = Template.bind({});
Preview_image.args = {
  children: <Avatar size={40} imageUrl="https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="/>,
};

export const Preview_text = Template.bind({});
Preview_text.args = {
  children: <Avatar>pdf</Avatar>,
};

export const Preview_icon = Template.bind({});
Preview_icon.args = {
  children: <IconStarOutlined/>,
};