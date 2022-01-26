import React from "react";
import { SearchDropdownSectionTitle } from './SearchDropdownSectionTitle';

export default {
  title: `Components/SearchDropdownSectionTitle`,
  component: SearchDropdownSectionTitleDemo,
  argTypes: {
    text: {
      description: "An example text argument type",
      control: { type: "text" },
    },
  },
};

function SearchDropdownSectionTitleDemo({ boolean, text, select }) {
  return <SearchDropdownSectionTitle>
    {text}
  </SearchDropdownSectionTitle>
}

const Template = (args) => < SearchDropdownSectionTitleDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Types",
};
