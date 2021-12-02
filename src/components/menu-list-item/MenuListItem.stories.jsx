import React from "react";
import { MenuListItem } from './MenuListItem';
import { IconStarOutlined } from '../../icons'

export default {
  title: `Components/MenuListItem`,
  component: MenuListItemDemo,
  argTypes: {
    size: {
      description: "Changes the size of the menu list item",
      options: ["small", "medium"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "small",
        },
      },
    },
    disabled: {
      description: "Disables the menu list item",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    content: {
      description: "Disables the menu list item",
      control: { type: "text" },
    },
  },
};

// With everything possible
function MenuListItemDemo({ content, size, disabled }) {
  return <div style={{ width: "320px" }}>
    <MenuListItem size={size} disabled={disabled}>
      <div> <IconStarOutlined /> <span >{content}</span> <IconStarOutlined />  </div>
      <div> <IconStarOutlined /> <span >{content}</span> </div>
    </MenuListItem>
  </div>
}

const Template = (args) => < MenuListItemDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "small",
  disabled: false,
  content: "Default"
};

// With icon on the left
export const Simple = ({ size, disabled, content }) => (
  <div style={{ width: "320px" }}>
    <MenuListItem size={size} disabled={disabled}>
      <span>{content}</span>
    </MenuListItem>
  </div>
);

Simple.args = {
  size: "small",
  disabled: false,
  content: "Default"
};

// With icon on the left
export const LeftIcon = ({ size, disabled, content }) => (
  <div style={{ width: "320px" }}>
    <MenuListItem size={size} disabled={disabled}>
      <div> <IconStarOutlined />  <span>{content}</span>  </div>
    </MenuListItem>
  </div>
);

LeftIcon.args = {
  size: "small",
  disabled: false,
  content: "Default"
};

// With icon on the left and text on the right
export const LeftIconRightText = ({ content, size, disabled }) => (
  <div style={{ width: "320px" }}>
    <MenuListItem size={size} disabled={disabled}>
      <div> <IconStarOutlined />  <span>{content}</span>  </div>
      <div> {content} </div>
    </MenuListItem>
  </div>
);

LeftIconRightText.args = {
  size: "small",
  disabled: false,
  content: "Default"
};

// With icon after text and on the right
export const LeftIconRightTexRightIcon = ({ content, size, disabled }) => (
  <div style={{ width: "320px" }}>
    <MenuListItem size={size} disabled={disabled}>
      <div>  <span>{content}</span> <IconStarOutlined />   </div>
      <div> <IconStarOutlined />  </div>
    </MenuListItem>
  </div>
);

LeftIconRightTexRightIcon.args = {
  size: "small",
  disabled: false,
  content: "Default"
};

// With icon on the right
export const RightIcon = ({ disabled, size, content }) => (
  <div style={{ width: "320px" }}>
    <MenuListItem size={size} disabled={disabled}>
      <div>  <span>{content}</span></div>
      <div> <IconStarOutlined />  </div>
    </MenuListItem>
  </div>
);

RightIcon.args = {
  size: "small",
  disabled: false,
  content: "Default"
};
