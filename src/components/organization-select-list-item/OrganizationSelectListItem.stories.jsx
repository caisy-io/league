import React from "react";
import { Badge, EBadgePosition } from '../badge';
import { OrganizationSelectListItem } from './OrganizationSelectListItem';

export default {
  title: `Components/OrganizationSelectListItem`,
  component: OrganizationSelectListItemDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=1123%3A16712",
    },
  },
  argTypes: {
    title: {
      description: "Changes the title text of the component",
      control: { type: "text" },
    },
    label: {
      description: "Changes the label text of the component",
      control: { type: "text" },
    },
    badgeText: {
      description: "Changes the badge label text of the component",
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

function OrganizationSelectListItemDemo({ content, ...args }) {
  return <OrganizationSelectListItem title={args.title} label={args.label} itemSize={args.size} imageUrl={args.imageUrl}>
    {args.badge && <Badge value={args.badgeText} type="regular" size="small" position={EBadgePosition.Center}></Badge>
    }  </OrganizationSelectListItem>
}

const Template = (args) => < OrganizationSelectListItemDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Default",
  label: "Label",
  badgeText: "Label",
  size: "large",
  badge: true,
  imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80"
};