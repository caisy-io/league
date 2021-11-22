import React from "react";
import { IconDocuments } from '../../icons/IconDocuments';
import { AssetListItem } from './AssetListItem';

export default {
  title: `Components/AssetListItem`,
  component: AssetListItemDemo,
  argTypes: {
    // example argument type
    error: {
      description: "Changes the state of the component to error",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    recent: {
      description: "Changes the state of the component to recent",
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
    <AssetListItem title="Default" description="Description" recent={args.recent} error={args.error}>
    </AssetListItem>
  </div>
}

const Template = (args) => < AssetListItemDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  recent: false,
  error: false,
};

// With icon
export const WithIcon = ({ ...args }) => (
  <div style={{ width: "320px" }}>
    <AssetListItem title="Default" description="Description" icon={<IconDocuments></IconDocuments>} recent={args.recent} error={args.error}>
    </AssetListItem>
  </div>
);

WithIcon.args = {
  recent: false,
  error: false,
};
