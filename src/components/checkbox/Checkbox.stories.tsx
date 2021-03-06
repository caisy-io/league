import React, { useState } from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: `Components/Forms/Checkbox`,
  component: CheckboxDemo,
  argTypes: {
    loading: {
      description: "Changes the state of the component to loading",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

function CheckboxDemo({ loading }) {
  const [isChecked, setIsChecked] = useState(false);
  return <Checkbox loading={loading} onChange={() => { setIsChecked(!isChecked) }} checked={isChecked}>
  </Checkbox>
}

const Template = (args) => < CheckboxDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: false
};
