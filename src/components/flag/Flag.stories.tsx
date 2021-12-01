import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Flag from "./Flag";

export default {
  title: "Components/Style Guide/Flag",
  component: Flag,
  argTypes: {
    size: {
      name: "size",
      description: "Size of the icon",
      control: { type: "number" },
      type: "number"
    },
    countryCode: {
      name: "countryCode",
      description: "Country code of flag",
      control: { type: "text" },
      type: "string"
    },
  },
} as ComponentMeta<typeof Flag>;

function FlagDemo({ ...args }) {
  return <Flag countryCode={args.countryCode} {...args} ></Flag>;
}

const Template: ComponentStory<typeof Flag> = (args) => <FlagDemo  {...args} />;

export const Flag_default = Template.bind({});
Flag_default.args = {
  children: "Ac",
  countryCode: "ac",
};
