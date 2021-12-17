import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC } from "react";
import {
  IconDuplicate,
  IconCopy,
  IconPublish,
  IconUnpublish,
  IconArchive,
  IconDelete,
  IconBookmark,
  IconPublishDocuments,
  IconScheduleNewRelease,
  IconAddToRelease,
  IconEye,
  IconEyeHidden,
  IconSortDecending,
  IconSortAscending,
  IconMoveFolder,
  IconEdit,
  IconUndo,
  IconRedo,
  IconMessageBubbleChat 
} from './index';

const icons = {
  IconDuplicate: ({size}) => <IconDuplicate size={size}/>,
  IconCopy: ({size}) => <IconCopy size={size}/>,
  IconPublish: ({size}) => <IconPublish size={size}/>,
  IconUnpublish: ({size}) => <IconUnpublish size={size}/>,
  IconArchive: ({size}) => <IconArchive size={size}/>,
  IconDelete: ({size}) => <IconDelete size={size}/>,
  IconBookmark: ({size, solid }) => <IconBookmark size={size} solid={solid}/>,
  IconPublishDocuments: ({size}) => <IconPublishDocuments size={size}/>,
  IconScheduleNewRelease: ({size}) => <IconScheduleNewRelease size={size}/>,
  IconAddToRelease: ({size}) => <IconAddToRelease size={size}/>,
  IconEye: ({size}) => <IconEye size={size}/>,
  IconEyeHidden: ({size}) => <IconEyeHidden size={size}/>,
  IconSortDecending: ({size}) => <IconSortDecending size={size}/>,
  IconSortAscending: ({size}) => <IconSortAscending size={size}/>,
  IconMoveFolder: ({size}) => <IconMoveFolder size={size}/>,
  IconEdit: ({size}) => <IconEdit size={size}/>,
  IconUndo: ({size}) => <IconUndo size={size}/>,
  IconRedo: ({size}) => <IconRedo size={size}/>,
  IconMessageBubbleChat: ({size, solid }) => <IconMessageBubbleChat size={size} solid={solid}/>,
};

interface IActionIconsDemo {
  size?: 12 | 16 | 20 | 24 | 32 | 36 | 40 | 48 | 28;
  icon?: string;
  solid?: boolean;
}

const ActionIconsDemo: FC<IActionIconsDemo> =  ({ ...args }) => {
  const Icon = icons[args.icon]
  return <Icon size={args.size} solid={args.solid}/>;
};

export default {
  title: "Icons/Action/Icon",
  component: ActionIconsDemo,
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
      options: ["IconDuplicate", "IconCopy", "IconPublish", "IconUnpublish", "IconArchive", "IconDelete", "IconBookmark", "IconPublishDocuments", "IconScheduleNewRelease", "IconAddToRelease",
      "IconEye", "IconEyeHidden", "IconSortDecending", "IconSortAscending", "IconMoveFolder", "IconEdit", "IconUndo", "IconRedo", "IconMessageBubbleChat"],
      control: { type: 'select' },
      defaultValue: 'IconDuplicate'
    },
    solid: {
      name: "solid",
      description: "Solid icon",
      options: [true, false],
      defaultValue: false,
      control: { type: 'boolean'}
    }
  },
} as ComponentMeta<typeof ActionIconsDemo>;

const Template:  ComponentStory<typeof ActionIconsDemo>= (args) => <ActionIconsDemo  {...args} />;

export const FormIcons = Template.bind({});
FormIcons.args = {
};