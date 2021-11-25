import React from "react";
import { IconAngleDown, IconClose } from "../../icons";
import { Dropdown } from "../dropdown/Dropdown";
import { Input } from "../input/Input";
import { SSelectSearch } from "./styles/SSelectSearch";
import { SSelectSearchMultipleValue } from "./styles/SSelectSearchMultipleValue";
import { getSearchedItems } from "./getSearchedItems";
import { ClickOutside, useDimensions } from "../../utils";

interface IDropdownSearch {
  dataSource: any[];
  setDataSource: (items: any) => void;
  dropdownPosition?: "left" | "right" | "center";
  onChange?: (e: string[]) => void;
  placeholder?: string;
  value?: string[];
  defaultValue?: string[];
  style?: any;
}
// @Nicolas why we have a forwardRef here if we do not use it?
export const SelectMultipleSearch: React.FC<IDropdownSearch> = React.forwardRef(
  ({ ...props }: IDropdownSearch, _) => {
    const [inputValue, setInputValue] = React.useState<string>("");
    const [multipleValue, setMultipleValue] = React.useState<string[]>(
      props.value || props.defaultValue ? ((props.value || props.defaultValue) as string[]) : [],
    );
    const [active, setActive] = React.useState(false);
    const innerRef = React.useRef<HTMLDivElement>(null);

    const onSelect = (e: any) => {
      if (!multipleValue.includes(e)) {
        const newInputValue = multipleValue.slice();
        newInputValue.push(e as any);
        setMultipleValue(newInputValue);
        props.onChange?.(newInputValue);
      }
    };

    const onRemoveValue = (value) => {
      const valueIndex = multipleValue.indexOf(value);
      const newMultipleValue = multipleValue.slice();
      newMultipleValue.splice(valueIndex, 1);
      setMultipleValue(newMultipleValue);
    };

    const onChange = (e) => {
      props.setDataSource(getSearchedItems(e, props.dataSource));
      setInputValue(e.target.value);
    };

    const { width } = useDimensions(innerRef);

    return (
      <ClickOutside onClickOutside={() => setActive(false)}>
        <div style={props.style}>
          <SSelectSearch ref={innerRef}>
            {multipleValue.map((v) => (
              <SSelectSearchMultipleValue key={v}>
                {
                  props.dataSource
                    .map((item) => item.items)
                    .flat()
                    .find((item) => item.key === v)?.label
                }
                <div onClick={() => onRemoveValue(v)}>
                  <IconClose />
                </div>
              </SSelectSearchMultipleValue>
            ))}
            <Input
              // onClose={props.onClose}
              // hasCloseButton={active}
              value={inputValue}
              onFocus={() => setActive(true)}
              // onBlur={() => setActive(false)}
              // onClick={() => setActive(true)}
              onChange={onChange}
              placeholder={props.placeholder}
              wrapperStyle={{ flexGrow: 1, maxWidth: "85%" }}
            />
            <IconAngleDown
              style={{
                transform: `rotate(${active ? "-180deg" : "0deg"})`,
                transition: "transform 400ms",
                width: "calc(15% - 6px)",
              }}
            />
          </SSelectSearch>
          {active && (
            <Dropdown
              selected={(value) => multipleValue.indexOf(value) !== -1}
              dropdownWidth={width}
              categories={props.dataSource}
              active
              onSelect={onSelect}
            />
          )}
        </div>
      </ClickOutside>
    );
  },
);
