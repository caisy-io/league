import React from "react";
import { SidebarTitle } from './SidebarTitle';
import { IconStarOutlined } from '../../icons/IconStarOutlined'
import { Switch } from '../switch';

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

// Default
function SidebarTitleDemo({ content, ...args }) {
  return <div style={{ width: "293px" }}>
    <SidebarTitle {...args}>
      {content}
    </SidebarTitle>
  </div>
}

const Template = (args) => < SidebarTitleDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "Default",
};

// With left icon
export const LeftIcon = ({ content, ...args }) => (
  <div style={{ width: "293px" }}>
    <SidebarTitle {...args} icon={<IconStarOutlined></IconStarOutlined>}>
      {content}
    </SidebarTitle>
  </div>
);

LeftIcon.args = {
  content: "Default",
};

// With left icon and toggle
export const IconAndToggle = ({ content, ...args }) => (
  <div style={{ width: "293px" }}>
    <SidebarTitle {...args} icon={<IconStarOutlined></IconStarOutlined>} toggleComponent={<Switch></Switch>}>
      {content}
    </SidebarTitle>
  </div>
);

IconAndToggle.args = {
  content: "Default",
};
