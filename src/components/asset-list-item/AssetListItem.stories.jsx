import React from "react";
import { IconDocuments } from '../../icons/IconDocuments';
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

  return <div style={{ width: "320px" }}>
    <AssetListItem title="Default" description="Description" uploading progressValue="30">
    </AssetListItem>
  </div>
}

const Template = (args) => < AssetListItemDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};

// With icon
export const WithIcon = ({ content, ...args }) => (
  <div style={{ width: "320px" }}>
    <AssetListItem title="Default" description="Description" icon={<IconDocuments></IconDocuments>}>
    </AssetListItem>
  </div>
);

WithIcon.args = {
  state: "default",
  content: "Default",
};
