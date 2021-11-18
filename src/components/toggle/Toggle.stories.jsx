import React, { useState } from "react";
import { Toggle } from "./Toggle";

export default {
  title: `Components/Toggle`,
  component: ToggleDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=277%3A5138",
    },
  },
};

function ToggleDemo({ ...args }) {
  const [value, onChange] = useState(true);
  return (
    <Toggle value={value} onChange={() => onChange(!value)}>
    </Toggle>
  );
}

const Template = (args) => <ToggleDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
};
