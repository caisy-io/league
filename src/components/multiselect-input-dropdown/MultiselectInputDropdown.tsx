import React from "react";
import { IconChevronDown, IconClose } from "../../icons";
import { ClickOutside, useDimensions } from "../../utils";
import { OutLineLabel } from "../out-line-label";
import ColorLabel from "../out-line-label/ColorLabel";

import { Popover } from "../popover";
import { SearchInput } from "../search-input";
import { TagListItem } from "../tag-list-item";

import { SDropdownArrow } from "./styles/SDropdownArrow";
import { SMultiselectInputDropdown } from "./styles/SMultiselectInputDropdown";
import { SMultiselectInputDropdownSelect } from "./styles/SMultiselectInputDropdownSelect";
import { SMultiselectInputDropdownTitle } from "./styles/SMultiselectInputDropdownTitle";
import { SMultiSelectInputWrapper } from "./styles/SMultiSelectInputWrapper";

interface IMultiselectInputDropdown {
  children?;
}

type Tag = {
  id: number;
  title: string;
  color: string;
};

const TAGS_MOCK: Tag[] = [
  {
    id: 1,
    title: "Default 1",
    color: "red",
  },
  {
    id: 2,
    title: "Default 2",
    color: "green",
  },
  {
    id: 3,
    title: "Default 3",
    color: "blue",
  },
  {
    id: 4,
    title: "Default 4",
    color: "grey",
  },
];

const removeById = (id: number, arr: Tag[]) => {
  const removeIndex = arr.map((i) => i.id).indexOf(id);
  // remove object
  arr.splice(removeIndex, 1);
};

export const MultiselectInputDropdown: React.FC<IMultiselectInputDropdown> = () => {
  const [opened, setOpened] = React.useState(false);
  const [tags, setTags] = React.useState<Tag[]>([]);

  const ref = React.useRef(null);

  const { width } = useDimensions(ref);

  const toggleDropdown = () => {
    // if (e.currentTarget !== e.target) return;
    setOpened(!opened);
  };

  const removeTag = (id: number) => {
    const newTags = tags;
    removeById(id, newTags);

    setTags(newTags);
  };

  const addTag = () => {
    setTags([{
      id: 1,
      title: "Default 1",
      color: "red",
    }]);

    toggleDropdown();
  }

  return (
    <ClickOutside onClickOutside={() => setOpened(false)}>
      <div>
        <SMultiselectInputDropdown active={opened} ref={ref} onClick={toggleDropdown}>
          <SMultiSelectInputWrapper>
            <SMultiselectInputDropdownTitle>
              {tags.length !== 0 &&
                tags.map((tag: Tag) => (
                  <OutLineLabel
                    key={tag.id}
                    size="medium"
                    colorLabel={<ColorLabel color={tag.color} />}
                    icon={<IconClose />}
                  >
                    {tag.title}
                  </OutLineLabel>
                ))}
              {tags.length === 0 && "Select or create tags"}
            </SMultiselectInputDropdownTitle>
            <SDropdownArrow opened={opened}>
              <IconChevronDown size={24}></IconChevronDown>
            </SDropdownArrow>
          </SMultiSelectInputWrapper>
        </SMultiselectInputDropdown>
        {opened && (
          <Popover disableTriangle placement="bottom" reference={ref}>
            <SMultiselectInputDropdownSelect style={{ width }}>
              <SearchInput placeholder="Search tags" />
              <TagListItem
                onClick={addTag}
                outlineLabel={
                  <OutLineLabel size="medium" colorLabel={<ColorLabel color="red" />}>
                    Default
                  </OutLineLabel>
                }
              />
            </SMultiselectInputDropdownSelect>
          </Popover>
        )}
      </div>
    </ClickOutside>
  );
};
