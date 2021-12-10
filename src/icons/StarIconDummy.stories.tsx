import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { 
  IconStarOutlined
} from './index';

export default {
  title: "Icons/StarIconDummy/Icon",
  component: IconStarOutlined,
  argTypes: {
    size: {
      name: "size",
      description: "Size of the icon",
      options: [12, 16, 20, 24, 32, 40],
      control: { type: 'select' },
      defaultValue: 12,
    },
    solid: {
      name: "solid",
      description: "Solid icon",
      defaultValue: false,
    }
  },
} as ComponentMeta<typeof IconStarOutlined>;

const Template:  ComponentStory<typeof IconStarOutlined>= (args) => <IconStarOutlined  {...args} />;

export const StarIconDummy = Template.bind({});
StarIconDummy.args = {
};
