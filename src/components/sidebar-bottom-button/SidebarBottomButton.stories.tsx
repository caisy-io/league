import React from "react";
import { SidebarBottomButton } from './SidebarBottomButton';
import {IconPlusBox} from "../../icons/IconPlusBox";

const Template = ({ active, text }) => {
  return <SidebarBottomButton active={active}>
    <IconPlusBox size={20}></IconPlusBox>
    <span>{text}</span>
    </SidebarBottomButton>
}

export default {
  title: `Components/SidebarBottomButton`,
  component: Template,
  argTypes: {
    active: {
      description: "Active",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    text: {
      description: "An example text argument type",
      control: { type: "text" },
    },
  },
};

export const Default = Template.bind({});
Default.args = {};
