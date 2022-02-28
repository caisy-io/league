import React, { ReactNode } from "react";
import { IconChevronDown, IconRotator } from "../..";
import { SFlex } from "../../base-components/flex/styles/SFlex";
import { useDimensions } from "../../utils";
import { Popover } from "../popover/Popover";
import { SDropdownArrowWrapper } from "./styles/SDropdownArrowWrapper";
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
  onClick?: () => void;
  inputStyle?: React.CSSProperties;
  dropdownStyle?: React.CSSProperties;
  optionsStyle?: React.CSSProperties;
  styleOverwrite?: string;
  opened?: boolean;
}

export const SimpleInputDropdown: React.FC<ISelectSingle> = ({ error, placeholder, dataSource, required, dropdownStyle, renderItem, onClick, onSelectValue, translationBadge, label, styleOverwrite, opened }) => {
  const [selectTitle, setSelectTitle] = React.useState<string | null | undefined>(null);
  const [selectIcon, setSelectIcon] = React.useState<ReactNode>(null);
  const ref = React.useRef(null);

  const onChange = (e) => {
    onSelectValue?.(e);
    setSelectTitle(dataSource.find((option) => option.key === e)?.title);
    setSelectIcon(dataSource.find((option) => option.key === e)?.icon);
    if (opened == true) {
      setRotationDegrees(0)
    } else {
      setRotationDegrees(-180)
    }
  };

  const [rotationDegrees, setRotationDegrees] = React.useState(0);

  const handleDropdown = () => {
    onClick && onClick()
    if (opened == true) {
      setRotationDegrees(0)
    } else {
      setRotationDegrees(-180)
    }
  }

  const { width } = useDimensions(ref);

  return (
    <div>
      <SInputDropdown onClick={handleDropdown} ref={ref} error={error} opened={opened} selectTitle={selectTitle} styleOverwrite={styleOverwrite}>
        <SInputDropdownTextIconWrapper>
          {selectIcon ? selectIcon : ""}
          <SInputDropdownTextWrapper>
            {label && <SInputDropdownLabel error={error} required={required} opened={opened}>{label ? label : ""}</SInputDropdownLabel>}
            {translationBadge &&
              <SFlex>
                <SInputDropdownTitle selectTitle={selectTitle} label={label} required={required}>{selectTitle ? selectTitle : placeholder}</SInputDropdownTitle>
                <SDropdownArrowWrapper opened={opened}>                  <IconRotator rotationDegrees={rotationDegrees}>  <IconChevronDown size={24}></IconChevronDown></IconRotator>
                </SDropdownArrowWrapper>
              </SFlex>}
            {!translationBadge && <SInputDropdownTitle selectTitle={selectTitle} label={label} required={required}>{selectTitle ? selectTitle : placeholder}</SInputDropdownTitle>
            }
          </SInputDropdownTextWrapper>
        </SInputDropdownTextIconWrapper>
        {!translationBadge && <SDropdownArrowWrapper opened={opened}> <IconRotator rotationDegrees={rotationDegrees}>  <IconChevronDown size={24}></IconChevronDown></IconRotator> </SDropdownArrowWrapper>
        }
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
  );
};
