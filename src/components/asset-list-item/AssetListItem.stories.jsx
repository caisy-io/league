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
    title: {
      description: "Changes the state of the component to recent",
      control: { type: "text" },
    },
    description: {
      description: "Changes the state of the component to recent",
      control: { type: "text" },
    },
    progressValue: {
      description: "Changes the state of the component to recent",
      control: { type: 'range', min: 0, max: 100 },
    },
  },
};

function AssetListItemDemo({ content, ...args }) {
  return <div style={{ width: "320px" }}>
    <AssetListItem recent={args.recent} error={args.error} title={args.title} description={args.description} progressValue={args.progressValue}>
    </AssetListItem>
  </div>
}

const Template = (args) => < AssetListItemDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  recent: false,
  error: false,
  title: "Default",
  description: "Description",
  progressValue: undefined,
};

// With icon
export const WithIcon = ({ ...args }) => (
  <div style={{ width: "320px" }}>
    <AssetListItem icon={<IconDocuments></IconDocuments>} recent={args.recent} error={args.error} title={args.title} description={args.description} progressValue={args.progressValue}>
    </AssetListItem>
  </div>
);

WithIcon.args = {
  recent: false,
  error: false,
  title: "Default",
  description: "Description",
  progressValue: undefined,
};
