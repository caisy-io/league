import React from "react";
import { CloseButton } from './CloseButton';

export default {
  title: `Components/CloseButton`,
  component: CloseButtonDemo,
  argTypes: {
    // example argument type
    activated: {
      description: "Changes the state of the component to Activated",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

function CloseButtonDemo({ content, ...args }) {
  <CloseButton>
      {content}
</CloseButton>
}

const Template = (args) => < CloseButtonDemo {...args } />;

export const Default = Template.bind({});
Default.args = {

};