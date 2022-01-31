import React, { useState } from "react";
import { LineInput } from "./LineInput";
const Template = ({ state, required }) => {
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
};
export default {
  title: `Components/Forms/LineInput`,
  component: Template,
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

export const Default = Template.bind({});
Default.args = {
  state: "default",
};

const RequiredTemplate = ({ state, required = true }) => {
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
};

export const Required = RequiredTemplate.bind({});
Default.args = {
  state: "default",
};
