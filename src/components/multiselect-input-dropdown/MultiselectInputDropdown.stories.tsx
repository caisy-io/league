import React, { useState } from "react";
import styled from "styled-components";
import { IconColorPalette, IconEdit, IconDelete, IconClose, IconPlusBox, IconCheckmarkOutlined } from "../../icons";
import { MenuListItem } from "../menu-list-item/MenuListItem";
import { OutLineLabel } from "../out-line-label";
import { Checkbox } from "../checkbox";
import ColorLabel from "../out-line-label/ColorLabel";
import { TagListItem } from "../tag-list-item";

import { MultiselectInputDropdown } from "./MultiselectInputDropdown";
import { SearchInput } from "../search-input";
import { FlatActionButton } from "../flat-action-button";
import { ColorPicker } from "../color-picker";
import { Button } from "../button/Button";
import { SFlex } from "../../base-components/flex/styles/SFlex";
import { CSSProgressiveCaption01 } from "../../constants/styles";

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
  {
    id: 4,
    label: "Def 4",
    color: "cyan",
  },
  {
    id: 5,
    label: "DefaultVeryLooooooongWOOOOOOOW 5",
    color: "yellow",
  },
];

const Template = () => {
  const [tags, setTags] = React.useState([]);
  const [dataSource, setDataSource] = React.useState(TAGS_MOCK);

  const [newTag, setNewTag] = useState(undefined);

  const [editableTag, setEditableTag] = useState(undefined);

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [opened, setOpened] = useState(false);

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

  const toggleDropdown = () => {
    setOpened(!opened);
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

    const onChangeTagColor = (color) => {
      console.log({ color });
    };

    return (
      <TagListItem
        activated={!!isChecked}
        leftIcon={
          <Checkbox
            onChange={(e) => {
              e.stopPropagation();
              onSelectValue(i);
            }}
            checked={!!isChecked}
          />
        }
        outlineLabel={
          editableTag?.id === i.id ? (
            <InputWrapper>
              <ColorLabel color={i.color} />
              <Input value={editableTag.label} />
            </InputWrapper>
          ) : (
            <OutLineLabel size="medium" colorLabel={<ColorLabel color={i.color} />}>
              <OutlineLabelTextWrapper>{i.label}</OutlineLabelTextWrapper>
            </OutLineLabel>
          )
        }
        popover={
          showColorPicker ? (
            <ColorPickerWrapper>
              <ColorPicker onChange={onChangeTagColor} />
              <Button type="primary">
                <IconCheckmarkOutlined />
                Save
              </Button>
            </ColorPickerWrapper>
          ) : (
            <PopoverWrapper>
              <MenuListItem
                size="medium"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowColorPicker(true);
                }}
              >
                <div>
                  <IconColorPalette />
                  Change color
                </div>
              </MenuListItem>
              <MenuListItem
                size="medium"
                onClick={() => {
                  setEditableTag(i);
                }}
              >
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
          )
        }
      />
    );
  };

  const onSearch = (e) => {
    const searchTerm = e.target.value.trim();

    const filteredDataSource = TAGS_MOCK.filter((ds) => ds.label.toUpperCase().includes(searchTerm.toUpperCase()));

    if (filteredDataSource.length === 0) {
      setNewTag(searchTerm);
    }

    setDataSource(filteredDataSource);
  };

  const onAddNewTag = (e, onClose) => {
    if (e.code === "Enter") {
      console.log("New tag added -> ", newTag);
      onClose?.();
    }
  };

  const clearMultiSelect = () => {
    setDataSource(TAGS_MOCK);
    setNewTag(undefined);
    setEditableTag(undefined);
  };

  return (
    <Wrapper>
      <MultiselectInputDropdown
        opened={opened}
        onClick={toggleDropdown}
        placeholder="Select or create tags"
        values={tags}
        dataSource={dataSource}
        renderInputItem={renderInputItem}
        renderDataItem={renderDataItem}
        onClose={clearMultiSelect}
        onSelectValue={onSelectValue}
        popupHeader={
          <SearchInput
            placeholder="Search tags"
            onChange={onSearch}
            onKeyPress={onAddNewTag}
            onClose={clearMultiSelect}
          />
        }
        popupFooter={
          newTag && (
            <TagListItem
              outlineLabel={
                <OutLineLabel size="medium" colorLabel={<ColorLabel color="var(--ui-04)" />}>
                  {newTag}
                </OutLineLabel>
              }
              flatActionButton={
                <FlatActionButton type="blue">
                  <IconPlusBox />
                  Press enter to create new tag
                </FlatActionButton>
              }
            />
          )
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

const ColorPickerWrapper: any = styled.div`
  width: 320px;
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 12px;

  button {
    margin-top: 20px;
    width: 100%;

    .icon {
      flex: 0;
    }
  }
`;

const InputWrapper: any = styled(SFlex)`
  padding: 4px 8px;

  gap: 4px;

  border: 1px solid var(--active-ui-03-2);
  border-radius: 4px;
`;

const Input: any = styled.input`
  width: 36px;
  height: 16px;

  background-color: transparent;
  border: none;

  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
    border: none;
    outline: none;
  }

  ${CSSProgressiveCaption01};
`;

const OutlineLabelTextWrapper: any = styled.div`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
