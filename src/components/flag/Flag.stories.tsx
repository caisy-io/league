import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Flag from './Flag';

export default {
  title: 'Components/Flag',
  component: Flag,
  argTypes: {},
} as ComponentMeta<typeof Flag>;

const Template: ComponentStory<typeof Flag> = (args) => <Flag {...args} />;

export const Flag_12 = Template.bind({});
Flag_12.args = {
  children: "Ac",
  countryCode: "Ac",
  size: 12
};

export const Flag_16 = Template.bind({});
Flag_16.args = {
  children: "Ad",
  countryCode: "Ad",
  size: 16
};

export const Flag_20 = Template.bind({});
Flag_20.args = {
  children: "Dz",
  countryCode: "Dz",
  size: 20
};

export const Flag_24 = Template.bind({});
Flag_24.args = {
  children: "Bs",
  countryCode: "Bs",
  size: 24
};

export const Flag_28 = Template.bind({});
Flag_28.args = {
  children: "Bt",
  countryCode: "Bt",
  size: 28
};

export const Flag_32 = Template.bind({});
Flag_32.args = {
  children: "Tr",
  countryCode: "Tr",
  size: 32
};

export const Flag_36 = Template.bind({});
Flag_36.args = {
  children: "Uz",
  countryCode: "Uz",
  size: 36
};

export const Flag_40 = Template.bind({});
Flag_40.args = {
  children: "Sm",
  countryCode: "Sm",
  size: 40
};

export const Flag_48 = Template.bind({});
Flag_48.args = {
  children: "Ng",
  countryCode: "Ng",
  size: 48
};
