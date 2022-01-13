import React from "react";
import styled from 'styled-components';

import { ManagementCard } from "./ManagementCard";

import { IconStarOutlined } from "../../icons/IconStarOutlined";

export default {
  title: `Components/ManagementCard`,
  component: ManagementCard,
  argTypes: {
    icon: {
      name: "icon",
      description: "Icon in the management block title",
      control: { type: "ReactNode" },
    },
    label: {
      name: "label",
      description: "Label in the management block title",
      control: { type: "text" },
    },
  },
};

const Template = (args) => <ManagementCard {...args} />;

export const Default = Template.bind({});

const Wrapper = styled.div`
  margin-top: 10px;
`

Default.args = {
  icon: <IconStarOutlined size={16} />,
  label: "Label",
  children: <Wrapper>Hello world!</Wrapper>
};

export const NoIcon = Template.bind({});

NoIcon.args = {
  label: "Hello world!",
};

export const NoIconAndLabel = Template.bind({});

NoIconAndLabel.args = {};
