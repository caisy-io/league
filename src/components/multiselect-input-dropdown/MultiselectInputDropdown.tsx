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

type TDataSourceItem = {
  id: number;
  label: string;
  color: string;
};

interface IMultiselectInputDropdown {
  value?: TDataSourceItem[];
  placeholder?: string;
  dataSource: TDataSourceItem[];
  onSelectValue?: (option: TDataSourceItem) => void;
  renderDataItem?: (option: TDataSourceItem) => React.ReactNode;
  renderInputItem?: (option: TDataSourceItem) => React.ReactNode;
  onSearch?: (e: Event) => void;
}

export const MultiselectInputDropdown: React.FC<IMultiselectInputDropdown> = ({
  value,
  placeholder,
  dataSource,
  renderDataItem,
  renderInputItem,
  onSelectValue,
  onSearch,
}) => {
  const [opened, setOpened] = React.useState(false);
  const [selectedValues, setSelectedValues] = React.useState<TDataSourceItem[] | undefined>(value || undefined);

  const ref = React.useRef(null);

  const { width } = useDimensions(ref);

  const toggleDropdown = () => {
    setOpened(!opened);
  };

  const onChange = (option: TDataSourceItem) => {
    onSelectValue?.(option);
    setSelectedValues([option]);
    setOpened(false);
  };

  return (
    <ClickOutside onClickOutside={() => setOpened(false)}>
      <div>
        <SMultiselectInputDropdown active={opened} ref={ref} onClick={toggleDropdown}>
          <SMultiSelectInputWrapper>
            <SMultiselectInputDropdownTitle>
              {selectedValues &&
                selectedValues.length !== 0 &&
                selectedValues.map((item: TDataSourceItem) =>
                  renderInputItem ? (
                    <div key={item.id}>{renderInputItem(item)}</div>
                  ) : (
                    <OutLineLabel
                      key={item.id}
                      size="medium"
                      colorLabel={<ColorLabel color={item.color} />}
                      icon={<IconClose />}
                    >
                      {item.label}
                    </OutLineLabel>
                  ),
                )}
              {!selectedValues && placeholder}
            </SMultiselectInputDropdownTitle>
            <SDropdownArrow opened={opened}>
              <IconChevronDown size={24}></IconChevronDown>
            </SDropdownArrow>
          </SMultiSelectInputWrapper>
        </SMultiselectInputDropdown>
        {opened && (
          <Popover disableTriangle placement="bottom" reference={ref}>
            <SMultiselectInputDropdownSelect style={{ width }}>
              <SearchInput placeholder="Search tags" onChange={onSearch} />
              {dataSource.map((option) =>
                renderDataItem ? (
                  <div key={option.id} onClick={() => onChange(option)}>
                    {renderDataItem(option)}
                  </div>
                ) : (
                  <TagListItem
                    key={option.id}
                    onClick={() => onChange(option)}
                    outlineLabel={
                      <OutLineLabel size="medium" colorLabel={<ColorLabel color={option.color} />}>
                        {option.label}
                      </OutLineLabel>
                    }
                  />
                ),
              )}
            </SMultiselectInputDropdownSelect>
          </Popover>
        )}
      </div>
    </ClickOutside>
  );
};
