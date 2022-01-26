import React from "react";
import { SearchDropdownSectionTitle } from './SearchDropdownSectionTitle';

export default {
  title: `Components/SearchDropdownSectionTitle`,
  component: SearchDropdownSectionTitleDemo,
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

function SearchDropdownSectionTitleDemo({ boolean, text, select }) {
  return <SearchDropdownSectionTitle>
    {text}
    </SearchDropdownSectionTitle>
}

const Template = (args) => < SearchDropdownSectionTitleDemo {...args } />;

export const Default = Template.bind({});
Default.args = {
  text: "Types",
};
