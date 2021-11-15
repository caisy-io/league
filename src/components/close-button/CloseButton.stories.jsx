import React from "react";
import { CloseButton } from './CloseButton';

export default {
  title: `Components/CloseButton`,
  component: CloseButtonDemo,
};

function CloseButtonDemo({ content, ...args }) {
  return <CloseButton {...args}>
    {content}
  </CloseButton>
}

const Template = (args) => < CloseButtonDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
};