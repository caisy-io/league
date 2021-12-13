import React from "react";
import { Checkbox } from './Checkbox';

export default {
  title: `Components/Forms/Checkbox`,
  component: CheckboxDemo,
  argTypes: {
    // example argument type
    activated: {
      description: "Changes the state of the component to Activated",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

function CheckboxDemo({ content, ...args }) {
  return <Checkbox>
    {content}
  </Checkbox>
}

const Template = (args) => < CheckboxDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};
