import React from "react";
import { SearchBarOperatorBadgeSelect } from "./SearchBarOperatorBadgeSelect";

export default {
  title: `Components/Forms/SearchBarOperatorBadgeSelect`,
  component: SearchBarOperatorBadgeSelectDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=1094%3A18210",
    },
  },
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
  return (
    <SearchBarOperatorBadgeSelect activated={args.state == "activated"} hover={args.state == "hover"}>
      {content}
    </SearchBarOperatorBadgeSelect>
  );
}

const Template = (args) => <SearchBarOperatorBadgeSelectDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: "default",
  content: "and",
};
