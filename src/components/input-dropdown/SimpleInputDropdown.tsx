import React, { ReactNode } from "react";
import { IconChevronDown } from "../..";
import { SFlex } from "../../base-components/flex/styles/SFlex";
import { ClickOutside, useDimensions } from "../../utils";
import { Popover } from "../popover/Popover";
import { SDropdownArrow } from "./styles/SDropdownArrow";
import { SInputDropdown } from "./styles/SInputDropdown";
import { SInputDropdownLabel } from "./styles/SInputDropdownLabel";
import { SInputDropdownOption } from "./styles/SInputDropdownOption";
import { SInputDropdownTextIconWrapper } from "./styles/SInputDropdownTextIconWrapper";
import { SInputDropdownTextWrapper } from "./styles/SInputDropdownTextWrapper";
import { SInputDropdownTitle } from "./styles/SInputDropdownTitle";
import { SSelectDropdown } from "./styles/SSelectDropdown";
import { TranslationBadge } from "./TranslationBadge";

export interface IDataSourceItem {
  title: string;
  key: string;
  data?: any;
  icon?: ReactNode;
}

interface ISelectSingle {
  dataSource: IDataSourceItem[];
  renderItem?: (data: any) => React.ReactNode;
  onSelectValue?: (e: string) => void;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  error?: boolean;
  translationBadge?: boolean;
  onClose?: () => void;
  inputStyle?: React.CSSProperties;
  dropdownStyle?: React.CSSProperties;
  optionsStyle?: React.CSSProperties;
}

export const SimpleInputDropdown: React.FC<ISelectSingle> = ({ error, placeholder, dataSource, required, dropdownStyle, renderItem, onSelectValue, translationBadge, label }) => {
  const [opened, setOpened] = React.useState(false);
  const [selectTitle, setSelectTitle] = React.useState<string | null | undefined>(null);
  const [selectIcon, setSelectIcon] = React.useState<ReactNode>(null);
  const ref = React.useRef(null);

  const onChange = (e) => {
    onSelectValue?.(e);
    setSelectTitle(dataSource.find((option) => option.key === e)?.title);
    setSelectIcon(dataSource.find((option) => option.key === e)?.icon);
    setOpened(false);
  };

  const { width } = useDimensions(ref);

  return (
    <ClickOutside onClickOutside={() => setOpened(false)}>
      <div>
        <SInputDropdown onClick={() => setOpened((prev) => !prev)} ref={ref} error={error} opened={opened} selectTitle={selectTitle}>
          <SInputDropdownTextIconWrapper>
            {selectIcon ? selectIcon : ""}
            <SInputDropdownTextWrapper>
              {label && <SInputDropdownLabel error={error} required={required} opened={opened}>{label ? label : ""}</SInputDropdownLabel>}
              {translationBadge &&
                <SFlex>
                  <SInputDropdownTitle selectTitle={selectTitle} label={label} required={required}>{selectTitle ? selectTitle : placeholder}</SInputDropdownTitle>
                  <SDropdownArrow opened={opened} translationBadge={translationBadge} error={error}>
                    <IconChevronDown size={24}></IconChevronDown>
                  </SDropdownArrow>
                </SFlex>}
              {!translationBadge && <SInputDropdownTitle selectTitle={selectTitle} label={label} required={required}>{selectTitle ? selectTitle : placeholder}</SInputDropdownTitle>
              }
            </SInputDropdownTextWrapper>
          </SInputDropdownTextIconWrapper>
          {!translationBadge && <SDropdownArrow opened={opened}>
            <IconChevronDown size={24}></IconChevronDown>
          </SDropdownArrow>}
          {translationBadge && <TranslationBadge countryCode="de"></TranslationBadge>}
        </SInputDropdown>
        {opened && (
          <Popover disableTriangle placement="bottom" reference={ref}>
            <SSelectDropdown style={{ width, dropdownStyle }}>
              {dataSource.map((option) => (
                <div key={option.key} onClick={() => onChange(option.key)}>
                  {renderItem ? (
                    renderItem(option)
                  ) : (
                    <SInputDropdownOption>
                      <SInputDropdownTextIconWrapper>
                        {option.icon ? option.icon : ""}
                        <SInputDropdownTextWrapper>
                          <SInputDropdownTitle selectTitle={selectTitle} required={required}>{option.title}</SInputDropdownTitle>
                        </SInputDropdownTextWrapper>
                      </SInputDropdownTextIconWrapper>
                    </SInputDropdownOption>
                  )}
                </div>
              ))}
            </SSelectDropdown>
          </Popover>
        )}
      </div>
    </ClickOutside>
  );
};
