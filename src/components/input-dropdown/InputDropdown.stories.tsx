import React from "react";
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

function InputDropdownDemo({ required, label, title, select }) {
  return <InputDropdown label={label} required={required} title={title}>
  </InputDropdown>
}

const Template = (args) => < InputDropdownDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default",
  title: "Default",
  required: true,
};

export const Without_Label = Template.bind({});
Without_Label.args = {
  title: "Default",
  required: true,
};
