import React from "react";
import styled from "styled-components";
import { IconColorPalette, IconEdit, IconDelete } from "../../icons";
import { MenuListItem } from "../menu-list-item/MenuListItem";
import { OutLineLabel } from "../out-line-label";
import ColorLabel from "../out-line-label/ColorLabel";
import { TagListItem } from "../tag-list-item";

import { MultiselectInputDropdown } from "./MultiselectInputDropdown";

export default {
  title: `Components/Forms/MultiselectInputDropdown`,
  component: MultiselectInputDropdown,
};

const Wrapper = styled.div`
  width: 320px;
`;

const TAGS_MOCK = [
  {
    id: 1,
    label: "Default 1",
    color: "red",
  },
  {
    id: 2,
    label: "Default 2",
    color: "green",
  },
  {
    id: 3,
    label: "Default 3",
    color: "blue",
  },
];

const Template = (args) => (
  <Wrapper>
    <MultiselectInputDropdown {...args} />
  </Wrapper>
);

export const Default = Template.bind({});

Default.args = {
  placeholder: "Select or create tags",
  dataSource: TAGS_MOCK,
  onSearch: (e) => {
    console.log(e.target.value);
  },
};

const PopoverWrapper: any = styled.div`
  width: 216px;
  background-color: white;
  border-radius: 8px;
`;

export const EithCustomListItem = Template.bind({});

EithCustomListItem.args = {
  placeholder: "Select or create tags",
  dataSource: TAGS_MOCK,
  renderDataItem: (option) => (
    <TagListItem
      outlineLabel={
        <OutLineLabel size="medium" colorLabel={<ColorLabel color={option.color} />}>
          {option.label}
        </OutLineLabel>
      }
      popover={
        <PopoverWrapper>
          <MenuListItem size="medium">
            <div>
              <IconColorPalette />
              Change color
            </div>
          </MenuListItem>
          <MenuListItem size="medium">
            <div>
              <IconEdit />
              Rename
            </div>
          </MenuListItem>
          <MenuListItem size="medium">
            <div>
              <IconDelete />
              Delete
            </div>
          </MenuListItem>
        </PopoverWrapper>
      }
    />
  ),
};
