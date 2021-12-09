import React from "react";
import { ComponentCard } from './ComponentCard';

export default {
  title: `Components/Cards/ComponentCard`,
  component: ComponentCardDemo,
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

function ComponentCardDemo({ content, ...args }) {
  return <ComponentCard>
    {content}
  </ComponentCard>
}

const Template = (args) => < ComponentCardDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};
