import React from "react";
import { TestComponent } from './TestComponent';

export default {
  title: `Components/TestComponent`,
  component: TestComponentDemo,
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

function TestComponentDemo({ boolean, text, table }) {
  return <TestComponent>
    </TestComponent>
}

const Template = (args) => < TestComponentDemo {...args } />;

export const Default = Template.bind({});
Default.args = {

};
