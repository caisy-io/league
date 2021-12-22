import React from "react";
import { ClickOutside, useDimensions } from "../../utils";
import { Popover } from "../popover/Popover";
import { SSelect } from "./styles/SSelect";
import { SSelectDropdown } from "./styles/SSelectDropdown";
import { SSelectOption } from "./styles/SSelectOption";

export interface IDataSourceItem {
  title: string;
  label?: string;
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
  const [selectTitle, setSelectTitle] = React.useState<string | null | undefined>(null);
  const [selectLabel, setSelectLabel] = React.useState<string | null | undefined>(null);
  const ref = React.useRef(null);

  const onChange = (e) => {
    props.onChange?.(e);
    setSelectTitle(props.dataSource.find((option) => option.key === e)?.title);
    setSelectLabel(props.dataSource.find((option) => option.key === e)?.label);
    setOpened(false);
  };

  const { width } = useDimensions(ref);

  return (
    <ClickOutside onClickOutside={() => setOpened(false)}>
      <div>
        <SSelect style={props.inputStyle} onClick={() => setOpened((prev) => !prev)} ref={ref}>
          {selectTitle ? selectTitle : props.placeholder}
          {selectLabel ? selectLabel : ""}
        </SSelect>
        {opened && (
          <Popover disableTriangle placement="bottom" reference={ref}>
            <SSelectDropdown style={{ width, ...props.dropdownStyle }}>
              {props.dataSource.map((option) => (
                <div key={option.key} onClick={() => onChange(option.key)}>
                  {props.renderItem ? (
                    props.renderItem(option)
                  ) : (
                    <SSelectOption style={props.optionsStyle}>{option.label}{option.title}</SSelectOption>
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
