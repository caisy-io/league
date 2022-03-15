import React from "react";
import { IconChevronDown, IconClose } from "../../icons";
import { ClickOutside } from "../../utils";
import { OutLineLabel } from "../out-line-label";
import ColorLabel from "../out-line-label/ColorLabel";

import { Popover } from "../popover";
import { TagListItem } from "../tag-list-item";

import { SDropdownArrow } from "./styles/SDropdownArrow";
import { SMultiselectInputDropdown } from "./styles/SMultiselectInputDropdown";
import { SMultiselectInputDropdownLabel } from "./styles/SMultiselectInputDropdownLabel";
import { SMultiselectInputDropdownSelect } from "./styles/SMultiselectInputDropdownSelect";
import { SMultiselectInputDropdownTitle } from "./styles/SMultiselectInputDropdownTitle";
import { SMultiSelectInputWrapper } from "./styles/SMultiSelectInputWrapper";
import { SRequiredIndicator } from "./styles/SRequiredIndicator";

export type TDataSourceItem = {
  id: number | string;
  label: string;
  color: string;
};

interface IMultiselectInputDropdown {
  values: TDataSourceItem[];
  placeholder?: string;
  dataSource: TDataSourceItem[];
  onSelectValue?: (option: TDataSourceItem) => void;
  renderDataItem?: (option: TDataSourceItem) => JSX.Element;
  renderInputItem?: (option: TDataSourceItem) => JSX.Element;
  onClose?: () => void;
  onClick?: () => void;
  popupHeader?: JSX.Element;
  popupFooter?: JSX.Element;
  opened: boolean;
  label?: string;
  required?: boolean;
}

export const MultiselectInputDropdown: React.FC<IMultiselectInputDropdown> = ({
  opened,
  values,
  placeholder,
  dataSource,
  renderDataItem,
  renderInputItem,
  onSelectValue,
  popupHeader,
  popupFooter,
  onClose,
  onClick,
  label,
  required,
}) => {
  const ref = React.useRef(null);

  const onChange = (option: TDataSourceItem) => {
    onSelectValue?.(option);
  };

  const onCloseSelect = () => {
    onClose?.();
  };

  return (
    <ClickOutside onClickOutside={onCloseSelect}>
      <div>
        <SMultiselectInputDropdown active={opened} ref={ref} onClick={onClick}>
          {label && (
            <SMultiselectInputDropdownLabel>
              {label} {required && <SRequiredIndicator />}
            </SMultiselectInputDropdownLabel>
          )}
          <SMultiSelectInputWrapper>
            <SMultiselectInputDropdownTitle>
              {values &&
                values.length !== 0 &&
                values.map((item: TDataSourceItem) =>
                  renderInputItem ? (
                    <div key={item.id}>{renderInputItem(item)}</div>
                  ) : (
                    <OutLineLabel
                      key={item.id}
                      size="medium"
                      colorLabel={<ColorLabel color={item.color} />}
                      icon={<IconClose size={16} />}
                    >
                      {item.label}
                    </OutLineLabel>
                  ),
                )}
              {values.length === 0 && placeholder}
            </SMultiselectInputDropdownTitle>
            <SDropdownArrow opened={opened}>
              <IconChevronDown size={24}></IconChevronDown>
            </SDropdownArrow>
          </SMultiSelectInputWrapper>
        </SMultiselectInputDropdown>
        {opened && (
          <Popover disableTriangle placement="bottomRight" reference={ref}>
            <SMultiselectInputDropdownSelect>
              {popupHeader}
              {dataSource &&
                dataSource.map((option) =>
                  renderDataItem ? (
                    <div
                      key={option.id}
                      onClick={() => {
                        onChange(option);
                      }}
                    >
                      {renderDataItem(option)}
                    </div>
                  ) : (
                    <div key={option.id}>
                      <TagListItem
                        onClick={() => {
                          onChange(option);
                        }}
                        outlineLabel={
                          <OutLineLabel size="medium" colorLabel={<ColorLabel color={option.color} />}>
                            {option.label}
                          </OutLineLabel>
                        }
                      />
                    </div>
                  ),
                )}
              {popupFooter}
            </SMultiselectInputDropdownSelect>
          </Popover>
        )}
      </div>
    </ClickOutside>
  );
};
