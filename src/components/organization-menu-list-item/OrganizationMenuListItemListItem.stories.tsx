import React from "react";
import { Img } from "../../base-components/img/Img";
import { OrganizationMenuListItem } from './OrganizationMenuListItem';

export default {
  title: `Components/Navigation/OrganizationMenuListItem`,
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
    badgeValue: {
      description: "Defines the value of the badge",
      control: { type: "text" },
      table: {
        defaultValue: {
          summary: undefined,
        },
      },
    },
    disabled: {
      description: "Disables the component",
      control: { type: "boolean" },
    },
  },
};

function OrganizationMenuListItemDemo({ title, label, size, badgeValue, disabled }) {
  return <OrganizationMenuListItem title={title} label={label} itemSize={size} badgeValue={badgeValue} disabled={disabled} previewProps={{ image: <Img lazyload={false} src={"https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="!} resolution={48} /> }}>
  </OrganizationMenuListItem>
}

const Template = (args) => < OrganizationMenuListItemDemo {...args} />;

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
  size: "large",
  badgeValue: "1"
};