import React, { ReactNode, useEffect, useState } from "react";
import { IconChevronDown, IconRotator } from "../..";
import { SFlex } from "../../base-components/flex/styles/SFlex";
import { useDimensions } from "../../utils";
import { Popover } from "../popover";
import { TPlacement } from "../tooltip/utils/placement";
import { SDropdownArrowWrapper } from "./styles/SDropdownArrowWrapper";
import { SInputDropdown } from "./styles/SInputDropdown";
import { SInputDropdownLabel } from "./styles/SInputDropdownLabel";
import { SInputDropdownOption } from "./styles/SInputDropdownOption";
import { SInputDropdownTextIconWrapper } from "./styles/SInputDropdownTextIconWrapper";
import { SInputDropdownTextWrapper } from "./styles/SInputDropdownTextWrapper";
import { SInputDropdownTitle } from "./styles/SInputDropdownTitle";
import { SSelectDropdown } from "./styles/SSelectDropdown";
import { TranslationBadge } from "./TranslationBadge";
import { SearchInput } from "../..";
import fuzzysearch from "fuzzysearch";
import { SSelectDropdownList } from "./styles/SSelectDropdownList";

export interface IDataSourceItem {
  title: string | ReactNode;
  key: string;
  data?: any;
  icon?: ReactNode;
}

interface ISelectSingle {
  dataSource: IDataSourceItem[];
  renderItem?: (data: any) => React.ReactNode;
  onSelectValue?: (e: string) => void;
  value?: IDataSourceItem;
  defaultValue?: IDataSourceItem;
  placeholder?: string;
  label?: string | ReactNode;
  required?: boolean;
  error?: boolean;
  translationBadge?: boolean;
  onClose?: () => void;
  onClick?: () => void;
  inputStyle?: React.CSSProperties;
  dropdownStyle?: React.CSSProperties;
  optionsStyle?: React.CSSProperties;
  styleOverwrite?: string;
  opened?: boolean;
  placement?: TPlacement;
  withSearch?: boolean;
  searchPlaceholder?: string;
}

export const SimpleInputDropdown: React.FC<ISelectSingle> = ({
  error,
  placeholder,
  dataSource,
  required,
  dropdownStyle,
  renderItem,
  onClick,
  onSelectValue,
  translationBadge,
  label,
  styleOverwrite,
  opened,
  defaultValue,
  placement = "bottom",
  withSearch,
  searchPlaceholder,
}) => {
  const [selectedItem, setSelectedItem] = useState<IDataSourceItem | null | undefined>();
  const [initialized, setInitialized] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const ref = React.useRef(null);

  const onChange = (e) => {
    onSelectValue?.(e);
    setSelectedItem(dataSource.find((option) => option.key === e));
    if (opened == true) {
      setRotationDegrees(0);
    } else {
      setRotationDegrees(-180);
    }
  };

  useEffect(() => {
    if (!defaultValue || initialized) return;
    setSelectedItem(defaultValue);
    setInitialized(true);
  }, [defaultValue]);

  const [rotationDegrees, setRotationDegrees] = React.useState(0);

  const handleDropdown = () => {
    onClick && onClick();
    if (opened == true) {
      setRotationDegrees(0);
    } else {
      setRotationDegrees(-180);
    }
  };

  const { width } = useDimensions(ref);

  return (
    <div>
      <SInputDropdown
        onClick={handleDropdown}
        ref={ref}
        error={error}
        opened={opened}
        selectTitle={selectedItem?.title}
        styleOverwrite={styleOverwrite}
      >
        <SInputDropdownTextIconWrapper>
          {selectedItem?.icon ? selectedItem.icon : ""}
          <SInputDropdownTextWrapper>
            {label && (
              <SInputDropdownLabel error={error} required={required} opened={opened}>
                {label ? label : ""}
              </SInputDropdownLabel>
            )}
            {translationBadge && (
              <SFlex>
                <SInputDropdownTitle selected={!!selectedItem} label={label} required={required}>
                  {selectedItem?.title ? selectedItem.title : placeholder}
                </SInputDropdownTitle>
                <SDropdownArrowWrapper opened={opened}>
                  {" "}
                  <IconRotator rotationDegrees={rotationDegrees}>
                    {" "}
                    <IconChevronDown size={24} />
                  </IconRotator>
                </SDropdownArrowWrapper>
              </SFlex>
            )}
            {!translationBadge && (
              <SInputDropdownTitle selected={!!selectedItem} label={label} required={required}>
                {selectedItem?.title ? selectedItem.title : placeholder}
              </SInputDropdownTitle>
            )}
          </SInputDropdownTextWrapper>
        </SInputDropdownTextIconWrapper>
        {!translationBadge && (
          <SDropdownArrowWrapper opened={opened}>
            {" "}
            <IconRotator rotationDegrees={rotationDegrees}>
              {" "}
              <IconChevronDown size={24} />
            </IconRotator>{" "}
          </SDropdownArrowWrapper>
        )}
        {translationBadge && <TranslationBadge countryCode="de" />}
      </SInputDropdown>
      <Popover display={opened} disableTriangle placement={placement} reference={ref}>
        <SSelectDropdown style={{ width, dropdownStyle }}>
          {withSearch && (
            <SearchInput
              placeholder={searchPlaceholder}
              onClose={() => setSearchValue("")}
              autoFocus
              onChange={(e) => setSearchValue(e.target.value)}
            />
          )}
          <SSelectDropdownList>
            {dataSource
              .filter((item) => fuzzysearch(searchValue.toLowerCase(), `${item.title}`.toLowerCase()))
              .map((option) => (
                <div key={option.key} onClick={() => onChange(option.key)}>
                  {renderItem ? (
                    renderItem(option)
                  ) : (
                    <SInputDropdownOption>
                      <SInputDropdownTextIconWrapper>
                        {option.icon ? option.icon : ""}
                        <SInputDropdownTextWrapper>
                          <SInputDropdownTitle selectTitle={selectedItem?.title}>{option.title}</SInputDropdownTitle>
                        </SInputDropdownTextWrapper>
                      </SInputDropdownTextIconWrapper>
                    </SInputDropdownOption>
                  )}
                </div>
              ))}
          </SSelectDropdownList>
        </SSelectDropdown>
      </Popover>
    </div>
  );
};
