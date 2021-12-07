import React from "react";
import { Img } from "../../base-components/img/Img";
import { OrganizationSelectListItem } from './OrganizationSelectListItem';

export default {
  title: `Components/Navigation/OrganizationSelectListItem`,
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
      options: ["medium", "large"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "large",
        },
      },
    },
  },
};

function OrganizationSelectListItemDemo({ content, ...args }) {
  return <OrganizationSelectListItem title={args.title} label={args.label} itemSize={args.size} badgeText={args.badgeText} previewProps={{ image: <Img lazyload={false} src={"https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="!} resolution={48} /> }}>
  </OrganizationSelectListItem>
}

const Template = (args) => < OrganizationSelectListItemDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Default",
  label: "Label",
  size: "large",
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  title: "Default",
  label: "Label",
  badgeText: "Label",
  size: "large",
};