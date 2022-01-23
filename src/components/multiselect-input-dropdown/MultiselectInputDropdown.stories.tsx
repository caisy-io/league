import React from "react";
import styled from "styled-components";
import { IconColorPalette, IconEdit, IconDelete, IconClose, IconPlusBox } from "../../icons";
import { MenuListItem } from "../menu-list-item/MenuListItem";
import { OutLineLabel } from "../out-line-label";
import { Checkbox } from "../checkbox";
import ColorLabel from "../out-line-label/ColorLabel";
import { TagListItem } from "../tag-list-item";
import uniq from "lodash/uniq";
import remove from "lodash/remove";
import cloneDeep from "lodash/cloneDeep";

import { MultiselectInputDropdown } from "./MultiselectInputDropdown";
import { SearchInput } from "../search-input";
import { FlatActionButton } from "../flat-action-button";

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

const Template = () => {
  const [tags, setTags] = React.useState([]);
  const [dataSource, setDataSource] = React.useState(TAGS_MOCK);

  const onSelectValue = (v) => {
    const isDublicate = tags.find((t) => t.id === v.id);

    if (!isDublicate) {
      setTags([...tags, v]);
    } else {
      onRemoveValue(v);
    }
  };

  const onRemoveValue = (v) => {
    setTags(tags.filter((t) => t.id !== v.id));
  };

  const renderInputItem = (i) => {
    return (
      <OutLineLabel
        key={i.id}
        size="medium"
        colorLabel={<ColorLabel color={i.color} />}
        icon={
          <div
            onClick={(e) => {
              e.stopPropagation();
              onRemoveValue(i);
            }}
          >
            <IconClose />
          </div>
        }
      >
        {i.label}
      </OutLineLabel>
    );
  };

  const renderDataItem = (i) => {
    const isChecked = tags.length !== 0 && tags.find((t) => t.id === i.id);

    return (
      <TagListItem
        activated={!!isChecked}
        leftIcon={
          <Checkbox
            onChange={(e) => {
              e.stopPropagation();
            }}
            checked={!!isChecked}
          />
        }
        outlineLabel={
          <OutLineLabel size="medium" colorLabel={<ColorLabel color={i.color} />}>
            {i.label}
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
    );
  };

  const onSearch = (e) => {
    const filteredDataSource = TAGS_MOCK.filter((ds) =>
      ds.label.toUpperCase().includes(e.target.value.trim().toUpperCase()),
    );

    setDataSource(filteredDataSource);
  };

  const dropSearch = () => {
    setDataSource(TAGS_MOCK);
  };

  return (
    <Wrapper>
      <MultiselectInputDropdown
        placeholder="Select or create tags"
        values={tags}
        onSelectValue={onSelectValue}
        dataSource={dataSource}
        renderInputItem={renderInputItem}
        renderDataItem={renderDataItem}
        onClose={dropSearch}
        popupHeader={<SearchInput placeholder="Search tags" onChange={onSearch} onClose={dropSearch} />}
        popupFooter={
          <TagListItem
            outlineLabel={
              <OutLineLabel size="medium" colorLabel={<ColorLabel color="var(--ui-04)" />}>
                Default
              </OutLineLabel>
            }
            flatActionButton={
              <FlatActionButton type="blue">
                <IconPlusBox />
                Create new tag
              </FlatActionButton>
            }
          />
        }
      />
    </Wrapper>
  );
};

export const Default = Template.bind({});

const PopoverWrapper: any = styled.div`
  width: 216px;
  background-color: white;
  border-radius: 8px;
`;
