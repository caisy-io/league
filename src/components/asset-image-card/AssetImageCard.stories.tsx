import React from "react";
import { AssetImageCard } from './AssetImageCard';
import { Img } from "../../base-components/img/Img";

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
    image: {
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

function AssetImageCardDemo({ image }) {
  return <AssetImageCard image={image}>
  </AssetImageCard>
}

const Template = (args) => < AssetImageCardDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: <Img lazyload={false} src={"https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"!} resolution={48} />,
};
