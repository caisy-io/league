import React from "react";
import { Dropdown } from "../dropdown/Dropdown";
import { Input, Popover } from "../..";
import { SDropdownSearch } from "./styles/SDropdownSearch";
import { SDropdownSearchList } from "./styles/SDropdownSearchList";
import fuzzysearch from "fuzzysearch";
import { IconSearch } from "../../icons/IconSearch";

interface IDropdownSearch {
  active: boolean;
  items: any[];
  setItems: any;
  dropdownPosition: "left" | "right" | "center";
  onClose: () => void;
  onSelect: (payload: string) => void;
}

export const DropdownSearch = React.forwardRef(({ ...props }: IDropdownSearch, ref) => {
  const [inputValue, setInputValue] = React.useState<string>("");

  const onSelect = (e) => {
    props.onSelect(e);
    props.onClose();
  };

  const onChange = (e) => {
    const newItems = props.items.map((i) => {
      let visibleCategory = false;
      const items = i.items.map((j) => {
        const visible = fuzzysearch(e.target.value.toLowerCase(), j.label.toLowerCase());
        if (visible) {
          visibleCategory = true;
        }

        return {
          ...j,
          visible,
        };
      });

      return {
        ...i,
        items,
        visible: visibleCategory,
      };
    });

    newItems[0].items[0] = { ...newItems[0].items[0], visible: true, label: e.target.value };
    newItems[0].visible = true;
    props.setItems(newItems);
    setInputValue(e.target.value);
  };

  const reference = React.useRef(null);

  return (
    <SDropdownSearch ref={reference}>
      {props.active && (
        <Popover disableTriangle reference={reference} placement="bottom">
          <SDropdownSearchList ref={ref} dropdownPosition={props.dropdownPosition}>
            <Input
              // onClose={props.onClose}
              hasCloseButton
              icon={IconSearch}
              value={inputValue}
              onChange={(e) => onChange(e)}
            />
            <Dropdown dropDownPosition={0} categories={props.items} active onSelect={(e) => onSelect(e)} />
          </SDropdownSearchList>
        </Popover>
      )}
    </SDropdownSearch>
  );
});
