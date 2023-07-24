import React, { ReactNode } from "react";
import { IconChevronDown, IconClose } from "../../icons";
import { ClickOutside } from "../../utils";
import { OutLineLabel } from "../out-line-label";
import ColorLabel from "../out-line-label/ColorLabel";

import { Popover, TPlacement } from "../popover";
import { TagListItem } from "../tag-list-item";

import { SDropdownArrow } from "./styles/SDropdownArrow";
import { SIconCloseWrapper } from "./styles/SIconCloseWrapper";
import { SMultiselectInputDropdown } from "./styles/SMultiselectInputDropdown";
import { SMultiselectInputDropdownLabel } from "./styles/SMultiselectInputDropdownLabel";
import { SMultiselectInputDropdownSelect } from "./styles/SMultiselectInputDropdownSelect";
import { SMultiselectInputDropdownTitle } from "./styles/SMultiselectInputDropdownTitle";
import { SMultiSelectInputWrapper } from "./styles/SMultiSelectInputWrapper";
import { SRequiredIndicator } from "./styles/SRequiredIndicator";
import { SMultiselectInputDropdownSelectList } from "./styles/SMultiselectInputDropdownSelectList";

export type TDataSourceItem = {
  id: number | string;
  label: string | ReactNode;
  color: string;
};

interface IMultiselectInputDropdown {
  values: TDataSourceItem[];
  placeholder?: string | ReactNode;
  dataSource: TDataSourceItem[];
  onSelectValue?: (option: TDataSourceItem) => void;
  renderDataItem?: (option: TDataSourceItem) => JSX.Element;
  renderInputItem?: (option: TDataSourceItem) => JSX.Element;
  onClose?: () => void;
  onClick?: () => void;
  popupHeader?: JSX.Element;
  popupFooter?: JSX.Element;
  opened: boolean;
  label?: string | ReactNode;
  required?: boolean;
  error?: boolean;
  dropdownMaxHeight?: number;
  dropdownStyle?: React.CSSProperties;
  dropdownWrapperRef?: React.RefObject<HTMLDivElement>;
  dropdownPlacement?: TPlacement;
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
  error,
  dropdownMaxHeight,
  dropdownStyle,
  dropdownWrapperRef,
}) => {
  const ref = React.useRef(null);

  const onChange = (option: TDataSourceItem) => {
    onSelectValue?.(option);
  };

  const onCloseSelect = () => {
    onClose?.();
  };

  const OutlineLabelIcon = ({ item }: { item: TDataSourceItem }) => {
    return (
      <SIconCloseWrapper
        onClick={(e) => {
          e.stopPropagation();
          onSelectValue?.(item);
        }}
      >
        <IconClose size={16} />
      </SIconCloseWrapper>
    );
  };

  return (
    <ClickOutside onClickOutside={onCloseSelect}>
      <div>
        <SMultiselectInputDropdown error={error} active={opened} ref={ref} onClick={onClick}>
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
                      icon={<OutlineLabelIcon item={item} />}
                    >
                      {item.label}
                    </OutLineLabel>
                  ),
                )}
              {values.length === 0 && placeholder}
            </SMultiselectInputDropdownTitle>
            <SDropdownArrow opened={opened}>
              <IconChevronDown size={24} />
            </SDropdownArrow>
          </SMultiSelectInputWrapper>
        </SMultiselectInputDropdown>
        <Popover display={opened} disableTriangle placement="top" reference={ref}>
          <div ref={dropdownWrapperRef}>
            <SMultiselectInputDropdownSelect style={dropdownStyle}>
              {popupHeader}
              <SMultiselectInputDropdownSelectList maxHeight={dropdownMaxHeight}>
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
              </SMultiselectInputDropdownSelectList>
              {popupFooter}
            </SMultiselectInputDropdownSelect>
          </div>
        </Popover>
      </div>
    </ClickOutside>
  );
};
