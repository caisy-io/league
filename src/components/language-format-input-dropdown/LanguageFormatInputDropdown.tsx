import React, { ReactNode, useMemo } from "react";
import { IconChevronDown, IconRotator, Input, SolidLabel } from "../..";
import { ClickOutside, useDimensions } from "../../utils";
import { Popover } from "../popover";
import { SLanguageFormatDropdownArrowWrapper } from "./styles/SLanguageFormatDropdownArrowWrapper";
import { SLanguageFormatInputDropdown } from "./styles/SLanguageFormatInputDropdown";
import { SLanguageFormatInputDropdownApiName } from "./styles/SLanguageFormatInputDropdownApiName";
import { SLanguageFormatInputDropdownContentFlag } from "./styles/SLanguageFormatInputDropdownContentFlag";
import { SLanguageFormatInputDropdownLabel } from "./styles/SLanguageFormatInputDropdownLabel";
import { SLanguageFormatInputDropdownOption } from "./styles/SLanguageFormatInputDropdownOption";
import { SLanguageFormatInputDropdownContent } from "./styles/SLanguageFormatInputDropdownContent";
import { SLanguageFormatInputDropdownOptionTitle } from "./styles/SLanguageFormatInputDropdownOptionTitle";
import { SLanguageFormatInputDropdownTextWrapper } from "./styles/SLanguageFormatInputDropdownTextWrapper";
import { SLanguageFormatSelectDropdown } from "./styles/SLanguageFormatSelectDropdown";
import { SLanguageFormatSelectDropdownCont } from "./styles/SLanguageFormatSelectDropdownCont";
import fuzzysearch from "fuzzysearch";

export interface IDataSourceLanguageItem {
  title: string;
  key: string;
  flag?: ReactNode;
  solidLabelText?: string;
}

export interface ILanguageFormatInputDropdown {
  dataSource: IDataSourceLanguageItem[];
  onSelectValue?: (e: string) => void;
  initialValueKey?: string;
  placeholder?: string;
  label?: ReactNode | string;
  required?: boolean;
  error?: boolean;
  styleOverwrite?: string;
  disabled?: boolean;
  renderItem?: (option: any) => ReactNode;
}

export const LanguageFormatInputDropdown: React.FC<ILanguageFormatInputDropdown> = ({
  error,
  placeholder,
  dataSource,
  required,
  onSelectValue,
  label,
  styleOverwrite,
  initialValueKey,
  disabled,
  renderItem,
}) => {
  const [opened, setOpened] = React.useState(false);
  const selectedOptionKey = React.useRef(initialValueKey || "");

  const ref = React.useRef(null);
  const [rotationDegrees, setRotationDegrees] = React.useState(0);
  const [dropdownDataSource, setDropdownDataSource] = React.useState(dataSource);

  const options = useMemo(() => {
    return dataSource.reduce((acc, option) => {
      acc[option.key] = option;
      return acc;
    }, {});
  }, [dataSource]);

  const [inputValue, setInputValue] = React.useState(initialValueKey ? options[initialValueKey]?.title : "");

  const onSelect = (key) => {
    onSelectValue?.(key);
    selectedOptionKey.current = key;
    setInputValue(options[key]?.title);
    setOpened(false);
    setRotationDegrees(0);
  };

  const onChange = (e) => {
    const value = e.target.value;
    selectedOptionKey.current = "";
    setDropdownDataSource(
      dataSource.filter(
        (el) =>
          fuzzysearch(value.toLowerCase(), el.title.toLowerCase()) ||
          fuzzysearch(value.toLowerCase(), el.solidLabelText?.toLowerCase()),
      ),
    );
    setInputValue(value);
    setOpened(true);
  };

  const handleDropdown = () => {
    setOpened((prev) => !prev);
  };

  React.useEffect(() => {
    if (opened) {
      setRotationDegrees(-180);
    } else {
      setRotationDegrees(0);
    }
  }, [opened]);

  const { width } = useDimensions(ref);

  React.useEffect(() => {
    selectedOptionKey.current = initialValueKey || "";
    setInputValue(initialValueKey ? options[initialValueKey]?.title : "");
  }, [initialValueKey]);

  return (
    <ClickOutside
      onClickOutside={() => {
        setOpened(false);
      }}
    >
      <div>
        <SLanguageFormatInputDropdown
          onClick={(e) => {
            e.stopPropagation();
            handleDropdown();
          }}
          ref={ref}
          error={error}
          opened={opened}
          styleOverwrite={styleOverwrite}
          disabled={disabled}
        >
          <SLanguageFormatInputDropdownContent>
            <SLanguageFormatInputDropdownContentFlag>
              {options[selectedOptionKey.current]?.flag || ""}
            </SLanguageFormatInputDropdownContentFlag>
            <SLanguageFormatInputDropdownTextWrapper>
              {label && (
                <SLanguageFormatInputDropdownLabel
                  error={error}
                  selected={selectedOptionKey}
                  required={required}
                  opened={opened}
                >
                  {label}
                </SLanguageFormatInputDropdownLabel>
              )}
              <Input
                value={inputValue}
                onFocus={() => setOpened(true)}
                onBlur={() => {
                  selectedOptionKey.current;
                }}
                onChange={onChange}
                placeholder={placeholder}
              />
            </SLanguageFormatInputDropdownTextWrapper>
            {options[selectedOptionKey.current]?.solidLabelText && (
              <SLanguageFormatInputDropdownApiName>
                <SolidLabel type="grey">{options[selectedOptionKey.current]?.solidLabelText}</SolidLabel>
              </SLanguageFormatInputDropdownApiName>
            )}
          </SLanguageFormatInputDropdownContent>
          {!disabled && (
            <SLanguageFormatDropdownArrowWrapper opened={opened}>
              <IconRotator rotationDegrees={rotationDegrees}>
                <IconChevronDown size={24} />
              </IconRotator>
            </SLanguageFormatDropdownArrowWrapper>
          )}
        </SLanguageFormatInputDropdown>
        {opened && !disabled && (
          <Popover disableTriangle placement="bottom" reference={ref}>
            <SLanguageFormatSelectDropdown style={{ width }}>
              <SLanguageFormatSelectDropdownCont>
                {dropdownDataSource.map((option) => (
                  <SLanguageFormatInputDropdownOption
                    key={option.key}
                    onClick={() => onSelect(option.key)}
                    active={option.key === selectedOptionKey.current}
                  >
                    {renderItem ? (
                      renderItem(option)
                    ) : (
                      <>
                        {option.flag && (
                          <SLanguageFormatInputDropdownContentFlag>
                            {option.flag}
                          </SLanguageFormatInputDropdownContentFlag>
                        )}
                        <SLanguageFormatInputDropdownOptionTitle
                          selectTitle={options[selectedOptionKey.current]?.title}
                        >
                          {option.title}
                        </SLanguageFormatInputDropdownOptionTitle>
                      </>
                    )}
                  </SLanguageFormatInputDropdownOption>
                ))}
              </SLanguageFormatSelectDropdownCont>
            </SLanguageFormatSelectDropdown>
          </Popover>
        )}
      </div>
    </ClickOutside>
  );
};
