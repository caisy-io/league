import React from "react";
import { Badge, EBadgePosition } from '../badge';
import { OrganizationMenuListItem } from './OrganizationMenuListItem';

export default {
  title: `Components/OrganizationMenuListItem`,
  component: OrganizationMenuListItemDemo,
  argTypes: {
    title: {
      description: "Changes the title text of the component",
      control: { type: "text" },
    },
    label: {
      description: "Changes the label text of the component",
      control: { type: "text" },
    },
    size: {
      description: "Changes the size of the list item",
      options: ["small", "medium", "large"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "large",
        },
      },
    },
    imageUrl: {
      description: "Changes the image url",
      control: { type: "text" },
    },
    badge: {
      description: "Toggles the existence of the badge",
      control: { type: "boolean" },
    },
  },
};

function OrganizationMenuListItemDemo({ ...args }) {
  return <OrganizationMenuListItem title={args.title} label={args.label} itemSize={args.size} imageUrl={args.imageUrl}>
    {args.badge && <Badge value="1" position={EBadgePosition.Center} type={'regular'} size="small"></Badge>}
  </OrganizationMenuListItem>
}

const Template = (args) => < OrganizationMenuListItemDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Default",
  label: "Label",
  size: "large",
  badge: true,
  imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80"
};