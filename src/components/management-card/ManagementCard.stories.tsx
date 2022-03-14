import React from "react";
import styled from "styled-components";

import { ManagementCard } from "./ManagementCard";

import { IconStarOutlined } from "../../icons/IconStarOutlined";
import { Button } from "../button/Button";

export default {
  title: `Components/Cards/ManagementCard`,
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
    button: {
      name: "button",
      description: "Button in the management block title",
      control: { type: "ReactNode" },
    },
  },
};

const Template = (args) => <ManagementCard {...args} />;

export const Default = Template.bind({});

const Wrapper = styled.div`
  ${(props) => props.padded && " margin-top: 10px"};
`;

Default.args = {
  icon: <IconStarOutlined size={16} />,
  label: "Label",
  children: <Wrapper padded>Hello world!</Wrapper>,
};

export const NoIcon = Template.bind({});

NoIcon.args = {
  label: "Hello world!",
};

export const NoIconAndLabel = Template.bind({});

NoIconAndLabel.args = {
  children: <Wrapper>Hello world!</Wrapper>,
};

export const WithButton = Template.bind({});

WithButton.args = {
  icon: <IconStarOutlined size={16} />,
  label: "Label",
  button: <Button size="small">Button</Button>
};
