import React, { useState } from "react";
import { Toggle } from "./Toggle";

export default {
  title: `Components/Forms/Toggle`,
  component: ToggleDemo,
  argTypes: {
    size: {
      description: "Changes the size of the Toggle",
      control: { type: "select" },
      options: ["small", "default"],
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
  },
};

function ToggleDemo({ size }) {
  const [activated, setActivated] = useState(false);
  return <Toggle size={size} activated={activated} onChange={setActivated} />;
}

const Template = (args) => <ToggleDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "default",
};
