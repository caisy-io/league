import React from "react";
import { SearchDropdownSectionFulltext } from './SearchDropdownSectionFulltext';
import { SearchDropdownSectionFulltextLabel } from './SearchDropdownSectionFulltextLabel';

export default {
  title: `Components/SearchDropdownSectionFulltext`,
  component: SearchDropdownSectionFulltextDemo,
  argTypes: {
    label: {
      description: "An example text argument type",
      control: { type: "text" },
    },
    searchText: {
      description: "An example text argument type",
      control: { type: "text" },
    },
  },
};

function SearchDropdownSectionFulltextDemo({ label, searchText }) {
  return <SearchDropdownSectionFulltext>
    <SearchDropdownSectionFulltextLabel>{label}</SearchDropdownSectionFulltextLabel>
    {searchText}
  </SearchDropdownSectionFulltext>
}

const Template = (args) => < SearchDropdownSectionFulltextDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Full text search",
  searchText: "Searched string"
};
