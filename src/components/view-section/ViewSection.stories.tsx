import React from "react";
import { ViewSection } from './ViewSection';

export default {
  title: `Components/ViewSection`,
  component: ViewSectionDemo,
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

function ViewSectionDemo({ boolean, text, select }) {
  return <ViewSection>
    </ViewSection>
}

const Template = (args) => < ViewSectionDemo {...args } />;

export const Default = Template.bind({});
Default.args = {

};
