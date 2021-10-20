import React from "react";
import { IconAngleDown } from "../../icons";
import { Dropdown } from "../dropdown/Dropdown";
import { Input } from "../input/Input";
import { SSelectSearch } from "./styles/SSelectSearch";
import { ClickOutside, useDimensions } from "webrix/hooks";
import { getSearchedItems } from "./getSearchedItems";

interface IDropdownSearch {
  dataSource: any[];
  setDataSource: (items: any) => void;
  dropdownPosition?: "left" | "right" | "center";
  onChange?: (e: string) => void;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  style?: any;
  renderItem?: (option: any) => React.ReactNode;
}

// @Nicolas why we have a forwardRef here if we do not use it?
export const SelectSingleSearch: React.FC<IDropdownSearch> = React.forwardRef(({ ...props }: IDropdownSearch, _) => {
  const [inputValue, setInputValue] = React.useState<string>(
    props.dataSource
      .map((item) => item.items)
      .flat()
      .find((item) => item.key === ((props.value || props.defaultValue) as string))?.label || "",
  );

  const [active, setActive] = React.useState(false);
  const innerRef = React.useRef<HTMLDivElement>(null);

  const onSelect = (e: any) => {
    setInputValue(
      props.dataSource
        .map((item) => item.items)
        .flat()
        .find((item) => item.key === e)?.label,
    );
    props.onChange?.(e as any);
    setActive(false);
  };

  const onChange = (e) => {
    props.setDataSource(getSearchedItems(e, props.dataSource));
    setInputValue(e.target.value);
  };

  const { width } = useDimensions(innerRef);

  return (
    <ClickOutside onClickOutside={() => setActive(false)}>
      <div style={props.style} >
        <SSelectSearch ref={innerRef}>
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
            renderItem={props.renderItem}
            dropdownWidth={width}
            categories={props.dataSource}
            active
            onSelect={onSelect}
          />
        )}
      </div>
    </ClickOutside>
  );
});
