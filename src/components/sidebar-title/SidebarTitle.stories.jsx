import React from "react";
import { SidebarTitle } from './SidebarTitle';
import { IconStarOutlined } from '../../icons/IconStarOutlined'

export default {
  title: `Components/SidebarTitle`,
  component: SidebarTitleDemo,
  argTypes: {
    content: {
      description: "Content of the search bar operand",
      control: { type: "text" },
    },
  },
};

function SidebarTitleDemo({ content, ...args }) {
  return <SidebarTitle {...args}>
    {content}
    
  </SidebarTitle>
}

const Template = (args) => < SidebarTitleDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "Default",
};

// With entity
export const LeftIcon = ({ content, ...args }) => (
  <SidebarTitle {...args} icon={<IconStarOutlined></IconStarOutlined>}>
    {content}
  </SidebarTitle>
);

LeftIcon.args = {
  content: "Default",
};

// With entity
export const IconAndToggle = ({ content, ...args }) => (
  <SidebarTitle {...args}>
    {content}
  </SidebarTitle>
);

IconAndToggle.args = {
  content: "Default",
};
