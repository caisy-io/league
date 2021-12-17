import React from "react";
import { FieldCard } from './FieldCard';

export default {
  title: `Components/FieldCard`,
  component: FieldCardDemo,
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

function FieldCardDemo({ content, ...args }) {
  return <FieldCard>
    {content}
  </FieldCard>
}

const Template = (args) => < FieldCardDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};
