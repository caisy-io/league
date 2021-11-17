import React from "react";
import { Switch } from "./Switch";

export default {
  title: `Components/Switch`,
  component: SwitchDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=1094%3A18210",
    },
  },
  argTypes: {
    toggle: {
      description: "Toggles the toggle button",
      control: { type: "boolean" },
      options: ["true", "false"],
      table: {
        defaultValue: {
          summary: "true",
        },
      },
    },
  },
};

function SwitchDemo({ ...args }) {
  return (
    <Switch value={args.toggle}>
    </Switch>
  );
}

const Template = (args) => <SwitchDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  toggle: true,
};
