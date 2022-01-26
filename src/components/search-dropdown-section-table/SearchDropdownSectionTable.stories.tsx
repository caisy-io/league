import React from "react";
import { Badge } from '../badge/Badge';
import { EBadgePosition } from "../badge/EBadgePosition";
import { SearchDropdownSectionTable } from './SearchDropdownSectionTable';
import { SearchDropdownSectionTableHeader } from './SearchDropdownSectionTableHeader';
import { SearchDropdownSectionTableRow } from './SearchDropdownSectionTableRow';
import { SFlex } from "../../base-components/flex/styles/SFlex";

export default {
  title: `Components/SearchDropdownSectionTable`,
  component: SearchDropdownSectionTableDemo,
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
  },
};

function SearchDropdownSectionTableDemo({ boolean, text, select }) {
  return <SearchDropdownSectionTable>
    <SearchDropdownSectionTableHeader>
      <div>Title</div>
      <div>Description</div>
      <div>Settings</div>
      <div>Fields</div>
    </SearchDropdownSectionTableHeader>
    <SearchDropdownSectionTableRow>
      <div>Type A</div>
      <div>Type A Description will be displayed here</div>
      <div> <SFlex><Badge value={"2"} size={"small"} position={EBadgePosition.Center} type={"dark"}></Badge> settings defined </SFlex></div>
      <div>fields available</div>
    </SearchDropdownSectionTableRow>
  </SearchDropdownSectionTable>
}

const Template = (args) => < SearchDropdownSectionTableDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};


export const ThreeColumns = ({ content, ...args }) => (
  <SearchDropdownSectionTable>
    <SearchDropdownSectionTableHeader>
      <div>Title</div>
      <div>Description</div>
      <div>Settings</div>
    </SearchDropdownSectionTableHeader>
    <SearchDropdownSectionTableRow>
      <div>Type A</div>
      <div>Type A Description will be displayed here</div>
      <div> <SFlex><Badge value={"2"} size={"small"} position={EBadgePosition.Center} type={"dark"}></Badge> settings defined </SFlex></div>

    </SearchDropdownSectionTableRow>
  </SearchDropdownSectionTable>);

ThreeColumns.args = {
  
};
