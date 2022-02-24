import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { FlagDynamic } from "./FlagDynamic";

export default {
  title: "Components/Style Guide/DynamicFlag",
  component: FlagDynamic,
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
} as ComponentMeta<typeof FlagDynamic>;

function FlagDynamicDemo({ ...args }) {
  return (
    <FlagDynamic {...args}>
      <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z" fill="#F0F0F0"/>
      <path d="M512 256C512 145.929 442.528 52.094 345.043 15.923V496.078C442.528 459.906 512 366.071 512 256Z" fill="#D80027"/>
      <path d="M0 256C0 366.071 69.473 459.906 166.957 496.077V15.923C69.473 52.094 0 145.929 0 256Z" fill="#0052B4"/>
    </svg>
    </FlagDynamic>
  );
}

const Template: ComponentStory<typeof FlagDynamic> = (args) => <FlagDynamicDemo  {...args} />;

export const Flag_default = Template.bind({});
Flag_default.args = {
  countryCode: "fr-FR",
  size: 20,
};
