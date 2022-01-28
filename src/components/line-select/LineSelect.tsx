import React from "react";
import { IconChevronDown } from "../..";
import { ClickOutside, useDimensions } from "../../utils";
import { Popover } from "../popover/Popover";
import { SDropdownArrow } from "./styles/SDropdownArrow";
import { SFlexWrapper } from "./styles/SFlexWrapper";
import { SInputDropdown } from "./styles/SInputDropdown";
import { SInputDropdownOption } from "./styles/SInputDropdownOption";
import { SLineSelectLabel } from "./styles/SLineSelectLabel";
import { SSelectDropdown } from "./styles/SSelectDropdown";

interface ILineSelect {
  renderItem?: (data: any) => React.ReactNode;
  onSelectValue?: (e: string) => void;
  value?: string;
  defaultValue?: string;
  label?: string;
  required?: boolean;
  error?: boolean;
  onClose?: () => void;
  inputStyle?: React.CSSProperties;
  dropdownStyle?: React.CSSProperties;
  optionsStyle?: React.CSSProperties;
  children?;
  state: "default" | "success" | "error";
}

export const LineSelect: React.FC<ILineSelect> = ({ error, onSelectValue, children, label }) => {
  const [opened, setOpened] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<string | null | undefined>(children[0]);
  const ref = React.useRef(null);

  const onChange = (e) => {
    onSelectValue?.(e);
    setSelectedItem(children[e]);
    setOpened(false);
  };

  const { width } = useDimensions(ref);

  return (
    <ClickOutside onClickOutside={() => setOpened(false)}>
      <div>
        <SInputDropdown onClick={() => setOpened((prev) => !prev)} ref={ref} error={error} opened={opened} >

          {selectedItem}
          <SDropdownArrow opened={opened}>
            <IconChevronDown size={24}></IconChevronDown>
          </SDropdownArrow>
        </SInputDropdown>
        {opened && (
          <Popover disableTriangle placement="bottom" reference={ref}>
            <SSelectDropdown style={{ width }}>
              {React.Children.map(children, (child: any, index: number) => {
                return <SInputDropdownOption key={index} onClick={() => onChange(index)}>
                  {child}
                </SInputDropdownOption>
              })}
            </SSelectDropdown>
          </Popover>
        )}
      </div>
    </ClickOutside>
  );
};
