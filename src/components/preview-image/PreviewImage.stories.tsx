import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PreviewImage } from './PreviewImage';

export default {
  title: 'Components/PreviewImage',
  component: PreviewImage,
  argTypes: {
    size: {
      name: "size",
      description: "Size of the preview image",
      control: { type: "number" },
      type: "number"
    },
  },
} as ComponentMeta<typeof PreviewImage>;

const Template: ComponentStory<typeof PreviewImage> = (args) => <PreviewImage {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Image_16 = Template.bind({});
Image_16.args = {
  imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80",
  size: 16
};

export const Image_20 = Template.bind({});
Image_20.args = {
  imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80",
  size: 20
};

export const Image_24 = Template.bind({});
Image_24.args = {
  imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80",
  size: 24
};

export const Image_28 = Template.bind({});
Image_28.args = {
  imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80",
  size: 28
};

export const Image_32 = Template.bind({});
Image_32.args = {
  imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80",
  size: 32
};

export const Image_40 = Template.bind({});
Image_40.args = {
  imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80",
  size: 40
};

export const Image_48 = Template.bind({});
Image_48.args = {
  imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80",
  size: 48
};

export const Image_default = Template.bind({});
Image_default.args = {
  imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80",
};

