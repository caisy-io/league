import React from "react";
import { SearchInput } from "./SearchInput";

// Default SearchInput Demo
export default {
  title: "Components/SearchInput",
  component: SearchInputDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=1110%3A20042",
    },
  },
  argTypes: {},
};

function SearchInputDemo({ ...args }) {
  return (
    <div style={{ width: 250 }}>
      <SearchInput {...args} />
    </div>
  );
}

const Template = (args) => <SearchInputDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search",
  withFilter: false,
};
