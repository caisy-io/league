import React, { ReactNode } from "react";
import { IconChevronDown } from "../..";
import { ClickOutside, useDimensions } from "../../utils";
import { Popover } from "../popover/Popover";
import { SDropdownArrow } from "./styles/SDropdownArrow";
import { SInputDropdown } from "./styles/SInputDropdown";
import { SInputDropdownOption } from "./styles/SInputDropdownOption";
import { SSelectDropdown } from "./styles/SSelectDropdown";

export interface IDataSourceItem {
  title: string;
  label?: string;
  key: string;
  data?: any;
  icon?: ReactNode;
}

interface ILineSelect {
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
  children?;
}

export const LineSelect: React.FC<ILineSelect> = ({ error, dataSource, dropdownStyle, renderItem, onSelectValue, children }) => {
  const [opened, setOpened] = React.useState(false);
  const [selectTitle, setSelectTitle] = React.useState<string | null | undefined>(null);
  const ref = React.useRef(null);

  const onChange = (e) => {
    onSelectValue?.(e);
    setSelectTitle(dataSource.find((option) => option.key === e)?.title);
    setOpened(false);
  };

  const { width } = useDimensions(ref);

  return (
    <ClickOutside onClickOutside={() => setOpened(false)}>
      <div>
        <SInputDropdown onClick={() => setOpened((prev) => !prev)} ref={ref} error={error} opened={opened} selectTitle={selectTitle}>
          <SDropdownArrow opened={opened}>
            <IconChevronDown size={24}></IconChevronDown>
          </SDropdownArrow>
          
        </SInputDropdown>
        {opened && (
          <Popover disableTriangle placement="bottom" reference={ref}>
            <SSelectDropdown style={{ width}}>
              {children}
            </SSelectDropdown>
          </Popover>
        )}
      </div>
    </ClickOutside>
  );
};
