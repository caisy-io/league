import React from "react";
import { IconStarOutlined } from "../..";
import { InputDropdown } from './InputDropdown';

export default {
  title: `Components/Forms/InputDropdown`,
  component: InputDropdownDemo,
  argTypes: {
    required: {
      description: "An example boolean argument type",
      control: { type: "boolean" },
    },
    label: {
      description: "An example text argument type",
      control: { type: "text" },
    },
    title: {
      description: "An example text argument type",
      control: { type: "text" },
    },
    leftIcon: {
      description: "An example text argument type",
      control: { type: "ReactNode" },
    },
    select: {
      description: "An example select argument type",
      options: ["option1", "option2", "option2"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "option1",
        },
      },
    },
  },
};

function InputDropdownDemo({ required, label, title, leftIcon }) {
  return <InputDropdown label={label} required={required} title={title} leftIcon={leftIcon}>
  </InputDropdown>
}

const Template = (args) => < InputDropdownDemo {...args} />;

export const Simple_with_label = Template.bind({});
Simple_with_label.args = {
  label: "Default",
  title: "Default",
  required: false,
};

export const Simple_left_Icon_Label = Template.bind({});
Simple_left_Icon_Label.args = {
  label: "Default",
  title: "Default",
  required: false,
  leftIcon: <IconStarOutlined size={20}></IconStarOutlined>
};

export const Mandatory_with_label = Template.bind({});
Mandatory_with_label.args = {
  label: "Default",
  title: "Default",
  required: true,
};

export const Mandatory_left_Icon_with_label = Template.bind({});
Mandatory_left_Icon_with_label.args = {
  label: "Default",
  title: "Default",
  required: true,
  leftIcon: <IconStarOutlined size={20}></IconStarOutlined>
};

export const Simple_without_label = Template.bind({});
Simple_without_label.args = {
  title: "Default",
  required: false,
};

export const Simple_left_icon_without_label = Template.bind({});
Simple_left_icon_without_label.args = {
  title: "Default",
  required: false,
  leftIcon: <IconStarOutlined size={20}></IconStarOutlined>
};

export const Mandatory_without_label = Template.bind({});
Mandatory_without_label.args = {
  title: "Default",
  required: true,
};

export const Mandatory_left_icon_without_label = Template.bind({});
Mandatory_left_icon_without_label.args = {
  title: "Default",
  required: true,
  leftIcon: <IconStarOutlined size={20}></IconStarOutlined>
};
