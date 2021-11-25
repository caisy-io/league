import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AvatarLegacy } from './AvatarLegacy';

export default {
  title: 'Components/AvatarLegacy',
  component: AvatarLegacy,
  argTypes: {},
} as ComponentMeta<typeof AvatarLegacy>;

const Template: ComponentStory<typeof AvatarLegacy> = (args) => <AvatarLegacy {...args} />;

export const DefaultDL = Template.bind({});
DefaultDL.args = {
  children: "DL"
};

export const DefaultVL = Template.bind({});
DefaultVL.args = {
  children: "VL"
};

export const Image = Template.bind({});
Image.args = {
  children: "MG",
  imageUrl: "https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=32&q=80"
};


