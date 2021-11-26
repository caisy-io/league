import React from "react";
import { OrganizationMenuListItem } from './OrganizationMenuListItem';

export default {
  title: `Components/OrganizationMenuListItem`,
  component: OrganizationMenuListItemDemo,
  argTypes: {
    title: {
      description: "Changes the state of the component to recent",
      control: { type: "text" },
    },
    label: {
      description: "Changes the state of the component to recent",
      control: { type: "text" },
    },
    size: {
      description: "Changes the size of the badge",
      options: ["small", "medium", "large"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "large",
        },
      },
    },
    imageUrl: {
      description: "Changes the state of the component to recent",
      control: { type: "text" },
    },
  },
};

function OrganizationMenuListItemDemo({ content, ...args }) {
  return <OrganizationMenuListItem title={args.title} label={args.label} itemSize={args.size} imageUrl={args.imageUrl}>
  </OrganizationMenuListItem>
}

const Template = (args) => < OrganizationMenuListItemDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Default",
  label: "Label",
  size: "large",
  imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80"
};