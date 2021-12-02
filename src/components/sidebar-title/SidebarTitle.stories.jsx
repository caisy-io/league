import React, { useState } from "react";
import { SidebarTitle } from './SidebarTitle';
import { IconStarOutlined } from '../../icons/IconStarOutlined'
import { Toggle } from '../toggle';

export default {
  title: `Components/SidebarTitle`,
  component: SidebarTitleDemo,
  argTypes: {
    content: {
      description: "Content of the sidebar title",
      control: { type: "text" },
    },
    toggle: {
      description: "Visibility of toggle button",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
  },
};

// Default
function SidebarTitleDemo({ content, toggle }) {
  return <div style={{ width: "293px" }}>
    <SidebarTitle toggle={toggle}>
      {content}
    </SidebarTitle>
  </div>
}

const Template = (args) => < SidebarTitleDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "Default",
  toggle: false
};

// With left icon
export const LeftIcon = ({ content, toggle }) => (
  <div style={{ width: "293px" }}>
    <SidebarTitle icon={<IconStarOutlined></IconStarOutlined>} toggle={toggle}>
      {content}
    </SidebarTitle>
  </div>
);

LeftIcon.args = {
  content: "Default",
  toggle: false
};

// With left icon and toggle
export const IconAndToggle = ({ content, toggle }) => (
  <div style={{ width: "293px" }}>
    <SidebarTitle icon={<IconStarOutlined></IconStarOutlined>} toggle={toggle}>
      {content}
    </SidebarTitle>
  </div>
);

IconAndToggle.args = {
  content: "Default",
  toggle: true
};
