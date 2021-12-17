import React, { useState } from "react";
import { Toggle } from "./Toggle";

export default {
  title: `Components/Toggle`,
  component: ToggleDemo,
  argTypes: {},
};

function ToggleDemo() {
  const [activated, setActivated] = useState(false);
  return <Toggle activated={activated} onChange={setActivated} />;
}

const Template = (args) => <ToggleDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};
