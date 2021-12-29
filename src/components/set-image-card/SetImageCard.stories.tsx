import React from "react";
import { SetImageCard } from './SetImageCard';

export default {
  title: `Components/Cards/SetImageCard`,
  component: SetImageCardDemo,
  argTypes: {
    boolean: {
      description: "An example boolean argument type",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    text: {
      description: "An example text argument type",
      control: { type: "text" },
    },
    select: {
      description: "An example select argument type",
      options: ["option1", "option2", "option2"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "option1",
        },
      },
    },
  },
};

function SetImageCardDemo({ boolean, text, select }) {
  return <SetImageCard>
    </SetImageCard>
}

const Template = (args) => < SetImageCardDemo {...args } />;

export const Default = Template.bind({});
Default.args = {

};
