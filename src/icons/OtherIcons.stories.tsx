import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC } from "react";
import { 
  IconEmojis,
  IconCog,
  IconPin,
  IconPlusBox
} from './index';

const icons = {
  IconEmojis: ({size}) => <IconEmojis size={size}/>,
  IconCog: ({size}) => <IconCog size={size}/>,
  IconPin: ({size, solid}) => <IconPin size={size} solid={solid}/>,
  IconPlusBox: ({size }) => <IconPin size={size}/>,
};

interface IOtherIconsDemo {
  size?: 12 | 16 | 20 | 24 | 32 | 36 | 40 | 48 | 28;
  icon?: string;
  solid?: boolean;
}

const OtherIconsDemo: FC<IOtherIconsDemo> = ({ ...args }) => {
  const Icon = icons[args.icon]
  return <Icon size={args.size} solid={args.solid}/>;
};

export default {
  title: "Icons/OtherIcons/Icon",
  component: OtherIconsDemo,
  argTypes: {
    size: {
      name: "size",
      description: "Size of the icon",
      options: [12, 16, 20, 24, 32, 40, 36, 28, 48],
      control: { type: 'select' }
    },
    icon: {
      name: "icon",
      description: "Icon name",
      options: ['IconEmojis', 'IconCog', 'IconPin', 'IconPlusBox'],
      control: { type: 'select' },
      defaultValue: 'IconEmojis',
    },
    solid: {
      name: "solid",
      description: "Solid icon",
      options: [true, false],
      defaultValue: false,
      control: { type: 'boolean'}
    }
  },
} as ComponentMeta<typeof OtherIconsDemo>;

const Template:  ComponentStory<typeof OtherIconsDemo>= (args) => <OtherIconsDemo  {...args} />;

export const OtherIcons = Template.bind({});
OtherIcons.args = {
};
