import React from "react";
import { Img } from "../../base-components";
import { ProfileDetailsListItem } from "./ProfileDetailsListItem";

export default {
  title: `Components/Navigation/ProfileDetailsListItem`,
  component: ProfileDetailsListItemDemo,
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
    status: {
      description: "Changes the status of component if needed (online/offline)",
      options: ["online", "offline"],
      control: { type: "select" },
    },
  },
};

function ProfileDetailsListItemDemo({ title, label, status }) {
  return (
    <ProfileDetailsListItem
      title={title}
      label={label}
      status={status}
      previewProps={{
        image: (
          <Img
            lazyload={false}
            src={
              "https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="!
            }
            resolution={48}
          />
        ),
      }}
    ></ProfileDetailsListItem>
  );
}

const Template = (args) => <ProfileDetailsListItemDemo {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Max Karas",
  label: "max.karas@caisy.io",
  status: undefined,
};
