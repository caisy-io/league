import styled from "styled-components";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC } from "react";
import { 
  IconDocumentsComponents,
  IconDocuments, 
  IconAssetsImage,
  IconCalendar,
  IconSchemas,
  IconTerminal,
  IconNotificationBell,
  IconSearch,
  IconChat,
  IconUpload,
  IconComponents,
} from './index';

const IconWrapper: any = styled.div`
  color: var(--icon-01);
`

const icons = {
  IconDocumentsComponents: ({size}) => <IconDocumentsComponents size={size}/>,
  IconDocuments: ({size}) => <IconDocuments size={size}/>,
  IconAssetsImage: ({size}) => <IconAssetsImage size={size}/>,
  IconCalendar: ({size}) => <IconCalendar size={size}/>,
  IconSchemas: ({size}) => <IconSchemas size={size}/>,
  IconTerminal: ({size}) => <IconTerminal size={size}/>,
  IconNotificationBell: ({size}) => <IconNotificationBell size={size}/>,
  IconSearch: ({size}) => <IconSearch size={size}/>,
  IconChat: ({size}) => <IconChat size={size}/>,
  IconUpload: ({size}) => <IconUpload size={size}/>,
  IconComponents: ({size}) => <IconComponents size={size}/>,
};

interface IMainMenuIconDemo {
  size?: 12 | 16 | 20 | 24 | 32 | 40;
  icon?: string;
}

const MainMenuIconDemo: FC<IMainMenuIconDemo> = ({ ...args }) => {
  const Icon = icons[args.icon]
  return (
    <IconWrapper>
      <Icon size={args.size}/>
    </IconWrapper>
  );
};

export default {
  title: "Icons/MainMenu/Icon",
  component: MainMenuIconDemo,
  argTypes: {
    size: {
      name: "size",
      description: "Size of the icon",
      options: [12, 16, 20, 24, 32, 40],
      control: { type: 'select' }
    },
    icon: {
      name: "icon",
      description: "Icon name",
      options: ['IconDocumentsComponents', 'IconAssetsImage', 'IconCalendar', 'IconSchemas', 'IconTerminal', 'IconNotificationBell', 'IconSearch', 'IconChat', 'IconUpload', 'IconDocuments', 'IconComponents'],
      control: { type: 'select' }
    }
  },
} as ComponentMeta<typeof MainMenuIconDemo>;

const Template:  ComponentStory<typeof MainMenuIconDemo>= (args) => <MainMenuIconDemo  {...args} />;

export const MainMenuIcons = Template.bind({});
MainMenuIcons.args = {
  icon: 'IconDocuments',
};
