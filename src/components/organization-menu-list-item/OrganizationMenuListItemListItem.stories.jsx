import React from "react";
import { IconDocuments } from '../../icons/IconDocuments';
import { OrganizationMenuListItem } from './OrganizationMenuListItem';

export default {
  title: `Components/OrganizationMenuListItem`,
  component: OrganizationMenuListItemDemo,
  argTypes: {
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
    label: {
      description: "Changes the state of the component to recent",
      control: { type: "text" },
    },
    progressValue: {
      description: "Changes the state of the component to recent",
      control: { type: 'range', min: 0, max: 100 },
    },
  },
};

function OrganizationMenuListItemDemo({ content, ...args }) {
  return <div style={{ width: "320px" }}>
    <OrganizationMenuListItem recent={args.recent} error={args.error} title={args.title} label={args.label} progressValue={args.progressValue}>
    </OrganizationMenuListItem>
  </div>
}

const Template = (args) => < OrganizationMenuListItemDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  recent: false,
  error: false,
  title: "Default",
  label: "Label",
  progressValue: undefined,
};