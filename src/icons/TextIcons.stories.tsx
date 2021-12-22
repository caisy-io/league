import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC } from "react";
import { 
  IconBold,
  IconItalic,
  IconQuote,
  IconTextAlignLeft,
  IconTextAlignCenter,
  IconTextAlignRight,
  IconTextAlignJustified,
  IconBulletList,
  IconNumberedList,
  IconTableGrid,
  IconEmbeddedWindow,
  IconEnablePower,
  IconWrappingInLine,
  IconWrapText,
  IconWrappingBehind,
  IconWrappingFront,
  IconFlipHorizontal
} from './index';

const icons = {
  // IconLock: ({size, solid }) => <IconLock size={size} solid={solid}/>,
  IconBold: ({size }) => <IconBold size={size}/>,
  IconItalic: ({size }) => <IconItalic size={size}/>,
  IconQuote: ({size }) => <IconQuote size={size}/>,
  IconTextAlignLeft: ({size }) => <IconTextAlignLeft size={size}/>,
  IconTextAlignCenter: ({size }) => <IconTextAlignCenter size={size}/>,
  IconTextAlignRight: ({size }) => <IconTextAlignRight size={size}/>,
  IconTextAlignJustified: ({size }) => <IconTextAlignJustified size={size}/>,
  IconBulletList: ({size }) => <IconBulletList size={size}/>,
  IconNumberedList: ({size }) => <IconNumberedList size={size}/>,
  IconTableGrid: ({size }) => <IconTableGrid size={size}/>,
  IconEmbeddedWindow: ({size }) => <IconEmbeddedWindow size={size}/>,
  IconEnablePower: ({size }) => <IconEnablePower size={size}/>,
  IconWrappingInLine: ({size }) => <IconWrappingInLine size={size}/>,
  IconWrapText: ({size }) => <IconWrapText size={size}/>,
  IconWrappingBehind: ({size }) => <IconWrappingBehind size={size}/>,
  IconWrappingFront: ({size }) => <IconWrappingFront size={size}/>,
  IconFlipHorizontal: ({size }) => <IconFlipHorizontal size={size}/>,
};

interface ITextIconsDemo {
  size?: 12 | 16 | 20 | 24 | 32 | 36 | 40 | 48 | 28;
  icon?: string;
  solid?: boolean;
}

const TextIconsDemo: FC<ITextIconsDemo> = ({ ...args }) => {
  const Icon = icons[args.icon]
  return <Icon size={args.size} solid={args.solid}/>;
};

export default {
  title: "Icons/TextIcons/Icon",
  component: TextIconsDemo,
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
      options: ["IconBold", "IconItalic", "IconQuote", "IconTextAlignLeft", "IconTextAlignCenter", "IconTextAlignRight", "IconTextAlignJustified", "IconBulletList", "IconNumberedList",
        "IconTableGrid", "IconEmbeddedWindow", "IconEnablePower", "IconWrappingInLine", "IconWrapText", "IconWrappingBehind", "IconWrappingFront", "IconFlipHorizontal"],
      control: { type: 'select' },
      defaultValue: 'IconBold',
    },
    solid: {
      name: "solid",
      description: "Solid icon",
      options: [true, false],
      defaultValue: false,
      control: { type: 'boolean'}
    }
  },
} as ComponentMeta<typeof TextIconsDemo>;

const Template:  ComponentStory<typeof TextIconsDemo>= (args) => <TextIconsDemo  {...args} />;

export const TextIcons = Template.bind({});
TextIcons.args = {
};
