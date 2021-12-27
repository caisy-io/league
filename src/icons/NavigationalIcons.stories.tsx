import styled from "styled-components";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC } from "react";
import { 
  IconDragable,
  IconChevronRight,
  IconChevronLeft,
  IconChevronUp,
  IconChevronDown,
  IconCross
} from './index';

const IconWrapper: any = styled.div`
  color: var(--icon-01);
`

const icons = {
  IconDragable: ({size}) => <IconDragable size={size}/>,
  IconChevronRight: ({size}) => <IconChevronRight size={size}/>,
  IconChevronLeft: ({size}) => <IconChevronLeft size={size}/>,
  IconChevronUp: ({size}) => <IconChevronUp size={size}/>,
  IconChevronDown: ({size}) => <IconChevronDown size={size}/>,
  IconCross: ({size}) => <IconCross size={size}/>,
};

interface INavigationalIconDemo {
  size?: 12 | 16 | 20 | 24 | 32 | 40;
  icon?: string;
}

const NavigationalIconDemo: FC<INavigationalIconDemo> = ({ ...args }) => {
  const Icon = icons[args.icon]
  return (
    <IconWrapper>
      <Icon size={args.size}/>
    </IconWrapper>
  );
};

export default {
  title: "Icons/Navigational/Icon",
  component: NavigationalIconDemo,
  argTypes: {
    size: {
      name: "size",
      description: "Size of the icon",
      options: [12, 16, 20, 24, 32],
      control: { type: 'select' }
    },
    icon: {
      name: "icon",
      description: "Icon name",
      options: ['IconDragable', 'IconChevronRight', 'IconChevronLeft', 'IconChevronUp', 'IconChevronDown', 'IconCross'],
      control: { type: 'select' },
      defaultValue: 'IconDragable'
    }
  },
} as ComponentMeta<typeof NavigationalIconDemo>;

const Template:  ComponentStory<typeof NavigationalIconDemo>= (args) => <NavigationalIconDemo  {...args} />;

export const NavigationalIcons = Template.bind({});
NavigationalIcons.args = {
  icon: 'IconDragable',
};
