import React, { useState } from "react";
import { Toggle } from "./Toggle";

export default {
  title: `Components/Forms/Toggle`,
  component: ToggleDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=277%3A5138",
    },
  },
  argTypes: {
    small: {
      description: "Content of the sidebar title",
      control: { type: "boolean" },
    },
  },
};

function ToggleDemo({ ...args }) {
  const [value, onChange] = useState(true);
  return (
    <Toggle small={args.small} value={value} onChange={() => onChange(!value)}>
    </Toggle>
  );
}

const Template = (args) => <ToggleDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
};

