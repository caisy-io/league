import React from "react";
import { AssetImageCard } from './AssetImageCard';
import { Img } from "../../base-components/img/Img";

export default {
  title: `Components/Cards/AssetImageCard`,
  component: AssetImageCardDemo,
  argTypes: {
    activated: {
      description: "Changes the state of the component to Activated",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    size: {
      description: "Changes the size of the card",
      options: ["simple", "small"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "simple",
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
    labelText: {
      description: "Changes the label text of the card",
      control: { type: "text" },
    },
  },
};

function AssetImageCardDemo({ image, size, labelText, activated }) {
  return <AssetImageCard activated={activated} image={image} size={size} labelText={labelText}>
  </AssetImageCard>
}

const Template = (args) => < AssetImageCardDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "simple", 
  labelText: "Default",
  image: <Img lazyload={false} src={"https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"!} resolution={48} />,
};
