import React, { useState } from "react";
import { LineInput } from "./LineInput";

export default {
  title: `Components/Forms/LineInput`,
  component: LineInputDemo,
  argTypes: {
    state: {
      description: "Changes the state of the input",
      options: ["default", "success", "error"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
  },
};

function LineInputDemo({ state, required }) {
  const [value, setValue] = useState("");
  return (
    <LineInput
      required={required}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label="Label"
      errorMessage="Error message"
      placeholder="Default"
      state={state}
    />
  );
}

const Template = (args) => <LineInputDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: "default",
};

const RequiredTemplate = (args) => <LineInputDemo {...args} required={true} />;

export const Required = RequiredTemplate.bind({});
Default.args = {
  state: "default",
};
