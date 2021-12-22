import React, { ReactNode } from "react";
import { IconChevronDown } from "../..";
import { ClickOutside, useDimensions } from "../../utils";
import { Popover } from "../popover/Popover";
import { SDropdownArrow } from "./styles/SDropdownArrow";
import { SInputDropdown } from "./styles/SInputDropdown";
import { SInputDropdownLabel } from "./styles/SInputDropdownLabel";
import { SInputDropdownOption } from "./styles/SInputDropdownOption";
import { SInputDropdownTextIconWrapper } from "./styles/SInputDropdownTextIconWrapper";
import { SInputDropdownTextWrapper } from "./styles/SInputDropdownTextWrapper";
import { SInputDropdownTitle } from "./styles/SInputDropdownTitle";
import { SSelect } from "./styles/SSelect";
import { SSelectDropdown } from "./styles/SSelectDropdown";
import { SSelectOption } from "./styles/SSelectOption";

export interface IDataSourceItem {
  title: string;
  label?: string;
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
  required?: boolean;
  error?: boolean;
  onClose?: () => void;
  inputStyle?: React.CSSProperties;
  dropdownStyle?: React.CSSProperties;
  optionsStyle?: React.CSSProperties;
}

export const SelectSingle: React.FC<ISelectSingle> = ({ error, placeholder, dataSource, required, dropdownStyle, renderItem, onSelectValue }) => {
  const [opened, setOpened] = React.useState(false);
  const [selectTitle, setSelectTitle] = React.useState<string | null | undefined>(null);
  const [selectLabel, setSelectLabel] = React.useState<string | null | undefined>(null);
  const [selectIcon, setSelectIcon] = React.useState<ReactNode>(null);
  const ref = React.useRef(null);

  const onChange = (e) => {
    onSelectValue?.(e);
    setSelectTitle(dataSource.find((option) => option.key === e)?.title);
    setSelectLabel(dataSource.find((option) => option.key === e)?.label);
    setSelectIcon(dataSource.find((option) => option.key === e)?.icon);
    setOpened(false);
  };

  const { width } = useDimensions(ref);

  return (
    <ClickOutside onClickOutside={() => setOpened(false)}>
      <div>
        <SInputDropdown onClick={() => setOpened((prev) => !prev)} ref={ref} error={error} opened={opened}>
          <SInputDropdownTextIconWrapper>
            {selectIcon ? selectIcon : ""}
            <SInputDropdownTextWrapper>
              {selectLabel && <SInputDropdownLabel required={required}>{selectLabel ? selectLabel : ""}</SInputDropdownLabel>}
              <SInputDropdownTitle label={selectLabel} required={required}>{selectTitle ? selectTitle : placeholder}</SInputDropdownTitle>
            </SInputDropdownTextWrapper>
          </SInputDropdownTextIconWrapper>
          <SDropdownArrow opened={opened}>
            <IconChevronDown size={24}></IconChevronDown>
          </SDropdownArrow>
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
                          {option.label && <SInputDropdownLabel required={required}>{option.label ? option.label : ""}</SInputDropdownLabel>}
                          <SInputDropdownTitle label={option.label} required={required}>{option.title}</SInputDropdownTitle>
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