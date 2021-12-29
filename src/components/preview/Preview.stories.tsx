import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Preview } from "./Preview";
import { IconStarOutlined }from "../../icons";
import { Img } from "../../base-components/img/Img";
import Flag from "../flag";

export default {
  title: "Components/Style Guide/Preview",
  component: Preview,
  argTypes: {
    size: {
      name: "size",
      description: "Size of the icon",
      options: [12, 16, 20, 24, 28, 32, 36, 40, 48],
      control: { type: 'select' },
      defaultValue: 16,
    },
    flag: {
      name: "flag",
      description: "Flag component",
      control: { type: "ReactNode" },
    },
    icon: {
      name: "icon",
      description: "Preview of the icon",
      control: { type: "ReactNode" },
    },
    image: {
      name: "image",
      description: "Preview of the icon",
      control: { type: "ReactNode" },
    },
    text: {
      name: "text",
      description: "Preview of the icon",
      control: { type: "ReactNode" },
    },
  },
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = (args) => <Preview {...args}/>;

export const Preview_text_default = Template.bind({});
Preview_text_default.args = {
  text: "pdf",
};

export const Preview_icon_default: ComponentStory<typeof Preview> = (args) => (
  <Preview {...args} icon={<IconStarOutlined size={args.size}/>} /> 
);

export const Preview_image_default = Template.bind({});
Preview_image_default.args = {
  image: <Img lazyload={false} src={"https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="!} resolution={48}/>,
};

export const Preview_flag_default: ComponentStory<typeof Preview> = (args) => (
  <Preview {...args} flag={<Flag countryCode="ar" size={args.size}/>}/> 
);