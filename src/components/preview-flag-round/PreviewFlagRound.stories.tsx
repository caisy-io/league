import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import PreviewFlagRound from "./PreviewFlagRound";

export default {
  title: "Components/PreviewFlagRound",
  component: PreviewFlagRound,
  argTypes: {
    size: {
      name: "size",
      description: "Size of the flag icon",
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
} as ComponentMeta<typeof PreviewFlagRound>;

function PreviewFlagRoundDemo({ ...args }) {
  return <PreviewFlagRound countryCode={args.countryCode} {...args} ></PreviewFlagRound>;
}

const Template: ComponentStory<typeof PreviewFlagRound> = (args) => <PreviewFlagRoundDemo  {...args} />;

export const Flag_default = Template.bind({});
Flag_default.args = {
  children: "Ac",
  countryCode: "ac",
};

export const Flag_16 = Template.bind({});
Flag_16.args = {
  size: 16,
  countryCode: "ac",
};
export const Flag_20 = Template.bind({});
Flag_20.args = {
  size: 20,
  countryCode: "ac",
};
export const Flag_24 = Template.bind({});
Flag_24.args = {
  size: 24,
  countryCode: "ac",
};
export const Flag_28 = Template.bind({});
Flag_28.args = {
  size: 28,
  countryCode: "ac",
};
export const Flag_32 = Template.bind({});
Flag_32.args = {
  size: 32,
  countryCode: "ac",
};
export const Flag_36 = Template.bind({});
Flag_36.args = {
  size: 36,
  countryCode: "ac",
};
export const Flag_40 = Template.bind({});
Flag_40.args = {
  size: 40,
  countryCode: "ac",
};
export const Flag_48 = Template.bind({});
Flag_48.args = {
  size: 48,
  countryCode: "ac",
};
