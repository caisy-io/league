import React, { ReactNode, useMemo } from "react";
import { IconChevronDown, IconRotator, SolidLabel } from "../..";
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
import { SLanguageFormatInputDropdownTitle } from "./styles/SLanguageFormatInputDropdownTitle";
import { SLanguageFormatSelectDropdown } from "./styles/SLanguageFormatSelectDropdown";
import { SLanguageFormatSelectDropdownCont } from "./styles/SLanguageFormatSelectDropdownCont";

export interface IDataSourceLanguageItem {
  title: string;
  key: string;
  data?: any;
  flag?: ReactNode;
  solidLabelText?: string;
}

export interface ILanguageFormatInputDropdown {
  dataSource: IDataSourceLanguageItem[];
  onSelectValue?: (e: string) => void;
  initialValueKey?: string;
  placeholder?: ReactNode | string;
  label?: ReactNode | string;
  required?: boolean;
  error?: boolean;
  styleOverwrite?: string;
  disabled?: boolean;
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
}) => {
  const [opened, setOpened] = React.useState(false);
  const [selectedOptionKey, setSelectedOptionKey] = React.useState(initialValueKey || "");
  const ref = React.useRef(null);
  const [rotationDegrees, setRotationDegrees] = React.useState(0);

  const options = useMemo(() => {
    return dataSource.reduce((acc, option) => {
      acc[option.key] = option;
      return acc;
    }, {});
  }, [dataSource]);

  const onChange = (key) => {
    onSelectValue?.(key);
    setSelectedOptionKey(key);
    setOpened(false);
    setRotationDegrees(0);
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
    setSelectedOptionKey(initialValueKey || "");
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
              {options[selectedOptionKey]?.flag || ""}
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
              <SLanguageFormatInputDropdownTitle
                label={label}
                required={required}
                opened={opened}
                selected={selectedOptionKey}
              >
                {options[selectedOptionKey]?.title || placeholder}
              </SLanguageFormatInputDropdownTitle>
            </SLanguageFormatInputDropdownTextWrapper>
            {options[selectedOptionKey]?.solidLabelText && (
              <SLanguageFormatInputDropdownApiName>
                <SolidLabel type="grey">{options[selectedOptionKey]?.solidLabelText}</SolidLabel>
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
        {opened && !disabled && dataSource.length && (
          <Popover disableTriangle placement="bottom" reference={ref}>
            <SLanguageFormatSelectDropdown style={{ width }}>
              <SLanguageFormatSelectDropdownCont>
                {dataSource.map((option) => (
                  <SLanguageFormatInputDropdownOption
                    key={option.key}
                    active={option.key === selectedOptionKey}
                    onClick={() => onChange(option.key)}
                  >
                    {option.flag && (
                      <SLanguageFormatInputDropdownContentFlag>{option.flag}</SLanguageFormatInputDropdownContentFlag>
                    )}
                    <SLanguageFormatInputDropdownOptionTitle selectTitle={options[selectedOptionKey]?.title}>
                      {option.title}
                    </SLanguageFormatInputDropdownOptionTitle>
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
