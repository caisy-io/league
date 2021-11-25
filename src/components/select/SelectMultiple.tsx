import React from "react";
import { IconClose } from "../../icons";
import { ClickOutside, useDimensions } from "../../utils";
import { Popover } from "../popover/Popover";
import { SSelect } from "./styles/SSelect";
import { SSelectDropdown } from "./styles/SSelectDropdown";
import { SSelectMultiple } from "./styles/SSelectMultiple";
import { SSelectOption } from "./styles/SSelectOption";

export interface ISelectMultipleDataSourceItem {
  label: string;
  key: string;
  data?: any;
}

interface ISelectMultiple {
  dataSource: ISelectMultipleDataSourceItem[];
  renderItem?: (option: ISelectMultipleDataSourceItem) => React.ReactNode;
  onChange?: (e: string[]) => void;
  value?: string[];
  defaultValue?: string[];
  placeholder?: string;
  onClose?: () => void;
  inputStyle?: React.CSSProperties;
  dropdownStyle?: React.CSSProperties;
  optionsStyle?: React.CSSProperties;
}

export const SelectMultiple: React.FC<ISelectMultiple> = ({ ...props }) => {
  const [opened, setOpened] = React.useState(false);
  const [selectValue, setSelectValue] = React.useState<string[]>([]);
  const ref = React.useRef(null);

  React.useEffect(() => {
    setSelectValue(props.value ? props.value.map((item) => item) : []);
  }, [props.value]);

  const onAddOption = (e) => {
    if (!selectValue.includes(e)) {
      const newValue = selectValue.slice();
      newValue.push(e);
      props.onChange?.(newValue);
      setSelectValue(newValue);
    }
  };

  const onRemoveOption = (e) => {
    const newValue = selectValue.filter((option) => option !== e);
    props.onChange?.(newValue);
    setSelectValue(newValue);
  };

  const { width } = useDimensions(ref);

  return (
    <ClickOutside onClickOutside={() => setOpened(false)}>
      <div>
        <SSelect
          multiple={selectValue && selectValue.length > 0}
          style={props.inputStyle}
          onClick={() => setOpened((prev) => !prev)}
          ref={ref}
        >
          {selectValue && selectValue.length > 0
            ? selectValue.map((option) => (
                <SSelectMultiple key={option}>
                  {props.dataSource.find((item) => item.key === option)?.label}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveOption(option);
                    }}
                  >
                    <IconClose />
                  </div>
                </SSelectMultiple>
              ))
            : props.placeholder}
        </SSelect>
        {opened && (
          <Popover disableTriangle placement="bottom" reference={ref}>
            <SSelectDropdown style={{ width, ...props.dropdownStyle }}>
              {props.dataSource.map((option) => (
                <div key={option.key} onClick={() => onAddOption(option.key)}>
                  {props.renderItem ? (
                    props.renderItem(option)
                  ) : (
                    <SSelectOption selected={selectValue.includes(option.key)} style={props.optionsStyle}>
                      {option.label}
                    </SSelectOption>
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
