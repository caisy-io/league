import React from "react";
import { SearchBarOperator } from './SearchBarOperator';

export default {
  title: `Components/SearchBarOperator`,
  component: SearchBarOperatorDemo,
  argTypes: {
    state: {
      description: "Changes the overall design of the search bar operator",
      options: ["default", "hover", "activated"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    content: {
      description: "Content of the search bar operator",
      control: { type: "text" },
    },
  },
};

function SearchBarOperatorDemo({ content, ...args }) {
  return <SearchBarOperator activated={args.state == "activated"} hover={args.state == "hover"}>
    {content}
  </SearchBarOperator>
}

const Template = (args) => < SearchBarOperatorDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: "default",
  content: "default"
};
