import React from "react";
import { {{ properCase name }} } from './{{ properCase name }}';

export default {
  title: `Components/{{ properCase name }}`,
  component: {{ properCase name }}Demo,
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

function {{properCase name}}Demo({ boolean, text, select }) {
  return <{{properCase name}}>
    </{{properCase name}}>
}

const Template = (args) => < {{ properCase name }}Demo {...args } />;

export const Default = Template.bind({});
Default.args = {

};
