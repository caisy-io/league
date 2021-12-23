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
  IconFlipHorizontal,
  IconFlipVertical,
  IconTuneImage,
  IconScaleBigger,
  IconScaleSmaller,
  IconEditImageAsset,
  IconPointTarget,
  IconMarkerTool,
  IconEraserTool,
  IconSquareTool,
  IconArrowTool,
  IconTextTool,
  IconCropImage,
  IconRotateImage,
  IconCropShape,
  IconImageFilters,
  IconArrowLine,
  IconArrowTriangle,
  IconArrowReversed,
  IconArrowDiamond,
  IconArrowNone,
  IconCaisyLogo
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
  IconFlipVertical: ({size }) => <IconFlipVertical size={size}/>,
  IconTuneImage: ({size }) => <IconTuneImage size={size}/>,
  IconScaleBigger: ({size }) => <IconScaleBigger size={size}/>,
  IconScaleSmaller: ({size }) => <IconScaleSmaller size={size}/>,
  IconEditImageAsset: ({size }) => <IconEditImageAsset size={size}/>,
  IconPointTarget: ({size }) => <IconPointTarget size={size}/>,
  IconMarkerTool: ({size }) => <IconMarkerTool size={size}/>,
  IconEraserTool: ({size }) => <IconEraserTool size={size}/>,
  IconSquareTool: ({size }) => <IconSquareTool size={size}/>,
  IconArrowTool: ({size }) => <IconArrowTool size={size}/>,
  IconTextTool: ({size }) => <IconTextTool size={size}/>,
  IconCropImage: ({size }) => <IconCropImage size={size}/>,
  IconRotateImage: ({size }) => <IconRotateImage size={size}/>,
  IconCropShape: ({size }) => <IconCropShape size={size}/>,
  IconImageFilters: ({size }) => <IconImageFilters size={size}/>,
  IconArrowNone: ({size }) => <IconArrowNone size={size}/>,
  IconArrowLine: ({size }) => <IconArrowLine size={size}/>,
  IconArrowTriangle: ({size }) => <IconArrowTriangle size={size}/>,
  IconArrowReversed: ({size }) => <IconArrowReversed size={size}/>,
  IconArrowDiamond: ({size }) => <IconArrowDiamond size={size}/>,
  IconCaisyLogo: ({size }) => <IconCaisyLogo size={size}/>,
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
      options: [16, 20, 24, 32],
      control: { type: 'select' }
    },
    icon: {
      name: "icon",
      description: "Icon name",
      options: ["IconBold", "IconItalic", "IconQuote", "IconTextAlignLeft", "IconTextAlignCenter", "IconTextAlignRight", "IconTextAlignJustified", "IconBulletList", "IconNumberedList",
        "IconTableGrid", "IconEmbeddedWindow", "IconEnablePower", "IconWrappingInLine", "IconWrapText", "IconWrappingBehind", "IconWrappingFront", "IconFlipHorizontal",
        "IconFlipVertical", "IconTuneImage", "IconScaleBigger", "IconScaleSmaller", "IconEditImageAsset", "IconPointTarget", "IconMarkerTool", "IconEraserTool", "IconSquareTool", "IconArrowTool",
        "IconTextTool", "IconCropImage",  "IconRotateImage","IconCropShape", "IconImageFilters", "IconArrowNone", "IconArrowLine", "IconArrowTriangle", "IconArrowReversed", "IconArrowDiamond", "IconCaisyLogo"],
      control: { type: 'select' },
      defaultValue: 'IconBold',
    },
  },
} as ComponentMeta<typeof TextIconsDemo>;

const Template:  ComponentStory<typeof TextIconsDemo>= (args) => <TextIconsDemo  {...args} />;

export const TextIcons = Template.bind({});
TextIcons.args = {
};
