import React from "react";
import { {{ properCase name }} } from './{{ properCase name }}';

export default {
  title: `Components/{{ properCase name }}`,
  component: {{ properCase name }},
  argTypes: {
    boolean: {
      description: "An example boolean argument type",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    text: {
      description: "An example text argument type",
      control: { type: "text" },
      table: {
        defaultValue: {
          summary: "Hello World",
        },
      },
    },
    select: {
      description: "An example select argument type",
      options: ["option1", "option2", "option3"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "option2",
        },
      },
    },
  },
};

const {{properCase name}}Demo: React.FC<{ boolean, text, select }> = ({ boolean, text, select }) => (
    <{{properCase name}}>
      <div>boolean value {"=>"} {boolean.toString()}</div>
      <div>text value {"=>"} {text}</div>
      <div>select value {"=>"} {select}</div>
    </{{properCase name}}>
);

export const Default: any = {{properCase name}}Demo.bind({});
Default.args = {
  boolean: true,
  text: 'Hello World',
  select: 'option2',
};
