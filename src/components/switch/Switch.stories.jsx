import React, { useState } from "react";
import { Switch } from "./Switch";

export default {
  title: `Components/Switch`,
  component: SwitchDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=277%3A5138",
    },
  },
};

function SwitchDemo({ ...args }) {
  const [value, onChange] = useState(true);
  return (
    <Switch value={value} onChange={() => onChange(!value)}>
    </Switch>
  );
}

const Template = (args) => <SwitchDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
};
