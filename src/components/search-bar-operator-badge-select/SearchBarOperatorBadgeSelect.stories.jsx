import React from "react";
import { SearchBarOperatorBadgeSelect } from './SearchBarOperatorBadgeSelect';

export default {
  title: `Components/SearchBarOperatorBadgeSelect`,
  component: SearchBarOperatorBadgeSelectDemo,
  argTypes: {
    state: {
      description: "Changes the overall design of the search bar operator badge",
      options: ["default", "hover", "activated"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    content: {
      description: "Content of the search bar operator badge",
      control: { type: "text" },
    },
  },
};

function SearchBarOperatorBadgeSelectDemo({ content, ...args }) {
  return <SearchBarOperatorBadgeSelect activated={args.state == "activated"} hover={args.state == "hover"}>
    {content}
  </SearchBarOperatorBadgeSelect>
}

const Template = (args) => < SearchBarOperatorBadgeSelectDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: "default",
  content: "and"
};
