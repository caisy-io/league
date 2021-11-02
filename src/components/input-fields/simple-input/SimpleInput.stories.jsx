import React from "react";
import { SimpleInput } from "./SimpleInput";

function SimpleInputDemo({ ...args }) {
  return <SimpleInput {...args} />;
}

export default {
  title: "Components/InputFields/SimpleInput",
  component: SimpleInputDemo,
  argTypes: {
    state: {
      description: "Changes the state of the Input",
      control: { type: "select" },
      options: ["default", "error", "success"],
    },
  },
};
const Template = (args) => <SimpleInputDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "This is a label",
  placeholder: "This is a placeholder",
  state: "default",
  required: true,
};
