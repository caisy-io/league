import styled from "styled-components"
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC } from "react";
import { 
  IconCrossCircle,
  IconCircle,
  IconCheckmarkCircle
} from './index';

const IconWrapper: any = styled.div`
  color: var(--icon-01);
`

const icons = {
  IconCrossCircle: ({size}) => <IconCrossCircle size={size}/>,
  IconCircle: ({size}) => <IconCircle size={size}/>,
  IconCheckmarkCircle: ({size, solid }) => <IconCheckmarkCircle size={size} solid={solid}/>,
};

interface IFormIconsDemo {
  size?: 12 | 16 | 20 | 24 | 32 | 36 | 40 | 48 | 28;
  icon?: string;
  solid?: boolean;
}

const FormIconsDemo: FC<IFormIconsDemo> =  ({ ...args }) => {
  const Icon = icons[args.icon]
  return (
    <IconWrapper>
      <Icon size={args.size} solid={args.solid}/>
    </IconWrapper>
  );
};

export default {
  title: "Icons/Form/Icon",
  component: FormIconsDemo,
  argTypes: {
    size: {
      name: "size",
      description: "Size of the icon",
      options: [16, 20, 24, 32],
      control: { type: 'select' }
    },
    icon: {
      name: "icon",
      description: "Icon name",
      options: ['IconCrossCircle', 'IconCircle', 'IconCheckmarkCircle'],
      control: { type: 'select' },
      defaultValue: 'IconCrossCircle'
    },
    solid: {
      name: "solid",
      description: "Solid icon",
      options: [true, false],
      defaultValue: false,
      control: { type: 'boolean'}
    }
  },
} as ComponentMeta<typeof FormIconsDemo>;

const Template:  ComponentStory<typeof FormIconsDemo>= (args) => <FormIconsDemo  {...args} />;

export const FormIcons = Template.bind({});
FormIcons.args = {
};