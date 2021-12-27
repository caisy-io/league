import React, { useState } from "react";
import { Toggle } from "./Toggle";

export default {
  title: `Components/Forms/Toggle`,
  component: ToggleDemo,
  argTypes: {},
};

function ToggleDemo({ small }) {
  const [activated, setActivated] = useState(false);
  return <Toggle size={small ? "small" : undefined} activated={activated} onChange={setActivated} />;
}

const Template = (args) => <ToggleDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  small: false,
};
