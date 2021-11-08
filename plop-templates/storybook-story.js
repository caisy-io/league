import React from "react";
import { {{ properCase name }} } from './{{ properCase name }}';

export default {
  title: `Components/{{ properCase name }}`,
  component: {{ properCase name }}Demo,
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

function {{properCase name}}Demo({ content, ...args }) {
  <{{properCase name}}>
      {content}
    </{{properCase name}}>
}

const Template = (args) => < {{ properCase name }}Demo {...args } />;

export const Default = Template.bind({});
Default.args = {

};
