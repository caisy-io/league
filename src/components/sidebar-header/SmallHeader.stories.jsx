import React from "react";
import { SmallHeader } from './SmallHeader';
import { SSmallHeaderWrapper } from "./styles/SSmallHeaderWrapper";
import { IconStarOutlined } from "../../icons";

export default {
  title: `Components/List Items/SmallHeader`,
  component: SmallHeaderDemo,
  argTypes: {
    leftIcon: {
      name: "leftIcon",
      description: "Changes the state of the component to Activated",
      control: { type: "ReactNode" },
    },
    headerText: {
      name: "headerText",
      description: "Changes the state of the component to Activated",
      control: { type: "Text" },
    },
    rightIcon: {
      name: "rightIcon",
      description: "Changes the state of the component to Activated",
      control: { type: "ReactNode" },
    },
  },
};

function SmallHeaderDemo({ leftIcon, headerText, rightIcon }) {
  return <SSmallHeaderWrapper>
    <SmallHeader leftIcon={leftIcon} headerText={headerText} rightIcon={rightIcon}>
    </SmallHeader>
  </SSmallHeaderWrapper>
}

const Template = (args) => < SmallHeaderDemo {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  headerText: "Default",
};

export const With_right_icon = Template.bind({});
With_right_icon.args = {
  headerText: "Default",
  rightIcon: <IconStarOutlined size={20}></IconStarOutlined>,
};

export const With_left_icon = Template.bind({});
With_left_icon.args = {
  headerText: "Default",
  leftIcon: <IconStarOutlined size={20}></IconStarOutlined>,
};
