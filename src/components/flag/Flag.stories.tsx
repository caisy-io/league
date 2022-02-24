import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Flag } from "./Flag";

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
  // TODO Default webpack config of Storybook contains a svg loader that does not work as we want for svgs
  // TODO Disable default behaviour and use svgr instead (see https://github.com/storybookjs/storybook/issues/6188#issuecomment-487705465, https://medium.com/@derek_19900/config-storybook-4-to-use-svgr-webpack-plugin-22cb1152f004)
  //const CountryFlag = require(`./flags/round/${args.countryCode}.svg`).default;
  // we can modify the final webpack config of storybook in .storybook/main.js (see https://storybook.js.org/docs/react/configure/webpack)

  return (
    <Flag {...args}>
      
    </Flag>
  );
}

const Template: ComponentStory<typeof Flag> = (args) => <FlagDemo  {...args} />;

export const Flag_default = Template.bind({});
Flag_default.args = {
  countryCode: "en-GB",
};
