import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Avatar } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const DefaultWB = Template.bind({});
DefaultWB.args = {
  children: "WB",
  size: 16
};
export const WB_16 = Template.bind({});
WB_16.args = {
  children: "WB",
  size: 16
};
export const WB_20 = Template.bind({});
WB_20.args = {
  children: "WB",
  size: 20
};
export const WB_24 = Template.bind({});
WB_24.args = {
  children: "WB",
  size: 24
};
export const WB_28 = Template.bind({});
WB_28.args = {
  children: "WB",
  size: 28
};
export const WB_32 = Template.bind({});
WB_32.args = {
  children: "WB",
  size: 32
};

export const Image_16 = Template.bind({});
Image_16.args = {
  children: "MG",
  imageUrl: "https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=32&q=80",
  size: 16
};

export const Image_20 = Template.bind({});
Image_20.args = {
  children: "MG",
  imageUrl: "https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=32&q=80",
  size: 20
};

export const Image_24 = Template.bind({});
Image_24.args = {
  children: "MG",
  imageUrl: "https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=32&q=80",
  size: 24
};

export const Image_28 = Template.bind({});
Image_28.args = {
  children: "MG",
  imageUrl: "https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=32&q=80",
  size: 28
};

export const Image_32 = Template.bind({});
Image_32.args = {
  children: "MG",
  imageUrl: "https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=32&q=80",
  size: 32
};

export const Image_40 = Template.bind({});
Image_40.args = {
  children: "MG",
  imageUrl: "https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=32&q=80",
  size: 40
};

export const Image_default = Template.bind({});
Image_default.args = {
  children: "MG",
  imageUrl: "https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=32&q=80",
};
