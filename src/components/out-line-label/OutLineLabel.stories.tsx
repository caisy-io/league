import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Img } from '../../base-components/img/Img';
import { IconClose } from '../../icons';
import { OutLineLabel } from './OutLineLabel';
import ColorLabel from './ColorLabel';
import BadgeLabel from './BadgeLabel';

export default {
  title: 'Components/OutLineLabel',
  component: OutLineLabel,
  argTypes: {
    size: {
      name: 'size',
      description: 'Size of the icon',
      defaultValue: 'medium',
    },
    icon: {
      name: 'icon',
      description: 'Icon',
      control: { type: 'ReactNode' },
    },
    image: {
      name: 'image',
      description: 'image',
      control: { type: 'ReactNode' },
    },
    colorLabel: {
      name: 'colorLabel',
      description: 'colorLabel',
      control: { type: 'ReactNode' },
    },
    badgeLabel: {
      name: 'badgeLabel',
      description: 'badgeLabel',
      control: { type: 'ReactNode' },
    },
    activated: {
      name: 'activated',
      description: 'activated',
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof OutLineLabel>;

function OutLineLabelDemo({ ...args }) {
  return <OutLineLabel {...args} ></OutLineLabel>;
}

const Template: ComponentStory<typeof OutLineLabel> = (args) => <OutLineLabelDemo {...args} />;

export const Defaul_text = Template.bind({});
Defaul_text.args = {
  children: 'Default',
};

export const Default_icon = Template.bind({});
Default_icon.args = {
  children: 'Default',
  icon: <IconClose/>
};

export const Default_color = Template.bind({});
Default_color.args = {
  children: 'Default',
  colorLabel: <ColorLabel color='red'/>
};

export const Default_color_icon = Template.bind({});
Default_color_icon.args = {
  children: 'Default',
  icon: <IconClose/>,
  colorLabel: <ColorLabel color='red'/>
};

export const Default_image_icon = Template.bind({});
Default_image_icon.args = {
  children: 'Default',
  image: <Img src='https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80' resolution={32} lazyload={false}/>,
  icon: <IconClose/>
};

export const Default_badge = Template.bind({});
Default_badge.args = {
  children: 'Default',
  badgeLabel: <BadgeLabel value='12'/>,
};

export const Default_color_badge = Template.bind({});
Default_color_badge.args = {
  children: 'Default',
  badgeLabel: <BadgeLabel value='12'/>,
  colorLabel: <ColorLabel color='red'/>
};