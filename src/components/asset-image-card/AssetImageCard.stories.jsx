import React from "react";
import { AssetImageCard } from './AssetImageCard';

export default {
  title: `Components/Cards/AssetImageCard`,
  component: AssetImageCardDemo,
  argTypes: {
    // example argument type
    activated: {
      description: "Changes the state of the component to Activated",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

function AssetImageCardDemo({ content, ...args }) {
  return <AssetImageCard>
    {content}
  </AssetImageCard>
}

const Template = (args) => < AssetImageCardDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};
