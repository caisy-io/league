import React from "react";
import { Img } from "../../base-components/img/Img";
import { Preview } from "../preview";
import { ActiveUserAvatar } from "./ActiveUserAvatar";

export default {
  title: `Components/ActiveUserAvatar`,
  component: ActiveUserAvatar,
  argTypes: {},
};

const Template = (args) => (
  <ActiveUserAvatar {...args}>
    <Preview
      size={28}
      image={
        <Img
          lazyload={false}
          src={
            "https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="!
          }
          resolution={28}
        />
      }
    />
  </ActiveUserAvatar>
);

export const Default = Template.bind({});

Default.args = {
  color: "var(--tag-05)",
  activated: false,
};
