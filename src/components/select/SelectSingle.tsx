import React from "react";
import { ClickOutside, useDimensions } from "webrix/hooks";
import { Popover } from "../popover/Popover";
import { SSelect } from "./styles/SSelect";
import { SSelectDropdown } from "./styles/SSelectDropdown";
import { SSelectOption } from "./styles/SSelectOption";

export interface IDataSourceItem {
  label: string;
  key: string;
  data?: any;
}

interface ISelectSingle {
  dataSource: IDataSourceItem[];
  renderItem?: (data: any) => React.ReactNode;
  onChange?: (e: string) => void;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onClose?: () => void;
  inputStyle?: React.CSSProperties;
  dropdownStyle?: React.CSSProperties;
  optionsStyle?: React.CSSProperties;
}

export const SelectSingle: React.FC<ISelectSingle> = ({ ...props }) => {
  const [opened, setOpened] = React.useState(false);
  const [selectValue, setSelectValue] = React.useState<string | null | undefined>(null);
  const ref = React.useRef(null);

  React.useEffect(() => {
    setSelectValue(
      props.dataSource.find((option) => (option.key === props.value ? props.value : props.defaultValue))?.label,
    );
  }, [props.value]);

  const onChange = (e) => {
    props.onChange?.(e);
    setSelectValue(props.dataSource.find((option) => option.key === e)?.label);
    setOpened(false);
  };

  const { width } = useDimensions(ref);

  return (
    <ClickOutside onClickOutside={() => setOpened(false)}>
      <div>
        <SSelect style={props.inputStyle} onClick={() => setOpened((prev) => !prev)} ref={ref}>
          {selectValue ? selectValue : props.placeholder}
        </SSelect>
        {opened && (
          <Popover disableTriangle placement="bottom" reference={ref}>
            <SSelectDropdown style={{ width, ...props.dropdownStyle }}>
              {props.dataSource.map((option) => (
                <div key={option.key} onClick={() => onChange(option.key)}>
                  {props.renderItem ? (
                    props.renderItem(option)
                  ) : (
                    <SSelectOption style={props.optionsStyle}>{option.label}</SSelectOption>
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
