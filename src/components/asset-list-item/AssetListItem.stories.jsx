import React from "react";
import { AssetListItem } from './AssetListItem';

export default {
  title: `Components/AssetListItem`,
  component: AssetListItemDemo,
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

function AssetListItemDemo({ content, ...args }) {
  return <AssetListItem>
    {content}
  </AssetListItem>
}

const Template = (args) => < AssetListItemDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};
