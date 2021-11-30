import React from "react";
import { NotificationsGroupSelectListItem } from './NotificationsGroupSelectListItem';

export default {
  title: `Components/NotificationsGroupSelectListItem`,
  component: NotificationsGroupSelectListItemDemo,
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
    activated: {
      description: "Toggles the existence of the badge",
      control: { type: "boolean" },
    },
  },
};

function NotificationsGroupSelectListItemDemo({ content, ...args }) {
  return <NotificationsGroupSelectListItem activated ={args.activated} title={args.title} label={args.label} itemSize={args.size} imageUrl={args.imageUrl}>
  </NotificationsGroupSelectListItem>
}

const Template = (args) => < NotificationsGroupSelectListItemDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Default",
  label: "Label",
  size: "large",
  activated: false,
  imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80"
};